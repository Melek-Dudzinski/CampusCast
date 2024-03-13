import Image from 'next/image'
import Link from 'next/link'
import './navbar.css'

export default function Navbar() {
    return (
        <>
            <header>
                <h1 id="greeting">Hello User! </h1>
            </header>
            <nav>
                <Link href="/profile">
                    <Image src="/personal.png" width="100" height="100" alt="Personal"/>
                </Link>
                <Image src="/university1.png" width="100" height="100" alt="University"/>
                <Image src="/house.png" width="100" height="100" alt="Home"/>
                <Image src="/search.png" width="100" height="100" alt="Search"/>
            </nav>
        </>
    )
}