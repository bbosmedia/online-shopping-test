
export interface IProduct{
    id: number,
    name: string,
    img: string
    discount: boolean,
    discounttwo: boolean,
    gift: boolean,
    change: boolean,
    price: number,
    monthlyprice: number
}

export const productData:IProduct[] = [
    {
        id: 1,
        name: 'Смартфон Samsung Galaxy S10',
        img: require('../../assets/product-images/product-1.png'),
        discount: true,
        discounttwo: false,
        gift: true,
        change: false,
        price: 7200000,
        monthlyprice: 2435000,
    },
    {
        id: 2,
        name: 'Смартфон Apple iPhone 13',
        img: require('../../assets/product-images/product-2.png'),
        discount: false,
        discounttwo: false,
        gift: false,
        change: true,
        price: 7200000,
        monthlyprice: 2435000,
    },
    {
        id: 3,
        name: 'Наушники Apple Airpods Pro',
        img: require('../../assets/product-images/product-3.png'),
        discount: false,
        discounttwo: false,
        gift: false,
        change: true,
        price: 7200000,
        monthlyprice: 2435000,
    },
    {
        id: 4,
        name: 'Samsung Galaxy Z Fold Phone',
        img: require('../../assets/product-images/product-4.png'),
        discount: true,
        discounttwo: false,
        gift: true,
        change: false,
        price: 7200000,
        monthlyprice: 2435000,
    },
    {
        id: 5,
        name: 'Смартфон Apple iPhone 13',
        img: require('../../assets/product-images/product-2.png'),
        discount: false,
        discounttwo: false,
        gift: false,
        change: true,
        price: 7200000,
        monthlyprice: 2435000,
    },
    {
        id: 6,
        name: 'Смартфон Samsung Galaxy S10',
        img: require('../../assets/product-images/product-1.png'),
        discount: true,
        discounttwo: false,
        gift: true,
        change: false,
        price: 7200000,
        monthlyprice: 2435000,
    },
    {
        id: 7,
        name: 'Смартфон Apple iPhone 13',
        img: require('../../assets/product-images/product-2.png'),
        discount: false,
        discounttwo: false,
        gift: false,
        change: true,
        price: 7200000,
        monthlyprice: 2435000,
    },
    {
        id: 8,
        name: 'Наушники Apple Airpods Pro',
        img: require('../../assets/product-images/product-2.png'),
        discount: false,
        discounttwo: false,
        gift: false,
        change: true,
        price: 7200000,
        monthlyprice: 2435000,
    },
    {
        id: 9,
        name: 'Samsung Galaxy Z Fold Phone',
        img: require('../../assets/product-images/product-1.png'),
        discount: true,
        discounttwo: false,
        gift: true,
        change: false,
        price: 7200000,
        monthlyprice: 2435000,
    },
    {
        id: 10,
        name: 'Смартфон Apple iPhone 13',
        img: require('../../assets/product-images/product-4.png'),
        discount: false,
        discounttwo: false,
        gift: false,
        change: true,
        price: 7200000,
        monthlyprice: 2435000,
    },
]