import { ICarouselItem } from "../../Reutilizable/Components/carousel/icarousel-item.metadata";

/**
 * Constante que contiene los datos del carrusel.
 * Cada objeto representa un elemento del carrusel con su título, subtítulo, enlace e imagen.
 */
export const CAROUSEL_DATA_ITEMS: ICarouselItem[] = [
    {
        id: 1,
        title: {
            first: '6ta Semana de la',
            second: 'Mecatrónica'
        },
        subtitle: 'Esto es una gran descripcion sobre la semana de la mecatrónica',
        link: '/',
        image: 'assets/img/carousel/prueba1.jpeg'
    },
    {
        id: 2,
        title: {
            first: 'Registro:',
            second: 'Concurso Robótica'
        },
        subtitle: 'Categorías: Seguidor libre, sumo libre.',
        link: 'https://www.instagram.com/',
        image: 'assets/img/carousel/prueba2.jpeg'
    },
    {
        id: 3,
        title: {
            first: 'TITULO',
            second: 'Principal 3'
        },
        subtitle: 'Aquí pueden ir más imágenes con enlaces en botón o sin ellos',
        link: '/',
        image: 'assets/img/carousel/prueba3.jpeg'
    },

];