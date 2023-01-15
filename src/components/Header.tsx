export const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-light fixed-top" id="customNav">
            <div className="container-fluid">
                <ul className="navbar-nav justify-content-start">
                    <a href="https://github.com/pratikkabade">
                        <img alt="a" id="hrtLogo" src="https://avatars.githubusercontent.com/u/108847584?s=200&v=4" draggable="false" />
                    </a>
                </ul>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-solid fa-caret-down" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav justify-content-end">
                        <li className="barItem">
                            <a className="nav-link" href="#">One</a>
                        </li>
                        <li className="barItem">
                            <a className="nav-link" href="#">Two</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}