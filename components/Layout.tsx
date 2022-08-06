import BottomNav from "./bottomNav"

const Layout = ({ children }) => {
    return(
        <div>
            <BottomNav />
            { children }
        </div>
    )
}

export default Layout