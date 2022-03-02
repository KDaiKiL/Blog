import Search from '../Search'
import './header.css'

function Header() {
    

    return(
        <header>
            <div className="containerH">
                <nav>
                    <h4>Clube de Informática</h4>
                    <h4>blog</h4>
                </nav>

                <Search />
            </div>
        </header>
    )
}   

export default Header