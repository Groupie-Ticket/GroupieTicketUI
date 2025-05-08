import { render, screen } from '@testing-library/react';
import AuctionCard from './AuctionCard';

jest.mock('./buttons/BuyTicket', () => () => (
    <button data-testid="buy-button">Comprar</button>
));

const mockProps = {
    date: '20 de Abril',
    title: 'Subasta de Conciertos',
    location: 'Teatro Principal',
    price: '$120',
    endingSoon: 'Termina pronto',
    image: 'test-image.jpg',
};

describe('AuctionCard', () => {
    it('renders all props correctly', () => {
        render(<AuctionCard {...mockProps} />);

        expect(screen.getByText(mockProps.date)).toBeInTheDocument();
        expect(screen.getByText(mockProps.title)).toBeInTheDocument();
        expect(screen.getByText(mockProps.location)).toBeInTheDocument();
        expect(screen.getByText(mockProps.price)).toBeInTheDocument();
        expect(screen.getByText(mockProps.endingSoon!)).toBeInTheDocument();
        expect(screen.getByRole('img')).toHaveAttribute('src', mockProps.image);
        expect(screen.getByRole('img')).toHaveAttribute('alt', mockProps.title);
        expect(screen.getByTestId('buy-button')).toBeInTheDocument();
    });

    it('does not render endingSoon if not provided', () => {
        const { queryByText } = render(
            <AuctionCard {...mockProps} endingSoon={undefined} />
        );
        expect(queryByText('Termina pronto')).not.toBeInTheDocument();
    });
});
