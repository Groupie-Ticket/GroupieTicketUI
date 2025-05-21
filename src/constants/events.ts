import event1 from '../assets/Events/event1.png'
import event2 from '../assets/Events/event2.png'
import event3 from '../assets/Events/event3.png'
import event4 from '../assets/Events/event4.png'
import event5 from '../assets/Events/event5.png'
import event6 from '../assets/Events/event6.png'
import event7 from '../assets/Events/event7.png'
import event8 from '../assets/Events/event8.png'
import event9 from '../assets/Events/event9.png'

import song1 from '../assets/EventsSongs/song1.mp3'


export interface Event {
  id: number;
  venue: string;
  artist: string;
  location: string;
  datetime: string;
  image: string;
  description: string;
  notes: string;
  song: {
    title: string;
    url: string;
  };
  mapEmbedUrl: string;
  price: number;
  availableTickets: number;
}

const events: Event[] = [
  {
    id: 1,
    venue: 'Arena CDMX',
    artist: 'Bjorn Larsen',
    location: 'Ciudad de México, Ciudad de Mexico',
    datetime: 'JUE 23 MAR 2023 16:00',
    image: event1,
    song: {
      title: 'La Canción del Sol',
      url: song1
    },
    description: 'Bjorn Larsen es un cantante folk que captura el alma nórdica en cada presentación. Con letras introspectivas y melodías suaves, ha ganado reconocimiento global.',
    notes: `Pagan boleto a partir de: 2 años<br/>Acceso a partir de edad: N/A<br/>Apertura de puertas: 19:00 hrs<br/>Duración aproximada del evento: 2 hrs<br/>No se permite el acceso con cámaras fotográficas profesionales`,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.003418820841!2d-68.85263972394297!3d-32.8980778694379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090e883d34e5%3A0xa7e2f899c46ce069!2sAuditorium%20Angel%20Bustelo!5e0!3m2!1sen!2sar!4v1747011252315!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    price: 1000,
    availableTickets: 10
  },
  {
    id: 2,
    venue: 'Arena CDMX',
    artist: 'The Neon Monks',
    location: 'Ciudad de México, Ciudad de Mexico',
    datetime: 'JUE 23 MAR 2023 16:00',
    image: event2,
    song: {
      title: 'La Canción del Sol',
      url: '/audio/song1.mp3'
    },
    description: 'Bjorn Larsen es un cantante folk que captura el alma nórdica en cada presentación. Con letras introspectivas y melodías suaves, ha ganado reconocimiento global.',
    notes: `Pagan boleto a partir de: 2 años<br/>Acceso a partir de edad: N/A<br/>Apertura de puertas: 19:00 hrs<br/>Duración aproximada del evento: 2 hrs<br/>No se permite el acceso con cámaras fotográficas profesionales`,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.003418820841!2d-68.85263972394297!3d-32.8980778694379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090e883d34e5%3A0xa7e2f899c46ce069!2sAuditorium%20Angel%20Bustelo!5e0!3m2!1sen!2sar!4v1747011252315!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    price: 1000,
    availableTickets: 10
  },
  {
    id: 3,
    venue: 'Arena CDMX',
    artist: 'The Saltwater Strays',
    location: 'Ciudad de México, Ciudad de Mexico',
    datetime: 'JUE 23 MAR 2023 16:00',
    image: event3,
    song: {
      title: 'La Canción del Sol',
      url: '/audio/song1.mp3'
    },
    description: 'Bjorn Larsen es un cantante folk que captura el alma nórdica en cada presentación. Con letras introspectivas y melodías suaves, ha ganado reconocimiento global.',
    notes: `Pagan boleto a partir de: 2 años<br/>Acceso a partir de edad: N/A<br/>Apertura de puertas: 19:00 hrs<br/>Duración aproximada del evento: 2 hrs<br/>No se permite el acceso con cámaras fotográficas profesionales`,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.003418820841!2d-68.85263972394297!3d-32.8980778694379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090e883d34e5%3A0xa7e2f899c46ce069!2sAuditorium%20Angel%20Bustelo!5e0!3m2!1sen!2sar!4v1747011252315!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    price: 1000,
    availableTickets: 10
  },
  {
    id: 4,
    venue: 'Arena CDMX',
    artist: 'Sol de la Pampa',
    location: 'Ciudad de México, Ciudad de Mexico',
    datetime: 'JUE 23 MAR 2023 16:00',
    image: event4,
    song: {
      title: 'La Canción del Sol',
      url: '/audio/song1.mp3'
    },
    description: 'Bjorn Larsen es un cantante folk que captura el alma nórdica en cada presentación. Con letras introspectivas y melodías suaves, ha ganado reconocimiento global.',
    notes: `Pagan boleto a partir de: 2 años<br/>Acceso a partir de edad: N/A<br/>Apertura de puertas: 19:00 hrs<br/>Duración aproximada del evento: 2 hrs<br/>No se permite el acceso con cámaras fotográficas profesionales`,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.003418820841!2d-68.85263972394297!3d-32.8980778694379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090e883d34e5%3A0xa7e2f899c46ce069!2sAuditorium%20Angel%20Bustelo!5e0!3m2!1sen!2sar!4v1747011252315!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    price: 1000,
    availableTickets: 10
  },
  {
    id: 5,
    venue: 'Arena CDMX',
    artist: 'Hiroko Tanaka',
    location: 'Ciudad de México, Ciudad de Mexico',
    datetime: 'JUE 23 MAR 2023 16:00',
    image: event5,
    song: {
      title: 'La Canción del Sol',
      url: '/audio/song1.mp3'
    },
    description: 'Bjorn Larsen es un cantante folk que captura el alma nórdica en cada presentación. Con letras introspectivas y melodías suaves, ha ganado reconocimiento global.',
    notes: `Pagan boleto a partir de: 2 años<br/>Acceso a partir de edad: N/A<br/>Apertura de puertas: 19:00 hrs<br/>Duración aproximada del evento: 2 hrs<br/>No se permite el acceso con cámaras fotográficas profesionales`,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.003418820841!2d-68.85263972394297!3d-32.8980778694379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090e883d34e5%3A0xa7e2f899c46ce069!2sAuditorium%20Angel%20Bustelo!5e0!3m2!1sen!2sar!4v1747011252315!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    price: 1000,
    availableTickets: 10
  },
  {
    id: 6,
    venue: 'Arena CDMX',
    artist: 'Thiago Mendes',
    location: 'Ciudad de México, Ciudad de Mexico',
    datetime: 'JUE 23 MAR 2023 16:00',
    image: event6,
    song: {
      title: 'La Canción del Sol',
      url: '/audio/song1.mp3'
    },
    description: 'Bjorn Larsen es un cantante folk que captura el alma nórdica en cada presentación. Con letras introspectivas y melodías suaves, ha ganado reconocimiento global.',
    notes: `Pagan boleto a partir de: 2 años<br/>Acceso a partir de edad: N/A<br/>Apertura de puertas: 19:00 hrs<br/>Duración aproximada del evento: 2 hrs<br/>No se permite el acceso con cámaras fotográficas profesionales`,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.003418820841!2d-68.85263972394297!3d-32.8980778694379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090e883d34e5%3A0xa7e2f899c46ce069!2sAuditorium%20Angel%20Bustelo!5e0!3m2!1sen!2sar!4v1747011252315!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    price: 1000,
    availableTickets: 10
  },
  {
    id: 7,
    venue: 'Arena CDMX',
    artist: 'Desert Bloom',
    location: 'Ciudad de México, Ciudad de Mexico',
    datetime: 'JUE 23 MAR 2023 16:00',
    image: event7,
    song: {
      title: 'La Canción del Sol',
      url: '/audio/song1.mp3'
    },
    description: 'Bjorn Larsen es un cantante folk que captura el alma nórdica en cada presentación. Con letras introspectivas y melodías suaves, ha ganado reconocimiento global.',
    notes: `Pagan boleto a partir de: 2 años<br/>Acceso a partir de edad: N/A<br/>Apertura de puertas: 19:00 hrs<br/>Duración aproximada del evento: 2 hrs<br/>No se permite el acceso con cámaras fotográficas profesionales`,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.003418820841!2d-68.85263972394297!3d-32.8980778694379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090e883d34e5%3A0xa7e2f899c46ce069!2sAuditorium%20Angel%20Bustelo!5e0!3m2!1sen!2sar!4v1747011252315!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    price: 1000,
    availableTickets: 10
  },
  {
    id: 8,
    venue: 'Arena CDMX',
    artist: 'The Ancient Waves',
    location: 'Ciudad de México, Ciudad de Mexico',
    datetime: 'JUE 23 MAR 2023 16:00',
    image: event8,
    song: {
      title: 'La Canción del Sol',
      url: '/audio/song1.mp3'
    },
    description: 'Bjorn Larsen es un cantante folk que captura el alma nórdica en cada presentación. Con letras introspectivas y melodías suaves, ha ganado reconocimiento global.',
    notes: `Pagan boleto a partir de: 2 años<br/>Acceso a partir de edad: N/A<br/>Apertura de puertas: 19:00 hrs<br/>Duración aproximada del evento: 2 hrs<br/>No se permite el acceso con cámaras fotográficas profesionales`,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.003418820841!2d-68.85263972394297!3d-32.8980778694379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090e883d34e5%3A0xa7e2f899c46ce069!2sAuditorium%20Angel%20Bustelo!5e0!3m2!1sen!2sar!4v1747011252315!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    price: 1000,
    availableTickets: 10
  },
  {
    id: 9,
    venue: 'Arena CDMX',
    artist: 'Tokyo Mirage',
    location: 'Ciudad de México, Ciudad de Mexico',
    datetime: 'JUE 23 MAR 2023 16:00',
    image: event9,
    song: {
      title: 'La Canción del Sol',
      url: '/audio/song1.mp3'
    },
    description: 'Bjorn Larsen es un cantante folk que captura el alma nórdica en cada presentación. Con letras introspectivas y melodías suaves, ha ganado reconocimiento global.',
    notes: `Pagan boleto a partir de: 2 años<br/>Acceso a partir de edad: N/A<br/>Apertura de puertas: 19:00 hrs<br/>Duración aproximada del evento: 2 hrs<br/>No se permite el acceso con cámaras fotográficas profesionales`,
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.003418820841!2d-68.85263972394297!3d-32.8980778694379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e090e883d34e5%3A0xa7e2f899c46ce069!2sAuditorium%20Angel%20Bustelo!5e0!3m2!1sen!2sar!4v1747011252315!5m2!1sen!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade',
    price: 1000,
    availableTickets: 10
  },
];

export const getEvents = (): Event[] => events;