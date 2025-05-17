import { render, screen } from '@testing-library/react';
import Streaming from './Streaming';
import { useStreamingStore } from '../../store/streamingStore';

jest.mock('../../store/streamingStore');

const mockStreams = [
  {
    id: 1,
    date: '2024-05-15',
    title: 'Concierto en Vivo',
    location: 'Teatro Principal',
    price: '$50',
    endingSoon: '2h',
    image: 'path/to/image.jpg'
  },
  {
    id: 2,
    date: '2024-05-16',
    title: 'Festival de Música',
    location: 'Estadio Central',
    price: '$75',
    endingSoon: '4h',
    image: 'path/to/image2.jpg'
  }
];

describe('Streaming', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useStreamingStore as jest.Mock).mockReturnValue({
      streams: [],
      fetchStreams: jest.fn()
    });
  });

  it('renders streaming section title', () => {
    render(<Streaming />);
    expect(screen.getByText('Streaming')).toBeInTheDocument();
  });

  it('renders all streaming cards when streams are available', () => {
    const mockFetchStreams = jest.fn();
    (useStreamingStore as jest.Mock).mockReturnValue({
      streams: mockStreams,
      fetchStreams: mockFetchStreams
    });

    render(<Streaming />);
    mockStreams.forEach(stream => {
      expect(screen.getByText(stream.title)).toBeInTheDocument();
      expect(screen.getByText(stream.location)).toBeInTheDocument();
      expect(screen.getByText(stream.price)).toBeInTheDocument();
    });
  });

  it('calls fetchStreams on mount', () => {
    const mockFetchStreams = jest.fn();
    (useStreamingStore as jest.Mock).mockReturnValue({
      streams: [],
      fetchStreams: mockFetchStreams
    });

    render(<Streaming />);
    expect(mockFetchStreams).toHaveBeenCalledTimes(1);
  });

  it('handles empty streams array', () => {
    (useStreamingStore as jest.Mock).mockReturnValue({
      streams: [],
      fetchStreams: jest.fn()
    });

    render(<Streaming />);
    expect(screen.queryAllByTestId('streaming-card')).toHaveLength(0);
  });
}); 