const GAMES_DATA = [
    // --- 1. PROTOTYPE ---
    {
        id: 'prototype1',
        nombre: 'Prototype',
        appid: '219990', 
        portada_card: 'image/prototype.png',
        portada_miniatura: 'image/prototype.png',
        peso: '7.3 GB',
        peso_mb: 7300, 
        lanzamiento: '9 de junio de 2009',
        valoracion_metacritic: '79', 
        descripcion: 'Conviértete en Alex Mercer, un mutante con amnesia y poderes de cambio de forma, mientras descubre la conspiración detrás de un brote viral en Nueva York.',
        genero: 'Acción, Mundo Abierto, Aventura',
        publisher: 'Activision', 
        modo_juego: 'Un Jugador',
        
        links_descarga: [
            { parte: 'Descarga Completa', url: 'https://www.mediafire.com/file/ev4m7z428ok0ypg/Prototype.zip' }
        ],
        password: 'N/A', 
        instalacion: 'PORTABLE: El juego es portable. Solo descomprimir el archivo ZIP y ejecutar el "prototypef.exe" principal.',
        
        capturas: ['https://via.placeholder.com/600x350/333/ffffff?text=Prototype+Captura+1'],
        requisitos: {
            os: 'Windows XP (SP3)/Vista (SP2)/7/8',
            procesador: 'Intel Core 2 Duo 2.6 GHz / AMD Athlon 64 X2 3800+',
            memoria: '1 GB (XP) / 2 GB (Vista/7/8) RAM',
            graficos: 'NVIDIA GeForce 7800 256 MB / ATI Radeon X1800 256 MB',
            almacenamiento: '8 GB'
        }
    },

    // --- 2. SCARFACE: THE WORLD IS YOURS ---
    {
        id: 'scarface',
        nombre: 'Scarface: The World Is Yours',
        appid: 'N/A', 
        portada_card: 'image/scarface.png',
        portada_miniatura: 'image/scarface.png',
        peso: '2.17 GB', 
        peso_mb: 2170, 
        lanzamiento: '20 de septiembre de 2006',
        valoracion_metacritic: '75',
        descripcion: 'Continúa la saga de Tony Montana en un mundo abierto de acción en Miami, construyendo su imperio después de los eventos de la película.',
        genero: 'Acción, Mundo Abierto, Shooter',
        publisher: 'Vivendi Universal Games', 
        modo_juego: 'Un Jugador',
        
        links_descarga: [
            { parte: 'Descarga Completa', url: 'https://www.mediafire.com/file/ttqk6fy5e8ecu1y/Scarface+Español.zip/file' }
        ],
        password: 'N/A', 
        instalacion: 'PORTABLE: Descomprimir el archivo ZIP y ejecutar el .exe principal.',
        
        capturas: ['https://via.placeholder.com/600x350/7A0413/ffffff?text=Scarface+Captura+1'],
        requisitos: {
            os: 'Windows 7 / 8.1 / 10',
            procesador: 'Pentium 4 2.8 GHz o AMD equivalente',
            memoria: '512 MB RAM',
            graficos: 'ATI Radeon x800 o NVIDIA GeForce FX 6800',
            almacenamiento: '3 GB'
        }
    },

    // --- 3. RESIDENT EVIL 5 GOLD EDITION ---
    {
        id: 're5ge',
        nombre: 'Resident Evil 5 Gold Edition',
        appid: '21690', 
        portada_card: 'image/residentevil5ge.png',
        portada_miniatura: 'image/residentevil5ge.png',
        peso: '7.08 GB', 
        peso_mb: 7080, 
        lanzamiento: '5 de marzo de 2009',
        valoracion_metacritic: '72',
        descripcion: 'Chris Redfield y Sheva Alomar se aventuran en África para detener una amenaza bioterrorista. Incluye el contenido extra de la Gold Edition.',
        genero: 'Survival Horror, Acción, Shooter, Co-op',
        publisher: 'Capcom', 
        modo_juego: 'Un Jugador, Multijugador Co-op',
        
        links_descarga: [
            { parte: 'Descarga Completa', url: 'https://www.mediafire.com/file/yintjgtfnnnvl4k/RE5+-+ONLY+GAMER.rar/file' }
        ],
        password: 'N/A', 
        instalacion: 'PORTABLE: Descomprimir el archivo RAR y ejecutar el .exe de la versión portable.',
        
        capturas: ['https://via.placeholder.com/600x350/000000/ffffff?text=RE5+Captura+1'],
        requisitos: {
            os: 'Windows Vista (1GB) / Windows XP (512 Mb)',
            procesador: 'Intel Pentium AMD Athlon64 x2',
            memoria: '512 MB (XP) / 1 GB (Vista) RAM',
            graficos: 'NVIDIA GeForce 6800 series ó ATI Radeon HD 2400 Pro',
            almacenamiento: '9 GB'
        }
    },

    // --- 4. DEVIL MAY CRY 3 SPECIAL EDITION ---
    {
        id: 'dmc3se',
        nombre: 'Devil May Cry 3 Special Edition',
        appid: '6550', 
        portada_card: 'image/devilmaycry3.png',
        portada_miniatura: 'image/devilmaycry3.png',
        peso: '3.11 GB', 
        peso_mb: 3110, 
        lanzamiento: '24 de enero de 2006',
        valoracion_metacritic: '74',
        descripcion: 'La precuela que revela los orígenes de Dante y la rivalidad con su hermano Vergil, con un sistema de combate rápido y estilizado.',
        genero: 'Hack and Slash, Acción, Aventura',
        publisher: 'Capcom', 
        modo_juego: 'Un Jugador',
        
        links_descarga: [
            { parte: 'Descarga Completa', url: 'https://www.mediafire.com/file/4wp5n54vkor3udr/Devil+May+Cry+3+Special+Edition.rar/file' }
        ],
        password: 'N/A', 
        instalacion: 'PORTABLE: Descomprimir el archivo RAR y ejecutar el .exe de la versión portable. Se recomienda configurar un mando.',
        
        capturas: ['https://via.placeholder.com/600x350/301934/ffffff?text=DMC3+Captura+1'],
        requisitos: {
            os: 'Windows 2000/XP/Vista/7/8',
            procesador: 'Pentium III 1 GHz o AMD Athlon',
            memoria: '256 MB RAM',
            graficos: '128 MB DirectX® 9.0c compatible',
            almacenamiento: '10 GB'
        }
    },

    // --- 5. MAX PAYNE 3 ---
    {
        id: 'mp3',
        nombre: 'Max Payne 3',
        appid: '20410', 
        portada_card: 'image/maxpayne3.png',
        portada_miniatura: 'image/maxpayne3.png',
        peso: '14.36 GB', 
        peso_mb: 14360, 
        lanzamiento: '29 de mayo de 2012',
        valoracion_metacritic: '87',
        descripcion: 'Max Payne, exdetective, trabaja en seguridad privada en Brasil, sumido en la depresión y el Bullet Time, mientras busca redención.',
        genero: 'Tercera Persona Shooter, Acción, Neo-Noir',
        publisher: 'Rockstar Games', 
        modo_juego: 'Un Jugador, Multijugador',
        
        links_descarga: [
            { parte: 'Parte 1 (Juego y Comp.)', url: 'https://www.mediafire.com/file/omimxpnsc0n4a5d/Jxxxx_y_Complementos.part1.rar/file' },
            { parte: 'Parte 2 (Juego y Comp.)', url: 'https://www.mediafire.com/file/gp1igy0xpwp0sw7/Jxxxx_y_Complementos.part2.rar/file' }
        ],
        password: 'Brayan S', // MANTIENE LA CONTRASEÑA
        instalacion: `INSTALADOR: ABRIR CARPETA "Max Payne 3 Complete Edition", luego abrir el "setup.exe" y instalar.
- ABRIR CARPETA "Max Payne 3 update" y abrir el "Max Payne 3 update 1.0.0.216 - 1.0.0.255" para actualizar el juego.`,
        
        capturas: ['https://via.placeholder.com/600x350/4A4A4A/ffffff?text=MP3+Captura+1'],
        requisitos: {
            os: 'Windows 7 (32 y 64 bits)',
            procesador: 'Intel Dual Core 2.4 GHZ o AMD Dual Core 2.6 GHZ',
            memoria: '2 GB RAM',
            graficos: 'NVIDIA 8600 GT (512 MB) o Radeon HD 3400 (512 MB)',
            almacenamiento: '35 GB'
        }
    },

    // --- 6. MAX PAYNE 2: THE FALL OF MAX PAYNE ---
    {
        id: 'mp2',
        nombre: 'Max Payne 2: The Fall of Max Payne',
        appid: '20410', 
        portada_card: 'image/maxpayne2.png',
        portada_miniatura: 'image/maxpayne2.png',
        peso: '1.17 GB', 
        peso_mb: 1170, 
        lanzamiento: '15 de octubre de 2003',
        valoracion_metacritic: '86',
        descripcion: 'La oscura y poética secuela del clásico shooter. Max Payne está de vuelta, buscando venganza mientras una conspiración envuelve su vida.',
        genero: 'Tercera Persona Shooter, Acción, Neo-Noir',
        publisher: 'Rockstar Games', 
        modo_juego: 'Un Jugador',
        
        links_descarga: [
            { parte: 'Descarga Completa', url: 'https://www.mediafire.com/file/kficgjh9y3m51kg/Max+Payne+2+The+Fall+of+Max+Payne.rar/file' }
        ],
        password: 'N/A', 
        instalacion: 'PORTABLE: Descomprimir el archivo RAR y ejecutar el .exe principal.',
        
        capturas: ['https://via.placeholder.com/600x350/1C1C1C/ffffff?text=MP2+Captura+1'],
        requisitos: {
            os: 'Windows 2000 / XP',
            procesador: 'PIII / Athlon a 1 GHz o Celeron / Duron a 1.2 GHz',
            memoria: '256 MB RAM',
            graficos: '32 Megas AGP con soporte de Hardware T&L',
            almacenamiento: '3 GB'
        }
    },

    // --- 7. MAX PAYNE ---
    {
        id: 'mp1',
        nombre: 'Max Payne',
        appid: '12140', 
        portada_card: 'image/maxpayne1.png',
        portada_miniatura: 'image/maxpayne1.png',
        peso: '512 MB', 
        peso_mb: 512, 
        lanzamiento: '23 de julio de 2001',
        valoracion_metacritic: '89',
        descripcion: 'El juego que introdujo el Bullet Time. Max Payne, un policía con el corazón roto, busca a los responsables del asesinato de su familia.',
        genero: 'Tercera Persona Shooter, Acción, Neo-Noir',
        publisher: 'Rockstar Games', 
        modo_juego: 'Un Jugador',
        
        links_descarga: [
            { parte: 'Descarga Completa', url: 'https://drive.usercontent.google.com/download?id=1osRObWT7EKLQwt9kzGnv47_Q-IPpSFkS&export=download&authuser=0' }
        ],
        password: 'N/A', 
        instalacion: 'PORTABLE: Descargar y ejecutar el .exe principal. (Verificar si es un ZIP o RAR al descargar).',
        
        capturas: ['https://via.placeholder.com/600x350/000000/ffffff?text=MP1+Captura+1'],
        requisitos: {
            os: 'Windows 2000 / XP',
            procesador: 'AMD / Intel a 450 MHz',
            memoria: '96 MB RAM',
            graficos: 'Tarjeta gráfica con 16 MB y compatible con Direct3D',
            almacenamiento: '3 GB'
        }
    },

    // --- 8. TREPANG 2 ---
    {
        id: 'trepang2',
        nombre: 'Trepang 2',
        appid: '1164950', 
        portada_card: 'image/trepang2.png',
        portada_miniatura: 'image/trepang2.png',
        peso: '17.42 GB', 
        peso_mb: 17420, 
        lanzamiento: '21 de junio de 2023',
        valoracion_metacritic: '85',
        descripcion: 'Un shooter de horror y acción con un combate brutal, inspirado en clásicos como F.E.A.R. Controla a un super soldado sin memoria con habilidades sobrenaturales.',
        genero: 'FPS, Acción, Horror, Shooter',
        publisher: 'Team Trepang Studios', 
        modo_juego: 'Un Jugador',
        
        links_descarga: [
            { parte: 'Parte 1', url: 'https://www.mediafire.com/file/s145y57g3a8u7px/Trepang2.zip/file' },
            { parte: 'Parte 2', url: 'https://www.mediafire.com/file/leyf8dple73n1m4/Trepang2.z01/file' }
        ],
        password: 'N/A', 
        instalacion: 'PORTABLE (2 Partes): Descargar ambas partes (.zip y .z01) en la misma carpeta. Descomprimir la parte .zip. Ejecutar el .exe principal.',
        
        capturas: ['https://via.placeholder.com/600x350/800080/ffffff?text=Trepang2+Captura+1'],
        requisitos: {
            os: 'Windows 10 64 bit',
            procesador: 'Intel Core i5-2550K o AMD FX-8370',
            memoria: '8 GB RAM',
            graficos: 'NVIDIA GeForce GTX 760 (2 GB) o AMD Radeon HD 7870 (2 GB)',
            almacenamiento: '35 GB'
        }
    },

    // --- 9. JUST CAUSE 2 ---
    {
        id: 'jc2',
        nombre: 'Just Cause 2',
        appid: '8190', 
        portada_card: 'image/justcause2.png',
        portada_miniatura: 'image/justcause2.png',
        peso: '3.77 GB', 
        peso_mb: 3770, 
        lanzamiento: '23 de marzo de 2010',
        valoracion_metacritic: '84',
        descripcion: 'Rico Rodriguez viaja a la isla de Panau para derrocar un dictador, ofreciendo un vasto mundo abierto, mucha acción y un icónico gancho de agarre.',
        genero: 'Mundo Abierto, Acción, Aventura',
        publisher: 'Square Enix', 
        modo_juego: 'Un Jugador',
        
        links_descarga: [
            { parte: 'Descarga Completa', url: 'https://www.mediafire.com/file/5r4vi712hzosuoe/Just%20Cause%202.zip' }
        ],
        password: 'N/A', 
        instalacion: 'PORTABLE: Descomprimir el archivo ZIP y ejecutar el .exe principal.',
        
        capturas: ['https://via.placeholder.com/600x350/00FFFF/000000?text=JC2+Captura+1'],
        requisitos: {
            os: 'Windows Vista (Windows XP no está soportado)',
            procesador: 'CPU Dual-core con SSE3 (Athlon 64 X2 4200+ / Pentium D a 3 GHz)',
            memoria: '2 GB RAM',
            graficos: 'Tarjeta compatible con DX10 y 256 MB (nVidia GeForce 8800 / ATI Radeon HD 2600 Pro)',
            almacenamiento: '5 GB',
        }
    },
    
    // ===========================================
    // === JUEGOS NUEVOS AGREGADOS ===
    // ===========================================

    // --- 10. SAS: SECURE TOMORROW ---
    {
        id: 'sas_secure_tomorrow',
        nombre: 'SAS: Secure Tomorrow',
        appid: 'N/A', 
        portada_card: 'image/sas_secure_tomorrow.png', // Placeholder (Necesitaría la imagen real)
        portada_miniatura: 'image/sas_secure_tomorrow.png',
        peso: '2.9 GB', 
        peso_mb: 2900, 
        lanzamiento: '31 de octubre de 2008', // Fecha estimada de lanzamiento
        valoracion_metacritic: 'N/A', 
        descripcion: 'Un shooter táctico en primera persona donde te unes al Servicio Aéreo Especial (SAS) para neutralizar amenazas terroristas globales.',
        genero: 'FPS, Táctico, Shooter',
        publisher: 'City Interactive', 
        modo_juego: 'Un Jugador',
        
        links_descarga: [
            { parte: 'Descarga Completa', url: 'https://drive.google.com/file/d/1sXK0qilG1HWn28l_k53rzRm9SNMyUrfF/view' }
        ],
        password: 'N/A', 
        instalacion: 'PORTABLE: Descomprimir el archivo y ejecutar el "GAME.EXE".',
        
        capturas: ['https://via.placeholder.com/600x350/008080/ffffff?text=SAS+Captura+1'],
        requisitos: {
            os: 'Windows XP/Vista/7',
            procesador: 'Pentium 4 a 2.0 GHz',
            memoria: '1 GB RAM',
            graficos: '128 MB GeForce FX5700 o Radeon 9700',
            almacenamiento: '5 GB'
        }
    },

    // --- 11. RAINBOW SIX: VEGAS ---
    {
        id: 'r6_vegas',
        nombre: 'Rainbow Six: Vegas',
        appid: '13930', 
        portada_card: 'image/r6_vegas.png', // Placeholder
        portada_miniatura: 'image/r6_vegas.png',
        peso: '4.53 GB', 
        peso_mb: 4600, 
        lanzamiento: '20 de noviembre de 2006', // Fecha estimada de lanzamiento
        valoracion_metacritic: '85', 
        descripcion: 'El equipo Rainbow es enviado a Las Vegas para detener una serie de ataques terroristas, ofreciendo acción táctica intensa y comandos en tercera persona.',
        genero: 'FPS, Táctico, Shooter',
        publisher: 'Ubisoft', 
        modo_juego: 'Un Jugador, Multijugador',
        
        links_descarga: [
            { parte: 'Descarga Completa', url: 'https://www.mediafire.com/file/kjxvsm734qep72f/Tom+Clancy%27s+Rainbow+Six+Vegas.zip/file' }
        ],
        password: 'N/A', 
        instalacion: 'PORTABLE: Descomprimir el archivo y ejecutar el ejecutable en: \\Binaries\\R6Vegas_Game.exe',
        
        capturas: ['https://via.placeholder.com/600x350/B0C4DE/000000?text=R6+Vegas+Captura+1'],
        requisitos: {
            os: 'Windows XP (SP2)/Vista/7',
            procesador: '2.2 GHz Pentium 4 con Hyper Treading o AMD Athlon 2200',
            memoria: '1 GB (XP) / 2 GB (Vista/7) RAM',
            graficos: '128 MB, con soporte para Shader 3.0',
            almacenamiento: '7 GB'
        }
    },

    // --- 12. RAINBOW SIX: VEGAS 2 ---
    {
        id: 'r6_vegas2',
        nombre: 'Rainbow Six: Vegas 2',
        appid: '6440', 
        portada_card: 'image/r6_vegas2.png', // Placeholder
        portada_miniatura: 'image/r6_vegas2.png',
        peso: '4.68 GB', 
        peso_mb: 4700, 
        lanzamiento: '17 de marzo de 2008', // Fecha estimada de lanzamiento
        valoracion_metacritic: '80', 
        descripcion: 'Secuela directa de Vegas. Asume el papel de Bishop, un miembro clave de Rainbow, mientras se enfrenta a una amenaza creciente en la ciudad del pecado.',
        genero: 'FPS, Táctico, Shooter',
        publisher: 'Ubisoft', 
        modo_juego: 'Un Jugador, Multijugador',
        
        links_descarga: [
            { parte: 'Descarga Completa', url: 'https://www.mediafire.com/file/74u1xknyqo0ym9t/Tom_Clancy%27s_Rainbow_Six_Vegas_2.zip/file' }
        ],
        password: 'N/A', 
        instalacion: 'PORTABLE: Descomprimir el archivo y ejecutar el ejecutable en: \\Binaries\\R6Vegas2_Game.exe',
        
        capturas: ['https://via.placeholder.com/600x350/4682B4/ffffff?text=R6+Vegas+2+Captura+1'],
        requisitos: {
            os: 'Windows XP (SP2)/Vista/7',
            procesador: '2.2 GHz Pentium 4 con Hyper Treading o AMD Athlon 2200',
            memoria: '1 GB (XP) / 2 GB (Vista/7) RAM',
            graficos: '128 MB, con soporte para Shader 3.0',
            almacenamiento: '10 GB'
        }
    },
    
    // --- 13. GTA VICE CITY (MOD REMASTERIZADO) ---
    {
        id: 'gta_vc_r',
        nombre: 'GTA Vice City Mod Remaster',
        appid: '12110', 
        portada_card: 'image/gtavc.png', // Placeholder
        portada_miniatura: 'image/gtavc.png',
        peso: '1.7GB', 
        peso_mb: 1700, 
        lanzamiento: '27 de octubre de 2002', 
        valoracion_metacritic: '94', 
        descripcion: 'Revive la historia de Tommy Vercetti en los 80, en una versión de Vice City con mejoras gráficas y de jugabilidad no oficiales.',
        genero: 'Mundo Abierto, Acción, Aventura',
        publisher: 'Rockstar Games', 
        modo_juego: 'Un Jugador',
        
        links_descarga: [
            { parte: 'Descarga Completa', url: 'http://www.mediafire.com/file/9e5yhsf3887hipx/Gta+vr+remstd+CR.rar/file' }
        ],
        password: 'N/A', 
        instalacion: 'PORTABLE: Descomprimir el archivo RAR y ejecutar el .exe principal del juego modificado.',
        
        capturas: ['https://via.placeholder.com/600x350/FF00FF/ffffff?text=VC+Remaster+Captura+1'],
        requisitos: {
            os: 'Microsoft Windows 2000 / XP',
            procesador: 'Intel Pentium III a 800 MHz / AMD Athlon a 800 MHz o superior',
            memoria: '128 MB de RAM',
            graficos: 'Dispositivo de 32 MB ("GeForce" o superior)',
            almacenamiento: '3 GB'
        }
    },
    
    // --- 14. GTA SAN ANDREAS ---
    {
        id: 'gta_sa',
        nombre: 'GTA San Andreas',
        appid: '12120', 
        portada_card: 'image/gtasa2.png', // Placeholder
        portada_miniatura: 'image/gtasa2.png',
        peso: '2.7 GB', 
        peso_mb: 2700, 
        lanzamiento: '26 de octubre de 2004', 
        valoracion_metacritic: '93', 
        descripcion: 'Carl "CJ" Johnson regresa a Los Santos para reunir a su familia y tomar el control de las calles en el estado ficticio de San Andreas.',
        genero: 'Mundo Abierto, Acción, Aventura',
        publisher: 'Rockstar Games', 
        modo_juego: 'Un Jugador',
        
        links_descarga: [
            { parte: 'Descarga Completa', url: 'https://drive.google.com/file/d/1rUv6cYpPR2lkxnsa9WTj0gOCHyZpAKH_/view' }
        ],
        password: 'N/A', 
        instalacion: 'PORTABLE: Descomprimir el archivo y ejecutar el .exe principal.',
        
        capturas: ['https://via.placeholder.com/600x350/0000FF/ffffff?text=SA+Captura+1'],
        requisitos: {
            os: 'Microsoft Windows 2000/XP',
            procesador: '1Ghz Pentium III ó AMD Athlon Procesador',
            memoria: '256MB de RAM',
            graficos: 'Tarjeta de video de 64MB (Geforce 3 ó superior)',
            almacenamiento: '5 GB'
        }
    }
];


