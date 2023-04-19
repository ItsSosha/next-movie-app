import Header from "@/components/Header"
import { roboto, syne } from "@/utils/fonts"

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <main className={syne.className}>
                {children}
            </main>
        </>
    )
}

export const withLayout = (Component) => {
    return (props) => {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}