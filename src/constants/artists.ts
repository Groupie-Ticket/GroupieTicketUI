import artista1 from '../assets/artista1.png';
import artista2 from '../assets/artista2.png';
import artista3 from '../assets/artista3.png';
import artista4 from '../assets/artista4.png';


export interface Artist {
    id: number;
    name: string;
    price: string;
    image: string;
}


export const getPopularArtists = (): Artist[] => [
    {
        id: 1,
        name: 'Christian Nodal',
        price: 'Desde $0,000.00 MXN',
        image: artista1,
    },
    {
        id: 2,
        name: 'Santa Fe Klan',
        price: 'Desde $0,000.00 MXN',
        image: artista2,
    },
    {
        id: 3,
        name: 'Banda MS',
        price: 'Desde $0,000.00 MXN',
        image: artista3,
    },
    {
        id: 4,
        name: 'Julión Álvarez',
        price: 'Desde $0,000.00 MXN',
        image: artista4,
    },
];