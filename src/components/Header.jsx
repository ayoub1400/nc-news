import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header>
        <Link to='/'>
        <h1 className="Header">
            Ayoub's News
        </h1>
        </Link>
        </header>
    )
}

export default Header