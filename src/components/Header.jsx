import './Header.css'

function Header() {
    return (
        <>
            <div className="header-container">
                <img className="bikcraft" src="https://www.origamid.com/projetos/bikcraft/img/bikcraft.svg" />
                <ul className="header-menu">
                    <li>Bicicletas</li>
                    <li>Seguros</li>
                    <li>Contato</li>
                </ul>
            </div>        
        </>
    )
}

export default Header