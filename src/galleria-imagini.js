import caduta from './images/caduta-pic.jpg';
import crozza from './images/crozza-pic.jpg';
import chapo from './images/el chapo-pic.jpg';
import iene from './images/iene-pic.jpeg';
import sherlock from './images/sherlock-pic.jpg';
import striscia from './images/striscia-pic.jpg';

export default function getImagini() {
  return [
    { id: 'caduta libera', name: 'Caduta Libera', pic: caduta },
    { id: 'crozza', name: 'crozza', pic: crozza },
    { id: 'el chapo', name: 'el chapo', pic: chapo },
    { id: 'sherlock', name: 'sherlock', pic: sherlock },
    { id: 'le iene', name: 'le iene', pic: iene },
    { id: 'striscia', name: 'striscia', pic: striscia }
  ]
} 