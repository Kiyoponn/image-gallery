import image1 from '/public/assets/architecture-1.jpeg'
import image2 from '/public/assets/landscape-3.jpeg'
import image3 from '/public/assets/neon-3.jpeg'
import image4 from '/public/assets/architecture-4.jpeg'
import image5 from '/public/assets/neon-2.jpeg'
import image6 from '/public/assets/landscape-1.jpeg'
import image7 from '/public/assets/neon-4.jpeg'
import image8 from '/public/assets/architecture-2.jpeg'
import image9 from '/public/assets/neon-1.jpeg'
import image10 from '/public/assets/architecture-3.jpeg'
import image11 from '/public/assets/landscape-2.jpeg'

const data = [
  {
    src: image1,
    alt: 'Metal pattern on side of a building',
    ratio: 'landscape',
    active: 1,
  },
  {
    src: image2,
    alt: 'Valley between mountains during fall',
    ratio: 'square',
    active: 3,
  },
  {
    src: image3,
    alt: 'Gas station at night lit by neon sign',
    ratio: 'portrait',
    active: 2,
  },
  {
    src: image4,
    alt: 'Hall inside building featuring a tree',
    ratio: 'square',
    active: 1,
  },
  {
    src: image5,
    alt: 'Foggy night with hotel neon sign in background',
    ratio: 'portrait',
    active: 2,
  },
  {
    src: image6,
    alt: 'Lake with mountains in the background',
    ratio: 'landscape',
    active: 3,
  },
  {
    src: image7,
    alt: 'City sidewalk on a snowy night',
    ratio: 'portrait',
    active: 2,
  },
  {
    src: image8,
    alt: 'Person going down stairs in building atrium',
    ratio: 'landscape',
    active: 1,
  },
  {
    src: image9,
    alt: 'People walking in NYC at night',
    ratio: 'landscape',
    active: 2,
  },
  {
    src: image10,
    alt: 'Dark stairs with blue lights',
    ratio: 'portrait',
    active: 1,
  },
  {
    src: image11,
    alt: 'Side of mountain with sparse trees',
    ratio: 'landscape',
    active: 3,
  },
]

const categories = [
  { name: 'Architecture' },
  { name: 'Neon' },
  { name: 'Landscape' },
]

export { data, categories }
