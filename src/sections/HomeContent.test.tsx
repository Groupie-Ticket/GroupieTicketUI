import { render, screen } from '@testing-library/react';
import HomeContent from './HomeContent';

// Mock de los componentes hijos
jest.mock('../components/HomeContent/PopularArtists', () => {
  return function MockPopularArtists() {
    return <div data-testid="popular-artists">Popular Artists Component</div>;
  };
});

jest.mock('../components/HomeContent/NewTickets', () => {
  return function MockNewTickets() {
    return <div data-testid="new-tickets">New Tickets Component</div>;
  };
});

jest.mock('../components/HomeContent/AuctionsTickets', () => {
  return function MockAuctionsTickets() {
    return <div data-testid="auctions-tickets">Auctions Tickets Component</div>;
  };
});

jest.mock('../components/HomeContent/SecundarySale', () => {
  return function MockSecundarySale() {
    return <div data-testid="secundary-sale">Secundary Sale Component</div>;
  };
});

jest.mock('../components/HomeContent/Promocionated', () => {
  return function MockPromocionated() {
    return <div data-testid="promocionated">Promocionated Component</div>;
  };
});

jest.mock('../components/HomeContent/Merch', () => {
  return function MockMerch() {
    return <div data-testid="merch">Merch Component</div>;
  };
});

jest.mock('../components/HomeContent/Streaming', () => {
  return function MockStreaming() {
    return <div data-testid="streaming">Streaming Component</div>;
  };
});

describe('HomeContent', () => {
  it('renders all child components in correct order', () => {
    render(<HomeContent />);
    
    // Verificar que cada componente esté presente
    expect(screen.getByTestId('popular-artists')).toBeInTheDocument();
    expect(screen.getByTestId('new-tickets')).toBeInTheDocument();
    expect(screen.getByTestId('auctions-tickets')).toBeInTheDocument();
    expect(screen.getByTestId('secundary-sale')).toBeInTheDocument();
    expect(screen.getByTestId('promocionated')).toBeInTheDocument();
    expect(screen.getByTestId('merch')).toBeInTheDocument();
    expect(screen.getByTestId('streaming')).toBeInTheDocument();
    
    // Verificar el orden
    const container = screen.getByTestId('home-content');
    const children = Array.from(container.children);
    expect(children).toHaveLength(7);
    expect(children[0]).toHaveAttribute('data-testid', 'popular-artists');
    expect(children[6]).toHaveAttribute('data-testid', 'streaming');
  });

  it('applies correct styling to container', () => {
    render(<HomeContent />);
    const container = screen.getByTestId('home-content');
    
    expect(container).toHaveClass('max-w-[1280px]');
    expect(container).toHaveClass('px-10');
    expect(container).toHaveClass('py-20');
    expect(container).toHaveClass('mx-auto');
    expect(container).toHaveClass('mt-[-40px]');
    expect(container).toHaveClass('flex');
    expect(container).toHaveClass('flex-col');
    expect(container).toHaveClass('gap-10');
  });

  it('maintains component hierarchy', () => {
    const { container } = render(<HomeContent />);
    const mainDiv = container.firstChild;
    
    expect(mainDiv?.childNodes).toHaveLength(7);
    expect(mainDiv?.firstChild).toHaveAttribute('data-testid', 'popular-artists');
    expect(mainDiv?.lastChild).toHaveAttribute('data-testid', 'streaming');
  });
}); 