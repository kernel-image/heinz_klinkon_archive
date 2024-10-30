import prezel from '../icons/PREZEL.svg'
import '../styles/Header.css'

function Header() {
    return (
        <div className = "header">
            <h1>HEINZ KLINKON</h1>
            <div className = "sub-header">
                <h2>ART</h2><img src={prezel} className = "prezel" alt={"\u0026"} /><h2>DESIGN</h2>
            </div>
        </div>
    )
}

export default Header