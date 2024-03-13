import Image from 'next/image'
import './navbar.css'

export default function Navbar() {
    return (
        <>
            <header>
                <h1 id="greeting">Hello User!</h1>
            </header>
            <nav>
                <figure>
                    <button id="personal" type="button">
                        <img src="/personal.png" width="100" height="100" alt="Personal"/>
                    </button>
                    <figcaption>Personal</figcaption>
                </figure>
                <figure>
                    <button id="university" type="button">
                        <img src="/university.png" width="100" height="100" alt="University"/>
                    </button>
                    <figcaption>University</figcaption>
                </figure>
                <figure>
                    <button id="house" type="button">
                        <img src="/home.png" width="100" height="100" alt="Home"/>
                    </button>
                    <figcaption>Home</figcaption>
                </figure>
                <figure id="fig">
                    <button id="search" type="button">
                        <img id="magnifier" src="/search.png" width="100" height="100" alt="Search"/>
                    </button>
                    <figcaption>Search</figcaption>
                </figure>               
            </nav>
        </>
    )
}