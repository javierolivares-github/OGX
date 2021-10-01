const polerasDB = [
  {
    "id": 1,
    "title": "Manifesting Reality Tee",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "price": 14.00,
    "pictureUrl": "/images/tee01.png"
  },
  {
    "id": 2,
    "title": "Portal Tee",
    "description": "Sed ut perspiciatis unde omnis error sit voluptatem.",
    "price": 14.00,
    "pictureUrl": "/images/tee02.png"
  },
  {
    "id": 3,
    "title": "Logo Tee",
    "description": "Et harum quidem rerum facilis est et expedita.",
    "price": 14.00,
    "pictureUrl": "/images/tee03.png"
  },
  {
    "id": 4,
    "title": "Connected World Tee",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus.",
    "price": 14.00,
    "pictureUrl": "/images/tee04.png"
  },
  {
    "id": 5,
    "title": "Isometric Pi Tee",
    "description": "Excepteur sint occaecat cupidatat non proident.",
    "price": 14.00,
    "pictureUrl": "/images/tee05.png"
  },
  {
    "id": 6,
    "title": "Symbols Tee",
    "description": "Nisi ut aliquid ex ea commodi consequatur? Quis autem.",
    "price": 14.00,
    "pictureUrl": "/images/tee06.png"
  },
  {
    "id": 7,
    "title": "Pi White Tee",
    "description": "Et harum quidem rerum facilis est et expedita distinctio.",
    "price": 14.00,
    "pictureUrl": "/images/tee07.png"
  },
  {
    "id": 8,
    "title": "Nodal White Tee",
    "description": "Temporibus autem quibusdam et aut officiis debitis aut rerum.",
    "price": 14.00,
    "pictureUrl": "/images/tee08.png"
  },
]

export default function darPoleras(){
  return new Promise((resolve) => {
    setTimeout(() => { resolve(polerasDB)}, 4000);
  })
}