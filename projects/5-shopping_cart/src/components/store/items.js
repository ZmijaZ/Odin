import { v4 as uuidv4 } from 'uuid'

const items = [
    {
        id: uuidv4(),
        photo: '/home/dzzz/javaskripta/odin/git/Odin/projects/5-shopping_cart/src/components/e/itemPhotos/1.png',
        name: "T-shirt",
        description: 'Everyday T, only for the best',
        price: '$12.99',
        cartCount: ''
    },
    {
        id: uuidv4(),
        photo: './itemPhotos/1.png',
        name: "Sweater",
        description: "For when you're cool",
        price: '$121.99',
        cartCount: ''
    },
    {
        id: uuidv4(),
        photo: './itemPhotos/1.png',
        name: "Cap",
        description: 'Yankee',
        price: '$7.99',
        cartCount: ''
    },

]

export {items}