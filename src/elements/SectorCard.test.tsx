import { render, screen, fireEvent } from '@testing-library/react';
import SectorCard from './SectorCard';

// Mock de las imágenes
jest.mock('../assets/artista4.png', () => 'mocked-artista4.png');
jest.mock('../assets/ticket.svg', () => 'mocked-ticket.svg');

describe('SectorCard', () => {
  const mockProps = {
    title: 'Test Sector',
    price: '$100',
    available: true,
    onClick: jest.fn()
  };

  it('renders with correct props', () => {
    render(<SectorCard {...mockProps} />);
    
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(mockProps.price)).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    render(<SectorCard {...mockProps} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(mockProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('shows available status correctly', () => {
    render(<SectorCard {...mockProps} />);
    expect(screen.getByText('Disponible')).toBeInTheDocument();
    
    render(<SectorCard {...mockProps} available={false} />);
    expect(screen.getByText('No Disponible')).toBeInTheDocument();
  });
}); 