import accessories from './accessories.png';
import apparel from './apparel.png';
import bag from './bag.jpeg';
import footware from './footware.jpeg';
import racquet from './racquet.png';
import shuttlecock from './shuttlecock.jpeg';

const productsList = [
    {
        id: 1,
        imgSrc: racquet,
        name: 'YONEX ASTOX 77PRO',
        price: 'RM749.00',
        category: 'racquets',
        brand: 'Yonex',
        rate: 5.0,
        options: { color: ['red', 'black'] },
        description:
            'Category: racquet \nBrand: Yonex \nSeries: ASTROX99 Pro Handle \nThickness: G5 \nLength: about 675mm \nBalance point: 295mm-300mm \nRecommended lbs: 22~28lbs (maximum 22~30lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Carbon fiber \nTotal weight of racket: 82g (badminton racket line has been installed)',
    },
    {
        id: 2,
        imgSrc: footware,
        name: 'YONEX Badminton Shoes',
        price: 'RM609.00',
        category: 'footwear',
        brand: 'Yonex',
        rate: 4.9,
        options: {
            size: [25, 25, 5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footware \nBrand: Yonex \nDescription: lightest shoe at 270g.Superior ventilation and solid fit. \nUpper: Double Russel Mesh, Durable Skin Light \nMidsole: Hyper mslite \nPower Cushion \nPower Graphite Sheet \nOutsole: Rubber',
    },
    {
        id: 3,
        imgSrc: apparel,
        name: 'Yonex Malaysia Round Neck Shirt 2453',
        price: 'RM59.90',
        category: 'apparel',
        brand: 'Yonex',
        rate: 4.9,
        options: {
            size: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
            color: ['Botanical Garden', 'Jet Black', 'Red', 'White'],
        },
        description:
            'Category: apparel \nBrand: Yonex \nMaterial: Polyester \nSize available: Adult: XS - XXL \nDry and Comfortable \nThe high performance fibers in TruBreeze fabrics \nKeep wearers cool, dry, and comfortable',
    },
    {
        id: 4,
        imgSrc: bag,
        name: 'YONEX PRO RACKET BAG 92431WEX Cobalt Blue',
        price: '95.90',
        category: 'bags',
        brand: 'Yonex',
        rate: 4.7,
        color: ['red', 'black'],
        description: 'Category: bags \nBrand: Yonex \nSize: 75 x 19 x 33 cm \nCompartments: 2 big, 1 small',
    },
    {
        id: 5,
        imgSrc: shuttlecock,
        name: 'YONEX SHUTTLECOCK AEROSENSA 30 – Vsmash Sports',
        price: '95.90',
        category: 'shuttlecocks',
        brand: 'Yonex',
        rate: 4.5,
        color: ['red', 'black'],
        description:
            'Category: shuttlecock \nBrand : Yonex \nBall Classification : Goose feather ball \nBadminton ball Classification : As a whole Cork (high-grade) \nItem No. : AS-40 \nQuality：12Pcs',
    },
    {
        id: 6,
        imgSrc: accessories,
        name: 'Yonex Badminton Racket Overgrip AC102',
        price: '1.99',
        category: 'accessories',
        rate: 4.6,
        color: ['white', 'red', 'black', 'purple', 'yellow', 'blue'],
        description:
            'Category: shuttlec \nBrand : Yonex \nSize:110*2.5cm \nWeight：0.06kg \nFeature: Multipuporse \nMaterial:Polyurethane',
    },
];

export default productsList;
