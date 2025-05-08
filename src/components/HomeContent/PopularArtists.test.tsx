import { getPopularArtists } from '../../constants/artists';

describe('getPopularArtists', () => {
    it('returns an array of 4 artists with correct data', () => {
        const artists = getPopularArtists();

        expect(Array.isArray(artists)).toBe(true);
        expect(artists).toHaveLength(4);

        expect(artists[0]).toMatchObject({
            id: 1,
            name: 'Christian Nodal',
            price: 'Desde $0,000.00 MXN',
        });

        expect(artists[1]).toMatchObject({
            id: 2,
            name: 'Santa Fe Klan',
            price: 'Desde $0,000.00 MXN',
        });

        expect(artists[2]).toMatchObject({
            id: 3,
            name: 'Banda MS',
            price: 'Desde $0,000.00 MXN',
        });

        expect(artists[3]).toMatchObject({
            id: 4,
            name: 'Julión Álvarez',
            price: 'Desde $0,000.00 MXN',
        });
    });
});