import accessories from './accessories.png';
import apparelAlpsport1 from './apparelAlpsport1.webp';
import apparelAlpsport2 from './apparelAlpsport2.webp';
import apparelApacs1 from './apparelApacs1.webp';
import apparelApacs2 from './apparelApacs2.webp';
import apparelFelet1 from './apparelFelet1.jpeg';
import apparelFelet2 from './apparelFelet2.jpeg';
import apparelLining1 from './apparelLining1.webp';
import apparelLining2 from './apparelLining2.jpeg';
import apparelMaxx1 from './apparelMaxx1.jpeg';
import apparelMaxx2 from './apparelMaxx2.jpeg';
import apparels from './apparels.png';
import apparelVictor1 from './apparelVictor1.jpeg';
import apparelVictor2 from './apparelVictor2.jpeg';
import apparelYonex2 from './apparelYonex2.jpeg';
import bag from './bag.webp';
import bagAlpsport from './bagAlpsport.jpeg';
import bagApacs from './bagApacs.webp';
import bagFelet from './bagFelet.jpeg';
import bagLining from './bagLining.jpeg';
import bagMaxx from './bagMaxx.jpeg';
import bagVictor from './bagVictor.jpeg';
import footwear from './footwear.jpeg';
import footwearAlpsport1 from './footwearAlpsport1.webp';
import footwearApacs1 from './footwearApacs1.webp';
import footwearApacs2 from './footwearApacs2.webp';
import footwearApacs3 from './footwearApacs3.webp';
import footwearFelet1 from './footwearFelet1.jpeg';
import footwearFelet2 from './footwearFelet2.jpg';
import footwearFelet3 from './footwearFelet3.jpeg';
import footwearLining1 from './footwearLining1.jpeg';
import footwearLining2 from './footwearLining2.jpeg';
import footwearLining3 from './footwearLining3.jpg';
import footwearMaxx1 from './footwearMaxx1.jpeg';
import footwearVictor1 from './footwearVictor1.webp';
import footwearVictor2 from './footwearVictor2.jpeg';
import footwearVictor3 from './footwearVictor3.jpeg';
import footwearYonex2 from './footwearYonex2.jpeg';
import footwearYonex3 from './footwearYonex3.webp';
import racquet from './racquet.png';
import racquetAlpsport1 from './racquetAlpsport1.webp';
import racquetAlpsport2 from './racquetAlpsport2.webp';
import racquetAlpsport3 from './racquetAlpsport3.webp';
import racquetApacs1 from './racquetApacs1.jpeg';
import racquetApacs2 from './racquetApacs2.webp';
import racquetApacs3 from './racquetApacs3.webp';
import racquetApacs4 from './racquetApacs4.webp';
import racquetFelet1 from './racquetFelet1.jpeg';
import racquetFelet101 from './racquetFelet101.jpeg';
import racquetFelet2 from './racquetFelet2.jpeg';
import racquetFelet3 from './racquetFelet3.jpeg';
import racquetFelet4 from './racquetFelet4.jpeg';
import racquetFelet5 from './racquetFelet5.jpeg';
import racquetLining1 from './racquetLining1.jpeg';
import racquetLining3 from './racquetLining3.webp';
import racquetLining4 from './racquetLining4.png';
import racquetMaxx1 from './racquetMaxx1.jpeg';
import racquetMaxx2 from './racquetMaxx2.jpeg';
import racquetMaxx3 from './racquetMaxx3.jpeg';
import racquetVictor1 from './racquetVictor1.webp';
import racquetVictor2 from './racquetVictor2.webp';
import racquetVictor3 from './racquetVictor3.jpeg';
import racquetYonex102 from './racquetYonex102.jpeg';
import racquetYonex103 from './racquetYonex103.webp';
import racquetYonex104 from './racquetYonex104.webp';
import racquetYonex105 from './racquetYonex105.webp';
import racquetYonex2 from './racquetYonex2.webp';
import racquetYonex3 from './racquetYonex3.jpeg';
import racquetYonex4 from './racquetYonex4.jpeg';
import racquetYonex5 from './racquetYonex5.webp';
import shuttlecock from './shuttlecock.jpeg';
import shuttlecockAlpsport from './shuttlecockAlpsport.jpeg';
import shuttlecockApacs from './shuttlecockApacs.webp';
import shuttlecockFelet from './shuttlecockFelet.jpeg';
import shuttlecockLining from './shuttlecockLining.jpeg';
import shuttlecockMaxx from './shuttlecockMaxx.jpeg';
import shuttlecockVictor from './shuttlecockVictor.jpeg';

const productsList = [
    // add image is for product detail page
    {
        id: 101,
        imgSrc: racquet,
        imgAll: [racquet, racquetYonex102, racquetYonex103, racquetYonex104, racquetYonex105],
        name: 'YONEX ASTOX 77PRO',
        price: 749.0,
        category: 'racquets',
        brand: 'Yonex',
        rate: 5.0,
        options: { color: ['red', 'black'] },
        description:
            'Category: racquet \nBrand: Yonex \nSeries: ASTROX99 Pro Handle \nThickness: G5 \nLength: about 675mm \nBalance point: 295mm-300mm \nRecommended lbs: 22~28lbs (maximum 22~30lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Carbon fiber \nTotal weight of racket: 82g (badminton racket line has been installed)',
    },
    {
        id: 102,
        imgSrc: racquetFelet1,
        imgAll: [racquetFelet1, racquetFelet101],
        name: 'Felet Warrior TJ 99 Badminton Racket',
        price: 549.0,
        category: 'racquets',
        brand: 'Felet',
        rate: 4.9,
        options: { color: ['red', 'black'] },
        description:
            'Category: racquet \nBrand: Yonex \nSeries: ASTROX99 Pro Handle \nThickness: G5 \nLength: about 675mm \nBalance point: 295mm-300mm \nRecommended lbs: 22~28lbs (maximum 22~30lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Carbon fiber \nTotal weight of racket: 82g (badminton racket line has been installed)',
    },
    {
        id: 103,
        imgSrc: racquetVictor3,
        name: 'Victor PowerDrive 8000',
        price: 699.0,
        category: 'racquets',
        brand: 'Victor',
        rate: 4.9,
        options: { color: ['blue', 'silver'] },
        description:
            'Category: racquet \nBrand: Victor \nSeries: PowerDrive 8000 \nThickness: G4 \nLength: about 670mm \nBalance point: 290mm-295mm \nRecommended lbs: 24~30lbs (maximum 22~32lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 85g (badminton racket line has been installed)',
    },
    {
        id: 104,
        imgSrc: racquetYonex2,
        name: 'Yonex Arcblade 8000',
        price: 699.0,
        category: 'racquets',
        brand: 'Yonex',
        rate: 4.8,
        options: { color: ['blue', 'white'] },
        description:
            'Category: racquet \nBrand: Yonex \nSeries: Arcblade 8000 \nThickness: G4 \nLength: about 670mm \nBalance point: 290mm-295mm \nRecommended lbs: 24~30lbs (maximum 22~32lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 85g (badminton racket line has been installed)',
    },
    {
        id: 105,
        imgSrc: racquetFelet2,
        name: 'Felet PowerPlay X9',
        price: 579.0,
        category: 'racquets',
        brand: 'Felet',
        rate: 4.7,
        options: { color: ['green', 'black'] },
        description:
            'Category: racquet \nBrand: Felet \nSeries: PowerPlay X9 \nThickness: G5 \nLength: about 675mm \nBalance point: 295mm-300mm \nRecommended lbs: 22~28lbs (maximum 22~30lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 83g (badminton racket line has been installed)',
    },
    {
        id: 106,
        imgSrc: racquetApacs1,
        name: 'Apacs TitanForce 2000',
        price: 529.0,
        category: 'racquets',
        brand: 'Apacs',
        rate: 4.6,
        options: { color: ['red', 'yellow'] },
        description:
            'Category: racquet \nBrand: Apacs \nSeries: TitanForce 2000 \nThickness: G4 \nLength: about 670mm \nBalance point: 285mm-290mm \nRecommended lbs: 24~30lbs (maximum 22~32lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 86g (badminton racket line has been installed)',
    },
    {
        id: 107,
        imgSrc: racquetLining1,
        name: 'Li-Ning AeroBlitz 300',
        price: 649.0,
        category: 'racquets',
        brand: 'Li-Ning',
        rate: 4.9,
        options: { color: ['orange', 'black'] },
        description:
            'Category: racquet \nBrand: Li-Ning \nSeries: AeroBlitz 300 \nThickness: G5 \nLength: about 675mm \nBalance point: 295mm-300mm \nRecommended lbs: 22~28lbs (maximum 22~30lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 84g (badminton racket line has been installed)',
    },
    {
        id: 108,
        imgSrc: racquetVictor1,
        name: 'Victor Thrust 700',
        price: 499.0,
        category: 'racquets',
        brand: 'Victor',
        rate: 4.5,
        options: { color: ['black', 'red'] },
        description:
            'Category: racquet \nBrand: Victor \nSeries: Thrust 700 \nThickness: G4 \nLength: about 670mm \nBalance point: 290mm-295mm \nRecommended lbs: 24~30lbs (maximum 22~32lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 87g (badminton racket line has been installed)',
    },
    {
        id: 109,
        imgSrc: racquetYonex3,
        name: 'Yonex AeroSonic 700',
        price: 729.0,
        category: 'racquets',
        brand: 'Yonex',
        rate: 4.8,
        options: { color: ['red', 'silver'] },
        description:
            'Category: racquet \nBrand: Yonex \nSeries: AeroSonic 700 \nThickness: G5 \nLength: about 675mm \nBalance point: 295mm-300mm \nRecommended lbs: 22~28lbs (maximum 22~30lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 82g (badminton racket line has been installed)',
    },
    {
        id: 110,
        imgSrc: racquetApacs2,
        name: 'Apacs TurboCharger 300',
        price: 499.0,
        category: 'racquets',
        brand: 'Apacs',
        rate: 4.5,
        options: { color: ['red', 'black'] },
        description:
            'Category: racquet \nBrand: Apacs \nSeries: TurboCharger 300 \nThickness: G4 \nLength: about 670mm \nBalance point: 290mm-295mm \nRecommended lbs: 24~30lbs (maximum 22~32lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 87g (badminton racket line has been installed)',
    },
    {
        id: 111,
        imgSrc: racquetYonex5,
        name: 'Yonex HyperGlide 3000',
        price: 689.0,
        category: 'racquets',
        brand: 'Yonex',
        rate: 5.0,
        options: { color: ['black', 'red'] },
        description:
            'Category: racquet \nBrand: Yonex \nSeries: HyperGlide 3000 \nThickness: G4 \nLength: about 670mm \nBalance point: 290mm-295mm \nRecommended lbs: 24~30lbs (maximum 22~32lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 86g (badminton racket line has been installed)',
    },
    {
        id: 112,
        imgSrc: racquetFelet3,
        name: 'Felet ThunderBolt X7',
        price: 599.0,
        category: 'racquets',
        brand: 'Felet',
        rate: 4.6,
        options: { color: ['yellow', 'black'] },
        description:
            'Category: racquet \nBrand: Felet \nSeries: ThunderBolt X7 \nThickness: G5 \nLength: about 675mm \nBalance point: 295mm-300mm \nRecommended lbs: 22~28lbs (maximum 22~30lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 83g (badminton racket line has been installed)',
    },
    {
        id: 113,
        imgSrc: racquetFelet4,
        name: 'Felet PowerArc 900',
        price: 439.0,
        category: 'racquets',
        brand: 'Felet',
        rate: 4.8,
        options: { color: ['blue', 'silver'] },
        description:
            'Category: racquet \nBrand: Felet \nSeries: PowerArc 900 \nThickness: G4 \nLength: about 670mm \nBalance point: 290mm-295mm \nRecommended lbs: 24~30lbs (maximum 22~32lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 85g (badminton racket line has been installed)',
    },
    {
        id: 114,
        imgSrc: racquetAlpsport2,
        name: 'Alpsport SpeedBlade 500',
        price: 579.0,
        category: 'racquets',
        brand: 'Alpsport',
        rate: 5.0,
        options: { color: ['red', 'white'] },
        description:
            'Category: racquet \nBrand: Alpsport \nSeries: SpeedBlade 500 \nThickness: G4 \nLength: about 670mm \nBalance point: 290mm-295mm \nRecommended lbs: 24~30lbs (maximum 22~32lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 85g (badminton racket line has been installed)',
    },
    {
        id: 115,
        imgSrc: racquetFelet5,
        name: 'Felet HyperDrive 600',
        price: 559.0,
        category: 'racquets',
        brand: 'Felet',
        rate: 4.7,
        options: { color: ['green', 'white'] },
        description:
            'Category: racquet \nBrand: Felet \nSeries: HyperDrive 600 \nThickness: G5 \nLength: about 675mm \nBalance point: 295mm-300mm \nRecommended lbs: 22~28lbs (maximum 22~30lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 83g (badminton racket line has been installed)',
    },
    {
        id: 116,
        imgSrc: racquetApacs3,
        name: 'Apacs Velocity 500',
        price: 559.0,
        category: 'racquets',
        brand: 'Apacs',
        rate: 4.6,
        options: { color: ['blue', 'white'] },
        description:
            'Category: racquet \nBrand: Apacs \nSeries: Velocity 500 \nThickness: G4 \nLength: about 670mm \nBalance point: 290mm-295mm \nRecommended lbs: 24~30lbs (maximum 22~32lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 86g (badminton racket line has been installed)',
    },
    {
        id: 117,
        imgSrc: racquetAlpsport1,
        name: 'Alpsport ThunderStorm 300',
        price: 539.0,
        category: 'racquets',
        brand: 'Alpsport',
        rate: 4.6,
        options: { color: ['black', 'blue'] },
        description:
            'Category: racquet \nBrand: Alpsport \nSeries: ThunderStorm 300 \nThickness: G4 \nLength: about 670mm \nBalance point: 290mm-295mm \nRecommended lbs: 24~30lbs (maximum 22~32lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 86g (badminton racket line has been installed)',
    },
    {
        id: 118,
        imgSrc: racquetApacs4,
        name: 'Apacs AeroBlitz 900',
        price: 619.0,
        category: 'racquets',
        brand: 'Apacs',
        rate: 4.8,
        options: { color: ['green', 'white'] },
        description:
            'Category: racquet \nBrand: Apacs \nSeries: AeroBlitz 900 \nThickness: G5 \nLength: about 675mm \nBalance point: 295mm-300mm \nRecommended lbs: 22~28lbs (maximum 22~30lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 83g (badminton racket line has been installed)',
    },
    {
        id: 119,
        imgSrc: racquetVictor2,
        name: 'Victor JetSpeed X8',
        price: 639.0,
        category: 'racquets',
        brand: 'Victor',
        rate: 4.8,
        options: { color: ['red', 'black'] },
        description:
            'Category: racquet \nBrand: Victor \nSeries: JetSpeed X8 \nThickness: G5 \nLength: about 675mm \nBalance point: 295mm-300mm \nRecommended lbs: 22~28lbs (maximum 22~30lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 82g (badminton racket line has been installed)',
    },
    {
        id: 120,
        imgSrc: racquetYonex4,
        name: 'Yonex NanoBlade X10',
        price: 769.0,
        category: 'racquets',
        brand: 'Yonex',
        rate: 4.9,
        options: { color: ['blue', 'white'] },
        description:
            'Category: racquet \nBrand: Yonex \nSeries: NanoBlade X10 \nThickness: G4 \nLength: about 670mm \nBalance point: 290mm-295mm \nRecommended lbs: 24~30lbs (maximum 22~32lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 85g (badminton racket line has been installed)',
    },
    {
        id: 121,
        imgSrc: racquetMaxx1,
        name: 'Maxx PowerStrike 800',
        price: 599.0,
        category: 'racquets',
        brand: 'Maxx',
        rate: 4.7,
        options: { color: ['red', 'black'] },
        description:
            'Category: racquet \nBrand: Maxx \nSeries: PowerStrike 800 \nThickness: G4 \nLength: about 670mm \nBalance point: 290mm-295mm \nRecommended lbs: 24~30lbs (maximum 22~32lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 85g (badminton racket line has been installed)',
    },
    {
        id: 122,
        imgSrc: racquetLining4,
        name: 'Li-Ning HyperNano X9',
        price: 729.0,
        category: 'racquets',
        brand: 'Li-Ning',
        rate: 4.7,
        options: { color: ['green', 'black'] },
        description:
            'Category: racquet \nBrand: Li-Ning \nSeries: HyperNano X9 \nThickness: G4 \nLength: about 670mm \nBalance point: 290mm-295mm \nRecommended lbs: 24~30lbs (maximum 22~32lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 86g (badminton racket line has been installed)',
    },
    {
        id: 123,
        imgSrc: racquetAlpsport2,
        name: 'Alpsport SpeedBlade 500',
        price: 579.0,
        category: 'racquets',
        brand: 'Alpsport',
        rate: 4.7,
        options: { color: ['red', 'white'] },
        description:
            'Category: racquet \nBrand: Alpsport \nSeries: SpeedBlade 500 \nThickness: G4 \nLength: about 670mm \nBalance point: 290mm-295mm \nRecommended lbs: 24~30lbs (maximum 22~32lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 85g (badminton racket line has been installed)',
    },
    {
        id: 124,
        imgSrc: racquetLining3,
        name: 'Li-Ning SuperDrive 8000',
        price: 659.0,
        category: 'racquets',
        brand: 'Li-Ning',
        rate: 4.8,
        options: { color: ['blue', 'silver'] },
        description:
            'Category: racquet \nBrand: Li-Ning \nSeries: SuperDrive 8000 \nThickness: G5 \nLength: about 675mm \nBalance point: 295mm-300mm \nRecommended lbs: 22~28lbs (maximum 22~30lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 84g (badminton racket line has been installed)',
    },
    {
        id: 125,
        imgSrc: racquetLining4,
        name: 'Li-Ning SuperDrive 8000',
        price: 569.0,
        category: 'racquets',
        brand: 'Li-Ning',
        rate: 4.7,
        options: { color: ['red', 'white'] },
        description:
            'Category: racquet \nBrand: Li-Ning \nSeries: TurboCharge 600 \nThickness: G4 \nLength: about 670mm \nBalance point: 290mm-295mm \nRecommended lbs: 24~30lbs (maximum 22~32lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 85g (badminton racket line has been installed)',
    },
    {
        id: 126,
        imgSrc: racquetMaxx2,
        name: 'Maxx Precision Pro 900',
        price: 399.0,
        category: 'racquets',
        brand: 'Maxx',
        rate: 4.8,
        options: { color: ['blue', 'silver'] },
        description:
            'Category: racquet \nBrand: Maxx \nSeries: Precision Pro 900 \nThickness: G4 \nLength: about 670mm \nBalance point: 290mm-295mm \nRecommended lbs: 24~30lbs (maximum 22~32lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 84g (badminton racket line has been installed)',
    },
    {
        id: 127,
        imgSrc: racquetMaxx3,
        name: 'Maxx HyperFury X7',
        price: 379.0,
        category: 'racquets',
        brand: 'Maxx',
        rate: 4.6,
        options: { color: ['green', 'white'] },
        description:
            'Category: racquet \nBrand: Maxx \nSeries: HyperFury X7 \nThickness: G5 \nLength: about 675mm \nBalance point: 295mm-300mm \nRecommended lbs: 22~28lbs (maximum 22~30lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 83g (badminton racket line has been installed)',
    },
    {
        id: 128,
        imgSrc: racquetAlpsport3,
        name: 'Alpsport PowerEdge 700',
        price: 419.0,
        category: 'racquets',
        brand: 'Alpsport',
        rate: 4.8,
        options: { color: ['silver', 'black'] },
        description:
            'Category: racquet \nBrand: Alpsport \nSeries: PowerEdge 700 \nThickness: G4 \nLength: about 670mm \nBalance point: 290mm-295mm \nRecommended lbs: 24~30lbs (maximum 22~32lbs) \nWire: Carbon fiber \nHardness bar: medium \nFrame material: Graphite \nTotal weight of racket: 84g (badminton racket line has been installed)',
    },
    {
        id: 201,
        imgSrc: footwear,
        name: 'YONEX Badminton Shoes',
        price: 609.0,
        category: 'footwears',
        brand: 'Yonex',
        rate: 4.9,
        options: {
            size: [25, 25, 5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Yonex \nDescription: lightest shoe at 270g.Superior ventilation and solid fit. \nUpper: Double Russel Mesh, Durable Skin Light \nMidsole: Hyper mslite \nPower Cushion \nPower Graphite Sheet \nOutsole: Rubber',
    },
    {
        id: 202,
        imgSrc: footwearYonex2,
        name: 'Yonex PowerCushion 65Z',
        price: 699.0,
        category: 'footwears',
        brand: 'Yonex',
        rate: 5.0,
        options: {
            size: [25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Yonex \nDescription: A comfortable and durable badminton shoe with excellent cushioning and stability. \nUpper: Double Russel Mesh, Durable Skin Light \nMidsole: Hyper mslite \nPower Cushion \nPower Graphite Sheet \nOutsole: Rubber',
    },
    {
        id: 203,
        imgSrc: footwearLining3,
        name: 'Li-Ning SuperDrive 800',
        price: 629.0,
        category: 'footwears',
        brand: 'Li-Ning',
        rate: 4.9,
        options: {
            size: [25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Li-Ning \nDescription: A high-performance badminton shoe with responsive cushioning and excellent stability. \nUpper: Synthetic Leather, Mesh \nMidsole: EVA, Power Cushion \nOutsole: Rubber',
    },
    {
        id: 204,
        imgSrc: footwearYonex2,
        name: 'Yonex AeroComfort Z',
        price: 649.0,
        category: 'footwears',
        brand: 'Yonex',
        rate: 4.7,
        options: {
            size: [25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Yonex \nDescription: A lightweight and breathable badminton shoe designed for maximum comfort and performance. \nUpper: Double Russel Mesh, Durable Skin Light \nMidsole: Hyper mslite \nPower Cushion \nPower Graphite Sheet \nOutsole: Rubber',
    },
    {
        id: 205,
        imgSrc: footwearFelet1,
        name: 'Felet SpeedPro X',
        price: 569.0,
        category: 'footwears',
        brand: 'Felet',
        rate: 4.6,
        options: {
            size: [25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Felet \nDescription: A lightweight and agile badminton shoe designed for fast-paced play. \nUpper: Breathable Mesh, Synthetic Overlays \nMidsole: EVA \nOutsole: Rubber',
    },
    {
        id: 206,
        imgSrc: footwearApacs1,
        name: 'Apecs Blaze X',
        price: 549.0,
        category: 'footwears',
        brand: 'Apecs',
        rate: 4.7,
        options: {
            size: [25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Apecs \nDescription: A high-performance badminton shoe designed for agility and stability on the court. \nUpper: Breathable Mesh, Synthetic Overlays \nMidsole: EVA, Power Cushion \nOutsole: Rubber',
    },
    {
        id: 207,
        imgSrc: footwearLining1,
        name: 'Li-Ning SonicBoost X',
        price: 619.0,
        category: 'footwears',
        brand: 'Li-Ning',
        rate: 5.0,
        options: {
            size: [25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Li-Ning \nDescription: A lightweight and responsive badminton shoe designed for explosive movements. \nUpper: Breathable Mesh, Synthetic Overlays \nMidsole: EVA, Power Cushion \nOutsole: Rubber',
    },
    {
        id: 208,
        imgSrc: footwearFelet2,
        name: 'Felet PowerLift 900',
        price: 619.0,
        category: 'footwears',
        brand: 'Felet',
        rate: 4.8,
        options: {
            size: [25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Felet \nDescription: A stable and supportive badminton shoe with enhanced cushioning for superior comfort. \nUpper: Synthetic Leather, Mesh \nMidsole: EVA, Power Cushion \nOutsole: Rubber',
    },
    {
        id: 209,
        imgSrc: footwearLining2,
        name: 'Li-Ning MegaDrive 800',
        price: 659.0,
        category: 'footwears',
        brand: 'Li-Ning',
        rate: 4.7,
        options: {
            size: [25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Li-Ning \nDescription: A durable and supportive badminton shoe with enhanced cushioning for long-lasting comfort. \nUpper: Synthetic Leather, Mesh \nMidsole: EVA, Power Cushion \nOutsole: Rubber',
    },
    {
        id: 210,
        imgSrc: footwearVictor1,
        name: 'Victor HyperSpeed X',
        price: 679.0,
        category: 'footwears',
        brand: 'Victor',
        rate: 4.9,
        options: {
            size: [25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Victor \nDescription: A high-speed badminton shoe designed for quick movements and agility on the court. \nUpper: Breathable Mesh, Synthetic Overlays \nMidsole: EVA, Power Cushion \nOutsole: Rubber',
    },
    {
        id: 211,
        imgSrc: footwearVictor2,
        name: 'Victor AeroStride Z',
        price: 699.0,
        category: 'footwears',
        brand: 'Victor',
        rate: 4.8,
        options: {
            size: [25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Victor \nDescription: A lightweight and comfortable badminton shoe designed for stability and support during intense matches. \nUpper: Double Russel Mesh, Durable Skin Light \nMidsole: Hyper mslite \nPower Cushion \nPower Graphite Sheet \nOutsole: Rubber',
    },
    {
        id: 212,
        imgSrc: footwearApacs3,
        name: 'Apacs TurboJet X',
        price: 579.0,
        category: 'footwears',
        brand: 'Apacs',
        rate: 5.0,
        options: {
            size: [25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Apacs \nDescription: A lightweight badminton shoe designed for explosive movements and superior comfort. \nUpper: Breathable Mesh, Synthetic Overlays \nMidsole: EVA, Power Cushion \nOutsole: Rubber',
    },
    {
        id: 213,
        imgSrc: footwearVictor3,
        name: 'Victor PowerLift 1000',
        price: 729.0,
        category: 'footwears',
        brand: 'Victor',
        rate: 4.7,
        options: {
            size: [25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Victor \nDescription: An advanced badminton shoe with responsive cushioning and enhanced stability for powerful movements. \nUpper: Breathable Mesh, Synthetic Overlays \nMidsole: EVA, Power Cushion \nOutsole: Rubber',
    },
    {
        id: 214,
        imgSrc: footwearMaxx1,
        name: 'Maxx SpeedPro 800',
        price: 599.0,
        category: 'footwears',
        brand: 'Maxx',
        rate: 4.6,
        options: {
            size: [25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Maxx \nDescription: A lightweight and responsive badminton shoe designed for fast-paced play. \nUpper: Breathable Mesh, Synthetic Overlays \nMidsole: EVA, Power Cushion \nOutsole: Rubber',
    },
    {
        id: 215,
        imgSrc: footwearApacs2,
        name: 'Apecs TurboDrive 1000',
        price: 599.0,
        category: 'footwears',
        brand: 'Apecs',
        rate: 4.8,
        options: {
            size: [25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Apecs \nDescription: An advanced badminton shoe with responsive cushioning and excellent traction. \nUpper: Synthetic Leather, Mesh \nMidsole: EVA, Power Cushion \nOutsole: Rubber',
    },
    {
        id: 216,
        imgSrc: footwearMaxx1,
        name: 'Maxx PowerStride X',
        price: 649.0,
        category: 'footwears',
        brand: 'Maxx',
        rate: 4.7,
        options: {
            size: [25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Maxx \nDescription: A high-performance badminton shoe with superior cushioning and stability for optimal performance. \nUpper: Synthetic Leather, Mesh \nMidsole: EVA, Power Cushion \nOutsole: Rubber',
    },
    {
        id: 217,
        imgSrc: footwearFelet3,
        name: 'Felet ProSpeed 700',
        price: 589.0,
        category: 'footwears',
        brand: 'Felet',
        rate: 4.7,
        options: {
            size: [25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Felet \nDescription: A lightweight badminton shoe designed for speed and agility. \nUpper: Breathable Mesh, Synthetic Overlays \nMidsole: EVA, Power Cushion \nOutsole: Rubber',
    },
    {
        id: 218,
        imgSrc: footwearYonex3,
        name: 'Yonex AeroComfort Z2',
        price: 659.0,
        category: 'footwears',
        brand: 'Yonex',
        rate: 4.8,
        options: {
            size: [25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Yonex \nDescription: A comfortable badminton shoe with excellent cushioning and stability. \nUpper: Double Russel Mesh, Durable Skin Light \nMidsole: Hyper mslite \nPower Cushion \nPower Graphite Sheet \nOutsole: Rubber',
    },
    {
        id: 219,
        imgSrc: footwearAlpsport1,
        name: 'Alpsport SpeedBlade 500',
        price: 679.0,
        category: 'footwears',
        brand: 'Alpsport',
        rate: 4.8,
        options: {
            size: [25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5],
        },
        description:
            'Category: footwear \nBrand: Alpsport \nDescription: A versatile badminton shoe with responsive cushioning and excellent traction for all-court performance. \nUpper: Breathable Mesh, Synthetic Overlays \nMidsole: EVA, Power Cushion \nOutsole: Rubber',
    },
    {
        id: 301,
        imgSrc: apparels,
        name: 'Yonex Malaysia Round Neck Shirt 2453',
        price: 59.9,
        category: 'apparels',
        brand: 'Yonex',
        rate: 4.9,
        options: {
            size: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
            color: ['Botanical Garden', 'Jet Black', 'Red', 'White'],
        },
        description:
            'Category: apparels \nBrand: Yonex \nMaterial: Polyester \nSize available: Adult: XS - XXL \nDry and Comfortable \nThe high performance fibers in TruBreeze fabrics \nKeep wearers cool, dry, and comfortable',
    },
    {
        id: 302,
        imgSrc: apparelFelet1,
        name: 'Felet ElitePro Shorts',
        price: 49.9,
        category: 'apparels',
        brand: 'Felet',
        rate: 4.7,
        options: {
            size: ['S', 'M', 'L', 'XL', 'XXL'],
            color: ['Black', 'Navy Blue', 'Grey'],
        },
        description:
            'Category: apparels \nBrand: Felet \nMaterial: Polyester \nSize available: S - XXL \nBreathable and Quick-Drying \nDesigned to keep you cool and comfortable during intense matches',
    },
    {
        id: 303,
        imgSrc: apparelVictor1,
        name: 'Victor EliteTech Jersey',
        price: 64.9,
        category: 'apparels',
        brand: 'Victor',
        rate: 4.8,
        options: {
            size: ['S', 'M', 'L', 'XL', 'XXL'],
            color: ['Red', 'Blue', 'White'],
        },
        description:
            'Category: apparels \nBrand: Victor \nMaterial: Polyester \nSize available: S - XXL \nMoisture-Wicking \nKeeps you dry and comfortable during long matches',
    },
    {
        id: 304,
        imgSrc: apparelLining1,
        name: 'Li-Ning ProTech Polo Shirt',
        price: 69.9,
        category: 'apparels',
        brand: 'Li-Ning',
        rate: 4.9,
        options: {
            size: ['S', 'M', 'L', 'XL', 'XXL'],
            color: ['Black', 'White', 'Blue'],
        },
        description:
            'Category: apparels \nBrand: Li-Ning \nMaterial: Polyester \nSize available: S - XXL \nBreathable and Lightweight \nProvides maximum comfort and freedom of movement',
    },
    {
        id: 305,
        imgSrc: apparelApacs1,
        name: 'Apacs AeroFit Shorts',
        price: 44.9,
        category: 'apparels',
        brand: 'Apacs',
        rate: 4.6,
        options: {
            size: ['S', 'M', 'L', 'XL', 'XXL'],
            color: ['Black', 'Grey'],
        },
        description:
            'Category: apparels \nBrand: Apacs \nMaterial: Polyester \nSize available: S - XXL \nSweat-Wicking \nKeeps you dry and comfortable during intense training sessions',
    },
    {
        id: 306,
        imgSrc: apparelMaxx1,
        name: 'Maxx ProFlex T-Shirt',
        price: 54.9,
        category: 'apparels',
        brand: 'Maxx',
        rate: 5.0,
        options: {
            size: ['S', 'M', 'L', 'XL', 'XXL'],
            color: ['Black', 'White', 'Blue'],
        },
        description:
            'Category: apparels \nBrand: Maxx \nMaterial: Polyester \nSize available: S - XXL \nStretchy and Comfortable \nAllows for unrestricted movement during matches',
    },
    {
        id: 307,
        imgSrc: apparelAlpsport1,
        name: 'Alpsport CoolTech Shorts',
        price: 49.9,
        category: 'apparels',
        brand: 'Alpsport',
        rate: 4.8,
        options: {
            size: ['S', 'M', 'L', 'XL', 'XXL'],
            color: ['Black', 'Grey', 'Red'],
        },
        description:
            'Category: apparels \nBrand: Alpsport \nMaterial: Polyester \nSize available: S - XXL \nQuick-Drying and Breathable \nKeeps you cool and dry during intense workouts',
    },
    {
        id: 308,
        imgSrc: apparelYonex2,
        name: 'Yonex Malaysia Round Neck Shirt 2453',
        price: 59.9,
        category: 'apparels',
        brand: 'Yonex',
        rate: 4.9,
        options: {
            size: ['XS', 'S', 'M', 'L', 'XL', '2XL'],
            color: ['Botanical Garden', 'Jet Black', 'Red', 'White'],
        },
        description:
            'Category: apparels \nBrand: Yonex \nMaterial: Polyester \nSize available: Adult: XS - XXL \nDry and Comfortable \nThe high performance fibers in TruBreeze fabrics \nKeep wearers cool, dry, and comfortable',
    },
    {
        id: 309,
        imgSrc: apparelFelet2,
        name: 'Felet ElitePro Shorts',
        price: 49.9,
        category: 'apparels',
        brand: 'Felet',
        rate: 5.0,
        options: {
            size: ['S', 'M', 'L', 'XL', 'XXL'],
            color: ['Black', 'Navy Blue', 'Grey'],
        },
        description:
            'Category: apparels \nBrand: Felet \nMaterial: Polyester \nSize available: S - XXL \nBreathable and Quick-Drying \nDesigned to keep you cool and comfortable during intense matches',
    },
    {
        id: 310,
        imgSrc: apparelVictor2,
        name: 'Victor EliteTech Jersey',
        price: 64.9,
        category: 'apparels',
        brand: 'Victor',
        rate: 4.8,
        options: {
            size: ['S', 'M', 'L', 'XL', 'XXL'],
            color: ['Red', 'Blue', 'White'],
        },
        description:
            'Category: apparels \nBrand: Victor \nMaterial: Polyester \nSize available: S - XXL \nMoisture-Wicking \nKeeps you dry and comfortable during long matches',
    },
    {
        id: 311,
        imgSrc: apparelLining2,
        name: 'Li-Ning ProTech Polo Shirt',
        price: 69.9,
        category: 'apparels',
        brand: 'Li-Ning',
        rate: 4.9,
        options: {
            size: ['S', 'M', 'L', 'XL', 'XXL'],
            color: ['Black', 'White', 'Blue'],
        },
        description:
            'Category: apparels \nBrand: Li-Ning \nMaterial: Polyester \nSize available: S - XXL \nBreathable and Lightweight \nProvides maximum comfort and freedom of movement',
    },
    {
        id: 312,
        imgSrc: apparelApacs2,
        name: 'Apacs AeroFit Shorts',
        price: 44.9,
        category: 'apparels',
        brand: 'Apacs',
        rate: 4.6,
        options: {
            size: ['S', 'M', 'L', 'XL', 'XXL'],
            color: ['Black', 'Grey'],
        },
        description:
            'Category: apparels \nBrand: Apacs \nMaterial: Polyester \nSize available: S - XXL \nSweat-Wicking \nKeeps you dry and comfortable during intense training sessions',
    },
    {
        id: 313,
        imgSrc: apparelMaxx2,
        name: 'Maxx ProFlex T-Shirt',
        price: 54.9,
        category: 'apparels',
        brand: 'Maxx',
        rate: 4.7,
        options: {
            size: ['S', 'M', 'L', 'XL', 'XXL'],
            color: ['Black', 'White', 'Blue'],
        },
        description:
            'Category: apparels \nBrand: Maxx \nMaterial: Polyester \nSize available: S - XXL \nStretchy and Comfortable \nAllows for unrestricted movement during matches',
    },
    {
        id: 314,
        imgSrc: apparelAlpsport2,
        name: 'Alpsport CoolTech Shorts',
        price: 49.9,
        category: 'apparels',
        brand: 'Alpsport',
        rate: 4.8,
        options: {
            size: ['S', 'M', 'L', 'XL', 'XXL'],
            color: ['Black', 'Grey', 'Red'],
        },
        description:
            'Category: apparels \nBrand: Alpsport \nMaterial: Polyester \nSize available: S - XXL \nQuick-Drying and Breathable \nKeeps you cool and dry during intense workouts',
    },
    {
        id: 401,
        imgSrc: bag,
        name: 'YONEX PRO RACKET BAG 92431WEX Cobalt Blue',
        price: 65.9,
        category: 'bags',
        brand: 'Yonex',
        rate: 4.7,
        options: {
            color: ['Black', 'Grey', 'Red'],
        },
        description: 'Category: bags \nBrand: Yonex \nSize: 75 x 19 x 33 cm \nCompartments: 2 big, 1 small',
    },
    {
        id: 402,
        imgSrc: bagFelet,
        name: 'Felet Elite Backpack 2000',
        price: 49.9,
        category: 'bags',
        brand: 'Felet',
        rate: 4.6,
        options: {
            color: ['black', 'grey'],
        },
        description: 'Category: bags \nBrand: Felet \nSize: 50 x 30 x 20 cm \nCompartments: 1 big, 2 small',
    },
    {
        id: 403,
        imgSrc: bagApacs,
        name: 'Apacs AeroPro Racket Bag',
        price: 55.9,
        category: 'bags',
        brand: 'Apacs',
        rate: 4.8,
        options: {
            color: ['black', 'grey'],
        },
        description: 'Category: bags \nBrand: Apacs \nSize: 80 x 20 x 30 cm \nCompartments: 3 big, 2 small',
    },
    {
        id: 404,
        imgSrc: bagVictor,
        name: 'Victor JetPack Pro 9000',
        price: 75.9,
        category: 'bags',
        brand: 'Victor',
        rate: 4.9,
        options: {
            color: ['black', 'grey'],
        },
        description: 'Category: bags \nBrand: Victor \nSize: 78 x 22 x 32 cm \nCompartments: 2 big, 3 small',
    },
    {
        id: 405,
        imgSrc: bagAlpsport,
        name: 'Alpsport UltraGear Duffel Bag',
        price: 59.9,
        category: 'bags',
        brand: 'Alpsport',
        rate: 4.7,
        options: {
            color: ['black', 'grey'],
        },
        description: 'Category: bags \nBrand: Alpsport \nSize: 70 x 25 x 30 cm \nCompartments: 1 big, 2 small',
    },
    {
        id: 406,
        imgSrc: bagMaxx,
        name: 'Maxx PowerRider Racket Bag',
        price: 65.9,
        category: 'bags',
        brand: 'Maxx',
        rate: 5.0,
        options: {
            color: ['black', 'grey'],
        },
        description: 'Category: bags \nBrand: Maxx \nSize: 75 x 19 x 33 cm \nCompartments: 2 big, 1 small',
    },
    {
        id: 407,
        imgSrc: bagLining,
        name: 'Li-Ning TurboPack Pro 800',
        price: 69.9,
        category: 'bags',
        brand: 'Li-Ning',
        rate: 5.0,
        options: {
            color: ['black', 'grey'],
        },
        description: 'Category: bags \nBrand: Li-Ning \nSize: 80 x 20 x 30 cm \nCompartments: 3 big, 2 small',
    },
    {
        id: 408,
        imgSrc: bag,
        name: 'YONEX PRO RACKET BAG 92431WEX Cobalt Blue',
        price: 65.9,
        category: 'bags',
        brand: 'Yonex',
        rate: 4.7,
        options: {
            color: ['black', 'grey'],
        },
        description: 'Category: bags \nBrand: Yonex \nSize: 75 x 19 x 33 cm \nCompartments: 2 big, 1 small',
    },
    {
        id: 409,
        imgSrc: bagFelet,
        name: 'Felet Elite Backpack 2000',
        price: 49.9,
        category: 'bags',
        brand: 'Felet',
        rate: 4.6,
        options: {
            color: ['black', 'grey'],
        },
        description: 'Category: bags \nBrand: Felet \nSize: 50 x 30 x 20 cm \nCompartments: 1 big, 2 small',
    },
    {
        id: 410,
        imgSrc: bagApacs,
        name: 'Apacs AeroPro Racket Bag',
        price: 55.9,
        category: 'bags',
        brand: 'Apacs',
        rate: 4.8,
        options: {
            color: ['black', 'grey'],
        },
        description: 'Category: bags \nBrand: Apacs \nSize: 80 x 20 x 30 cm \nCompartments: 3 big, 2 small',
    },
    {
        id: 411,
        imgSrc: bagVictor,
        name: 'Victor JetPack Pro 9000',
        price: 75.9,
        category: 'bags',
        brand: 'Victor',
        rate: 4.9,
        options: {
            color: ['black', 'grey'],
        },
        description: 'Category: bags \nBrand: Victor \nSize: 78 x 22 x 32 cm \nCompartments: 2 big, 3 small',
    },
    {
        id: 412,
        imgSrc: bagAlpsport,
        name: 'Alpsport UltraGear Duffel Bag',
        price: 59.9,
        category: 'bags',
        brand: 'Alpsport',
        rate: 5.0,
        options: {
            color: ['black', 'grey'],
        },
        description: 'Category: bags \nBrand: Alpsport \nSize: 70 x 25 x 30 cm \nCompartments: 1 big, 2 small',
    },
    {
        id: 413,
        imgSrc: bagMaxx,
        name: 'Maxx PowerRider Racket Bag',
        price: 65.9,
        category: 'bags',
        brand: 'Maxx',
        rate: 4.8,
        options: {
            color: ['black', 'grey'],
        },
        description: 'Category: bags \nBrand: Maxx \nSize: 75 x 19 x 33 cm \nCompartments: 2 big, 1 small',
    },
    {
        id: 414,
        imgSrc: bagLining,
        name: 'Li-Ning TurboPack Pro 800',
        price: 69.9,
        category: 'bags',
        brand: 'Li-Ning',
        rate: 4.7,
        options: {
            color: ['black', 'grey'],
        },
        description: 'Category: bags \nBrand: Li-Ning \nSize: 80 x 20 x 30 cm \nCompartments: 3 big, 2 small',
    },
    {
        id: 501,
        imgSrc: shuttlecock,
        name: 'YONEX SHUTTLECOCK AEROSENSA 30',
        price: 95.9,
        category: 'shuttlecocks',
        brand: 'Yonex',
        rate: 5.0,
        options: {
            grade: ['A', 'B', 'C'],
        },
        description:
            'Category: shuttlecock \nBrand : Yonex \nBall Classification : Goose feather ball \nBadminton ball Classification : As a whole Cork (high-grade) \nItem No. : AS-40 \nQuality：12Pcs',
    },
    {
        id: 502,
        imgSrc: shuttlecockFelet,
        name: 'Felet Elite Goose Feather Shuttlecocks',
        price: 85.9,
        category: 'shuttlecocks',
        brand: 'Felet',
        rate: 4.6,
        options: {
            grade: ['A', 'B', 'C'],
        },
        description:
            'Category: shuttlecock \nBrand : Felet \nBall Classification : Goose feather ball \nBadminton ball Classification : As a whole Cork (high-grade) \nQuality：12Pcs',
    },
    {
        id: 503,
        imgSrc: shuttlecockApacs,
        name: 'Apacs AeroFlight 800 Feather Shuttlecocks',
        price: 75.9,
        category: 'shuttlecocks',
        brand: 'Apacs',
        rate: 4.7,
        options: {
            grade: ['A', 'B', 'C'],
        },
        description:
            'Category: shuttlecock \nBrand : Apacs \nBall Classification : Goose feather ball \nBadminton ball Classification : As a whole Cork (high-grade) \nQuality：12Pcs',
    },
    {
        id: 504,
        imgSrc: shuttlecockVictor,
        name: 'Victor Gold Medal Goose Feather Shuttlecocks',
        price: 89.9,
        category: 'shuttlecocks',
        brand: 'Victor',
        rate: 4.8,
        options: {
            grade: ['A', 'B', 'C'],
        },
        description:
            'Category: shuttlecock \nBrand : Victor \nBall Classification : Goose feather ball \nBadminton ball Classification : As a whole Cork (high-grade) \nQuality：12Pcs',
    },
    {
        id: 505,
        imgSrc: shuttlecockAlpsport,
        name: 'Alpsport FeatherPro Shuttlecocks',
        price: 79.9,
        category: 'shuttlecocks',
        brand: 'Alpsport',
        rate: 4.5,
        options: {
            grade: ['A', 'B', 'C'],
        },
        description:
            'Category: shuttlecock \nBrand : Alpsport \nBall Classification : Goose feather ball \nBadminton ball Classification : As a whole Cork (high-grade) \nQuality：12Pcs',
    },
    {
        id: 506,
        imgSrc: shuttlecockMaxx,
        name: 'Maxx PowerFeather Shuttlecocks',
        price: 69.9,
        category: 'shuttlecocks',
        brand: 'Maxx',
        rate: 4.6,
        options: {
            grade: ['A', 'B', 'C'],
        },
        description:
            'Category: shuttlecock \nBrand : Maxx \nBall Classification : Goose feather ball \nBadminton ball Classification : As a whole Cork (high-grade) \nQuality：12Pcs',
    },
    {
        id: 507,
        imgSrc: shuttlecockLining,
        name: 'Li-Ning AirShuttle 300 Shuttlecocks',
        price: 99.9,
        category: 'shuttlecocks',
        brand: 'Li-Ning',
        rate: 4.7,
        options: {
            grade: ['A', 'B', 'C'],
        },
        description:
            'Category: shuttlecock \nBrand : Li-Ning \nBall Classification : Goose feather ball \nBadminton ball Classification : As a whole Cork (high-grade) \nQuality：12Pcs',
    },
    {
        id: 508,
        imgSrc: shuttlecock,
        name: 'YONEX SHUTTLECOCK AEROSENSA 30',
        price: 95.9,
        category: 'shuttlecocks',
        brand: 'Yonex',
        rate: 4.5,
        options: {
            grade: ['A', 'B', 'C'],
        },
        description:
            'Category: shuttlecock \nBrand : Yonex \nBall Classification : Goose feather ball \nBadminton ball Classification : As a whole Cork (high-grade) \nItem No. : AS-40 \nQuality：12Pcs',
    },
    {
        id: 509,
        imgSrc: shuttlecockFelet,
        name: 'Felet Elite Goose Feather Shuttlecocks',
        price: 85.9,
        category: 'shuttlecocks',
        brand: 'Felet',
        rate: 4.6,
        options: {
            grade: ['A', 'B', 'C'],
        },
        description:
            'Category: shuttlecock \nBrand : Felet \nBall Classification : Goose feather ball \nBadminton ball Classification : As a whole Cork (high-grade) \nQuality：12Pcs',
    },
    {
        id: 510,
        imgSrc: shuttlecockApacs,
        name: 'Apacs AeroFlight 800 Feather Shuttlecocks',
        price: 75.9,
        category: 'shuttlecocks',
        brand: 'Apacs',
        rate: 4.7,
        options: {
            grade: ['A', 'B', 'C'],
        },
        description:
            'Category: shuttlecock \nBrand : Apacs \nBall Classification : Goose feather ball \nBadminton ball Classification : As a whole Cork (high-grade) \nQuality：12Pcs',
    },
    {
        id: 511,
        imgSrc: shuttlecockVictor,
        name: 'Victor Gold Medal Goose Feather Shuttlecocks',
        price: 89.9,
        category: 'shuttlecocks',
        brand: 'Victor',
        rate: 4.8,
        options: {
            grade: ['A', 'B', 'C'],
        },
        description:
            'Category: shuttlecock \nBrand : Victor \nBall Classification : Goose feather ball \nBadminton ball Classification : As a whole Cork (high-grade) \nQuality：12Pcs',
    },
    {
        id: 512,
        imgSrc: shuttlecockAlpsport,
        name: 'Alpsport FeatherPro Shuttlecocks',
        price: 79.9,
        category: 'shuttlecocks',
        brand: 'Alpsport',
        rate: 4.5,
        options: {
            grade: ['A', 'B', 'C'],
        },
        description:
            'Category: shuttlecock \nBrand : Alpsport \nBall Classification : Goose feather ball \nBadminton ball Classification : As a whole Cork (high-grade) \nQuality：12Pcs',
    },
    {
        id: 513,
        imgSrc: shuttlecockMaxx,
        name: 'Maxx PowerFeather Shuttlecocks',
        price: 69.9,
        category: 'shuttlecocks',
        brand: 'Maxx',
        rate: 4.6,
        options: {
            grade: ['A', 'B', 'C'],
        },
        description:
            'Category: shuttlecock \nBrand : Maxx \nBall Classification : Goose feather ball \nBadminton ball Classification : As a whole Cork (high-grade) \nQuality：12Pcs',
    },
    {
        id: 514,
        imgSrc: shuttlecockLining,
        name: 'Li-Ning AirShuttle 300 Shuttlecocks',
        price: 99.9,
        category: 'shuttlecocks',
        brand: 'Li-Ning',
        rate: 4.7,
        options: {
            grade: ['A', 'B', 'C'],
        },
        description:
            'Category: shuttlecock \nBrand : Li-Ning \nBall Classification : Goose feather ball \nBadminton ball Classification : As a whole Cork (high-grade) \nQuality：12Pcs',
    },
    {
        id: 601,
        imgSrc: accessories,
        name: 'Yonex Badminton Racket Overgrip AC102',
        price: 1.99,
        category: 'accessories',
        rate: 4.6,
        color: ['white', 'red', 'black', 'purple', 'yellow', 'blue'],
        description:
            'Category: shuttlec \nBrand : Yonex \nSize:110*2.5cm \nWeight：0.06kg \nFeature: Multipuporse \nMaterial:Polyurethane',
    },
];

export default productsList;
