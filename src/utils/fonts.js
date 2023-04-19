import { Roboto } from 'next/font/google'
import { Syne } from 'next/font/google';
const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    style: ['normal']
})

const syne = Syne({
    weight: ['400', '500', '700', '800'],
    subsets: ['latin'],
    style: ['normal']
})


console.log(syne);
export { roboto, syne }