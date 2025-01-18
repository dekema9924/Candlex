import candle1 from '../public/Images/candle1.png'
import candle2 from '../public/Images/candle2.png'
import candle3 from '../public/Images/candle3.png'
import candle4 from '../public/Images/candle4.png'

interface dataInterface {
    img: string
    title: string
    price: number
    discout: number | null
    isDiscount: boolean
    smell: string
}

export const popularData:dataInterface[] = [
    {
        img: candle1,
        title: 'Vanilla Relax',
        price: 20,
        discout: 24,
        isDiscount: true,
        smell: 'cake smell'

    },
    {
        img: candle2,
        title: 'Beach Sunshine',
        price: 40,
        discout: null,
        isDiscount: false,
        smell: 'enjoy the afternoon'

    },
    {
        img: candle3,
        title: 'Brown Relac',
        price: 33,
        discout: 37,
        isDiscount: true,
        smell: 'together in the afternoon'

    },
    {
        img: candle4,
        title: 'Moon morning',
        price: 34,
        discout: null,
        isDiscount: false,
        smell: 'the scent of the morning'

    },

]