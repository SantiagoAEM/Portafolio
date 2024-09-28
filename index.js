////////// Navigation mobile hamburguer NAV code //////////
const hamburger = document.getElementById('hamburger');
const navigation = document.getElementById('navigation');

hamburger.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

////////// Animation NAV code //////////

let lastScrollY = window.scrollY;
const nav = document.querySelector('.headerNav');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

  // Añadir o quitar la sombra según la posición del scroll
    if (currentScrollY > 0) {
        nav.classList.add('shadow');
    } else {
        nav.classList.remove('shadow');
        
    }

  // Mostrar u ocultar la barra de navegación según el scroll
    if (currentScrollY > lastScrollY) {
        // Usuario está desplazando hacia abajo - ocultar barra de navegación
        nav.classList.add('hide');
        
    } else {
        // Usuario está desplazando hacia arriba - mostrar barra de navegación
        nav.classList.remove('hide');
    }
    
    lastScrollY = currentScrollY; // Actualizar la última posición de scroll
});