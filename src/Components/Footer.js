import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <footer>
            <Link to='./'>home</Link>
            <span> </span>
            <Link to='./About'>about</Link>
            <span> </span>
            <Link to='./NamesPics'>names</Link>
            <p>Copyright &copy; 2021</p>
        </footer>
    )
}

export default Footer
