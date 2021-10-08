const products = [
  {
    "id": 1,
    "title": "Manifesting Reality Tee",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "price": 14.00,
    "pictureUrl": "/images/tee01.png",
    "category": "tees"
  },
  {
    "id": 2,
    "title": "Portal Tee",
    "description": "Sed ut perspiciatis unde omnis error sit voluptatem.",
    "price": 14.00,
    "pictureUrl": "/images/tee02.png",
    "category": "tees"
  },
  {
    "id": 3,
    "title": "Logo Tee",
    "description": "Et harum quidem rerum facilis est et expedita.",
    "price": 14.00,
    "pictureUrl": "/images/tee03.png",
    "category": "tees"
  },
  {
    "id": 4,
    "title": "Connected World Tee",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus.",
    "price": 14.00,
    "pictureUrl": "/images/tee04.png",
    "category": "tees"
  },
  {
    "id": 5,
    "title": "Isometric Pi Tee",
    "description": "Excepteur sint occaecat cupidatat non proident.",
    "price": 14.00,
    "pictureUrl": "/images/tee05.png",
    "category": "tees"
  },
  {
    "id": 6,
    "title": "Symbols Tee",
    "description": "Nisi ut aliquid ex ea commodi consequatur? Quis autem.",
    "price": 14.00,
    "pictureUrl": "/images/tee06.png",
    "category": "tees"
  },
  {
    "id": 7,
    "title": "Pi White Tee",
    "description": "Et harum quidem rerum facilis est et expedita distinctio.",
    "price": 14.00,
    "pictureUrl": "/images/tee07.png",
    "category": "tees"
  },
  {
    "id": 8,
    "title": "Nodal White Tee",
    "description": "Temporibus autem quibusdam et aut officiis debitis aut rerum.",
    "price": 14.00,
    "pictureUrl": "/images/tee08.png",
    "category": "tees"
  },
  {
    "id": 9,
    "title": "Silver F-91W",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "price": 42.00,
    "pictureUrl": "/images/watch01.png",
    "category": "watches"
  },
  {
    "id": 10,
    "title": "Gold Accent F-91W",
    "description": "Sed ut perspiciatis unde omnis error sit voluptatem.",
    "price": 42.00,
    "pictureUrl": "/images/watch02.png",
    "category": "watches"
  },
  {
    "id": 11,
    "title": "Black F-91W",
    "description": "Et harum quidem rerum facilis est et expedita.",
    "price": 42.00,
    "pictureUrl": "/images/watch03.png",
    "category": "watches"
  },
  {
    "id": 12,
    "title": "Silver Strap F-91W",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus.",
    "price": 49.00,
    "pictureUrl": "/images/watch04.png",
    "category": "watches"
  },
  {
    "id": 13,
    "title": "Orange Accent F-91W",
    "description": "Excepteur sint occaecat cupidatat non proident.",
    "price": 49.00,
    "pictureUrl": "/images/watch05.png",
    "category": "watches"
  },
  {
    "id": 14,
    "title": "Blue Accent F-91W",
    "description": "Nisi ut aliquid ex ea commodi consequatur? Quis autem.",
    "price": 49.00,
    "pictureUrl": "/images/watch06.png",
    "category": "watches"
  },
]

export default function getProducts(){
  return new Promise((resolve) => {
    setTimeout(() => { resolve(products) }, 1000);
  })
}