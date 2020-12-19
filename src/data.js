import { v4 as uuidv4 } from 'uuid';

const chillhop = () => [
  {
    name: 'Hereafter',
    artist: 'Makzo',
    cover: 'https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg',
    id: uuidv4(),
    active: true,
    color: ['#4d62a1', '#ec8e6e'],
    audio: 'https://mp3.chillhop.com/serve.php/?mp3=11770',
  },
  {
    name: 'Seascape',
    artist: 'Makzo',
    cover: 'https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg',
    id: uuidv4(),
    active: false,
    color: ['#4d62a1', '#ec8e6e'],
    audio: 'https://mp3.chillhop.com/serve.php/?mp3=11773',
  },
  {
    name: 'Lilo',
    artist: 'Middle School, The Field Tapes',
    cover: 'https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg',
    id: uuidv4(),
    active: false,
    color: ['#454a5f', '#dbe8df'],
    audio: 'https://mp3.chillhop.com/serve.php/?mp3=11244',
  },
];

export default chillhop;
