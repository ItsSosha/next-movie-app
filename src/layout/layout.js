const Layout = ({children}) => {
    return (
        <>
            <header>
                Layout
            </header>
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