import Header from "@/components/Header"

const Layout = ({children}) => {
    return (
        <>
            <Header />
            <main>
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