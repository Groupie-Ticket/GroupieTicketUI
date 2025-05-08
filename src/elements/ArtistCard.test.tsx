import { render, screen } from '@testing-library/react';
import ArtistCard from './ArtistCard';

describe('ArtistCard test', () => {
    const props = {
        name: 'Christian Nodal',
        price: 'Desde $1,000.00 MXN',
        image: 'test-image.png',
    };

    it('renderiza el nombre del artista', () => {
        render(<ArtistCard {...props} />);
        expect(screen.getByText(props.name)).toBeInTheDocument();
    });

    it('muestra el precio del artista', () => {
        render(<ArtistCard {...props} />);
        expect(screen.getByText(props.price)).toBeInTheDocument();
    });

    it('renderiza la imagen del artista con alt correcto', () => {
        render(<ArtistCard {...props} />);
        const image = screen.getByAltText(props.name);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', props.image);
    });

    it('muestra el ícono de favorito', () => {
        render(<ArtistCard {...props} />);
        expect(screen.getByAltText('Favorite')).toBeInTheDocument();
    });
});
