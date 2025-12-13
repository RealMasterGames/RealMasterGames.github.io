const toggleFilterBtn = document.getElementById('toggleFilterBtn');
const filterDropdown = document.getElementById('filterDropdown');
const searchInput = document.getElementById('searchInput');
const countLabel = document.getElementById('countLabel');
const alphabetFiltersContainer = document.getElementById('alphabetFilters');
const clearFiltersBtn = document.getElementById('clearFiltersBtn'); 

// Contenedores de filtros dinámicos
const gamesGrid = document.getElementById('gamesGrid');
const genreFiltersContainer = document.getElementById('genreFilters');
const publisherFiltersContainer = document.getElementById('publisherFilters');
const yearFiltersContainer = document.getElementById('yearFilters');
const modeFiltersContainer = document.getElementById('modeFilters');
const popularityFiltersContainer = document.getElementById('popularityFilters');
const sizeFiltersContainer = document.getElementById('sizeFilters'); 

// Búsqueda dentro de filtros
const genreSearchInput = document.getElementById('genreSearch');
const publisherSearchInput = document.getElementById('publisherSearch');

let initialGameCards = []; 
let allGenres = new Set();
let allPublishers = new Set();
let allYears = new Set();
let allModes = new Set();

// Estado actual de los filtros
let activeLetter = 'all'; 
let activeFilters = {
    genre: null,
    publisher: null,
    year: null,
    mode: null,
    popularity: null,
    size: null 
};

// --- FUNCIONES AUXILIARES ---

/**
 * Normaliza una cadena para comparación (minúsculas y sin acentos/caracteres especiales).
 * @param {string} str La cadena a normalizar.
 */
function normalizeString(str) {
    if (!str) return '';
    return str.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

/**
 * Algoritmo de Fisher-Yates para mezclar arrays (aleatoriedad).
 * @param {Array} array El array a mezclar.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

/**
 * Extrae todas las opciones de filtro únicas de GAMES_DATA.
 */
function extractFilterOptions() {
    allGenres.clear();
    allPublishers.clear();
    allYears.clear();
    allModes.clear();

    GAMES_DATA.forEach(game => {
        // Géneros
        game.genero.split(',').forEach(g => {
            const genre = g.trim();
            if (genre) allGenres.add(genre);
        });

        // Publisher
        if (game.publisher) allPublishers.add(game.publisher.trim());

        // Año
        const yearMatch = game.lanzamiento.match(/\d{4}/);
        if (yearMatch) allYears.add(yearMatch[0]);

        // Modo de juego
        game.modo_juego.split(',').forEach(m => {
            const mode = m.trim();
            if (mode) allModes.add(mode);
        });
    });
}

/**
 * Genera y muestra los filtros en el HTML.
 */
function updateFilterGroupDisplays() {
    // 1. Géneros
    genreFiltersContainer.innerHTML = '';
    const sortedGenres = Array.from(allGenres).sort();
    sortedGenres.forEach(genre => {
        if (normalizeString(genre).includes(normalizeString(genreSearchInput.value))) {
            const filterDiv = document.createElement('div');
            filterDiv.className = 'filter-option';
            filterDiv.setAttribute('data-filter', genre);
            filterDiv.textContent = genre;
            genreFiltersContainer.appendChild(filterDiv);
        }
    });

    // 2. Publisher
    publisherFiltersContainer.innerHTML = '';
    const sortedPublishers = Array.from(allPublishers).sort();
    sortedPublishers.forEach(publisher => {
         if (normalizeString(publisher).includes(normalizeString(publisherSearchInput.value))) {
            const filterDiv = document.createElement('div');
            filterDiv.className = 'filter-option';
            filterDiv.setAttribute('data-filter', publisher);
            filterDiv.textContent = publisher;
            publisherFiltersContainer.appendChild(filterDiv);
        }
    });
    
    // 3. Año de Lanzamiento (orden descendente)
    yearFiltersContainer.innerHTML = '';
    const sortedYears = Array.from(allYears).sort().reverse();
    sortedYears.forEach(year => {
        const filterDiv = document.createElement('div');
        filterDiv.className = 'filter-option';
        filterDiv.setAttribute('data-filter', year);
        filterDiv.textContent = year;
        yearFiltersContainer.appendChild(filterDiv);
    });

    // 4. Modo de Juego
    modeFiltersContainer.innerHTML = '';
    Array.from(allModes).forEach(mode => {
        const filterDiv = document.createElement('div');
        filterDiv.className = 'filter-option';
        filterDiv.setAttribute('data-filter', mode);
        filterDiv.textContent = mode;
        modeFiltersContainer.appendChild(filterDiv);
    });

    // 5. Popularidad (Metacritic) 
    popularityFiltersContainer.innerHTML = `
        <div class="filter-option" data-filter=">90">+90</div>
        <div class="filter-option" data-filter="90-80">90-80</div>
        <div class="filter-option" data-filter="80-70">80-70</div>
        <div class="filter-option" data-filter="<70">-70</div>
    `;
    
    // 6. Peso (TAMAÑO🥵) - USANDO LA LISTA ACTUALIZADA DEL USUARIO
    sizeFiltersContainer.innerHTML = `
        <div class="filter-option" data-filter="<1000">0-1 GB</div>
        <div class="filter-option" data-filter="1000-5000">1-5 GB</div>
        <div class="filter-option" data-filter="5000-10000">5-10 GB</div>
        <div class="filter-option" data-filter="10000-20000">10-20 GB</div>
        <div class="filter-option" data-filter="20000-30000">20-30 GB</div>
        <div class="filter-option" data-filter="30000-40000">30-40 GB</div>
        <div class="filter-option" data-filter="40000-50000">40-50 GB</div>
        <div class="filter-option" data-filter="50000-60000">50-60 GB</div>
        <div class="filter-option" data-filter="60000-70000">60-70 GB</div>
        <div class="filter-option" data-filter="70000-80000">70-80 GB</div>
        <div class="filter-option" data-filter="80000-90000">80-90 GB</div>
        <div class="filter-option" data-filter="90000-100000">90-100GB</div>
        <div class="filter-option" data-filter=">100000">100GB+</div>
    `;

    // Reasigna todos los event listeners
    attachFilterListeners();
}


// --- LÓGICA DE FILTRADO Y VISUALIZACIÓN xd---

function generateGameCards() {
    gamesGrid.innerHTML = '';
    const cards = [];
    
    // APLICAR ALEATORIEDAD ANTES DE CREAR LAS TARJETAS
    shuffleArray(GAMES_DATA);

    GAMES_DATA.forEach(game => {
        const card = document.createElement('a');
        card.className = 'game-card';
        card.href = `game-detail.html?id=${game.id}`;
        card.setAttribute('data-id', game.id);
        card.setAttribute('data-name', normalizeString(game.nombre));
        card.setAttribute('data-genre', normalizeString(game.genero));
        card.setAttribute('data-publisher', normalizeString(game.publisher));
        card.setAttribute('data-year', game.lanzamiento.split(' ').pop());
        card.setAttribute('data-mode', normalizeString(game.modo_juego));
        card.setAttribute('data-size', game.peso_mb);
        card.setAttribute('data-metacritic', game.valoracion_metacritic || '0');

        const firstGenre = game.genero.split(',')[0].trim();
        const releaseYear = game.lanzamiento.split(' ').pop();

        card.innerHTML = `
            <div class="card-image-container">
                <img class="card-image" src="${game.portada_card}" alt="${game.nombre}">
                <div class="card-overlay">
                    <span class="info-tag genre">${firstGenre}</span>
                    <span class="info-tag year">${releaseYear}</span>
                    <span class="info-tag weight">${game.peso}</span> <div class="info-name">${game.nombre}</div>
                    <div class="download-btn-icon">↓</div> 
                </div>
            </div>
            <div class="card-info">
                <h3 class="game-title">${game.nombre}</h3>
            </div>
        `;
        
        cards.push(card);
    });
    
    initialGameCards = cards; 
    applyFilters();
}

/**
 * Genera y adjunta los filtros alfabéticos (A-Z, #, ALL).
 */
function generateAlphabetFilters() {
    alphabetFiltersContainer.innerHTML = '';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const letters = ['ALL', '#', ...alphabet.split('')];

    letters.forEach(letter => {
        const filterDiv = document.createElement('div');
        filterDiv.className = 'filter-option';
        if (letter === 'ALL') {
            filterDiv.classList.add('active');
        }
        filterDiv.setAttribute('data-filter', letter.toLowerCase());
        filterDiv.textContent = letter;
        alphabetFiltersContainer.appendChild(filterDiv);
    });
    
    // Adjuntar listeners para el filtro alfabético
    alphabetFiltersContainer.querySelectorAll('.filter-option').forEach(filter => {
        filter.addEventListener('click', () => {
            const letter = filter.getAttribute('data-filter');
            
            // Limpiar activos y establecer el nuevo
            alphabetFiltersContainer.querySelectorAll('.filter-option').forEach(f => f.classList.remove('active'));
            filter.classList.add('active');
            
            activeLetter = letter;
            applyFilters();
        });
    });
}

/**
 * Aplica todos los filtros activos a las tarjetas de juego.
 */
function applyFilters() {
    let visibleCount = 0;
    
    // 1. Iterar sobre todas las tarjetas de juego
    initialGameCards.forEach(card => {
        let isVisible = true;
        
        // Obtener valores de la tarjeta
        const name = card.getAttribute('data-name');
        const genre = card.getAttribute('data-genre');
        const publisher = card.getAttribute('data-publisher');
        const year = card.getAttribute('data-year');
        const mode = card.getAttribute('data-mode');
        const size = parseInt(card.getAttribute('data-size'), 10);
        const metacritic = parseInt(card.getAttribute('data-metacritic'), 10);
        
        // 2. Filtro de Búsqueda Principal (Nombre/AppID)
        const searchTerm = normalizeString(searchInput.value);
        if (searchTerm && !name.includes(searchTerm) && !card.getAttribute('data-id').includes(searchTerm)) {
            isVisible = false;
        }
        
        // 3. Filtro Alfabético
        if (isVisible && activeLetter && activeLetter !== 'all') {
            const firstChar = name.charAt(0).toLowerCase();
            
            if (activeLetter === '#') {
                // Si la letra no es una letra (es un número o símbolo)
                if (firstChar >= 'a' && firstChar <= 'z') {
                    isVisible = false;
                }
            } else if (firstChar !== activeLetter) {
                isVisible = false;
            }
        }
        
        // 4. Filtro de Género
        if (isVisible && activeFilters.genre && !genre.includes(normalizeString(activeFilters.genre))) {
            isVisible = false;
        }

        // 5. Filtro de Publisher
        if (isVisible && activeFilters.publisher && !publisher.includes(normalizeString(activeFilters.publisher))) {
            isVisible = false;
        }
        
        // 6. Filtro de Año
        if (isVisible && activeFilters.year && year !== activeFilters.year) {
            isVisible = false;
        }
        
        // 7. Filtro de Modo
        if (isVisible && activeFilters.mode && !mode.includes(normalizeString(activeFilters.mode))) {
            isVisible = false;
        }
        
        // 8. Filtro de Popularidad (Metacritic) - LÓGICA DE RANGO
        if (isVisible && activeFilters.popularity) {
            const filter = activeFilters.popularity;
            let scorePass = false;

            if (filter.startsWith('>')) { // e.g., >90
                const min = parseInt(filter.substring(1), 10);
                if (metacritic > min) scorePass = true;
            } else if (filter.startsWith('<')) { // e.g., <70
                const max = parseInt(filter.substring(1), 10);
                if (metacritic < max) scorePass = true;
            } else if (filter.includes('-')) { // e.g., 90-80 (Max-Min para Metacritic)
                const [maxStr, minStr] = filter.split('-');
                const min = parseInt(minStr, 10);
                const max = parseInt(maxStr, 10);
                if (metacritic >= min && metacritic <= max) scorePass = true;
            }

            if (!scorePass) {
                isVisible = false;
            }
        }
        
        // 9. Filtro de Tamaño (Peso) - LÓGICA DE RANGO
        if (isVisible && activeFilters.size) {
            const filter = activeFilters.size;
            let sizePass = false;
            
            if (filter.startsWith('<')) { // e.g., <1000
                const max = parseInt(filter.substring(1), 10);
                if (size < max) sizePass = true;
            } else if (filter.startsWith('>')) { // e.g., >100000 (ajustado al nuevo límite)
                const min = parseInt(filter.substring(1), 10);
                if (size > min) sizePass = true;
            } else if (filter.includes('-')) { // e.g., 1000-5000 (Min-Max para tamaño)
                const [minStr, maxStr] = filter.split('-');
                const min = parseInt(minStr, 10);
                const max = parseInt(maxStr, 10);
                if (size >= min && size <= max) sizePass = true;
            }

            if (!sizePass) {
                isVisible = false;
            }
        }

        // 10. Mostrar/Ocultar y Actualizar Contador
        if (isVisible) {
            card.classList.remove('hidden');
            gamesGrid.appendChild(card);
            visibleCount++;
        } else {
            card.classList.add('hidden');
            // Remove card from grid if currently present (optional optimization)
            if (card.parentNode === gamesGrid) {
                gamesGrid.removeChild(card);
            }
        }
    });

    countLabel.textContent = `Mostrando ${visibleCount} juegos`;
}


/**
 * Adjunta listeners a todos los filtros generados dinámicamente.
 */
function attachFilterListeners() {
    const filters = document.querySelectorAll('#filterDropdown .filter-option');
    
    filters.forEach(filter => {
        filter.addEventListener('click', (e) => {
            e.preventDefault(); // Previene cualquier acción por defecto
            
            const filterValue = filter.getAttribute('data-filter');
            const parentContainer = filter.closest('.filter-options');
            const parentId = parentContainer.id;
            let filterKey = '';
            
            // Determinar la clave del filtro
            if (parentId === 'genreFilters') filterKey = 'genre';
            else if (parentId === 'publisherFilters') filterKey = 'publisher';
            else if (parentId === 'yearFilters') filterKey = 'year';
            else if (parentId === 'modeFilters') filterKey = 'mode';
            else if (parentId === 'popularityFilters') filterKey = 'popularity';
            else if (parentId === 'sizeFilters') filterKey = 'size';
            else return; // No es un filtro conocido

            // Lógica de activación/desactivación
            if (filter.classList.contains('active')) {
                // Desactivar
                filter.classList.remove('active');
                activeFilters[filterKey] = null;
            } else {
                // Activar (y desactivar otros del mismo grupo)
                parentContainer.querySelectorAll('.filter-option').forEach(f => f.classList.remove('active'));
                filter.classList.add('active');
                activeFilters[filterKey] = filterValue;
            }

            applyFilters();
        });
    });
}

// --- LISTENERS DE LA APLICACIÓN ---

// Búsqueda principal
searchInput.addEventListener('input', applyFilters);

// Búsqueda dentro de filtros de Género y Publisher
genreSearchInput.addEventListener('input', updateFilterGroupDisplays);
publisherSearchInput.addEventListener('input', updateFilterGroupDisplays);

// Limpiar todos los filtros
clearFiltersBtn.addEventListener('click', () => {
    // 1. Limpiar filtros activos
    activeFilters = {
        genre: null,
        publisher: null,
        year: null,
        mode: null,
        popularity: null,
        size: null 
    };

    // 2. Limpiar visualmente
    document.querySelectorAll('#filterDropdown .filter-option.active').forEach(f => f.classList.remove('active'));
    
    // 3. Restablecer búsqueda alfabética a 'ALL'
    document.querySelector('#alphabetFilters .filter-option.active')?.classList.remove('active');
    document.querySelector('#alphabetFilters .filter-option[data-filter="all"]').classList.add('active');
    activeLetter = 'all';

    // 4. Limpiar input de búsqueda principal
    searchInput.value = '';
    
    // 5. Reaplicar filtros
    applyFilters();
    
    // Opcional: Cerrar el menú después de limpiar
    filterDropdown.classList.remove('show');
});


// --- INICIALIZACIÓN ---

function initializeFilters() {
    extractFilterOptions(); 
    updateFilterGroupDisplays(); 
    generateGameCards(); // Genera y mezcla los juegos
    generateAlphabetFilters(); 
}

// Inicializar al cargar el DOM
document.addEventListener('DOMContentLoaded', initializeFilters);