'use client';
import './navbar.css'
import {useRef} from 'react';

export default function Navbar() {
    const inputRef = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)
    const inputRef4 = useRef(null)
    var check = false

    function Enlarge(){
        if (check === false){
            inputRef.current.style.scale="1.3"
            inputRef.current.style.border="solid 1px black"
            check = true
        }
        else{
            inputRef.current.style.scale=null
            check = false
        }
        Lower()
    }
    function Lower(){
        if (check === true){
            inputRef2.current.style.position="relative"
            inputRef2.current.style.top="10px"
        }
        else{
            inputRef2.current.style.position=null
            inputRef2.current.style.top=null
        }
    }
    return (
        <>
            <header>
                <h1 id="greeting">Hello User!</h1>
            </header>
            <nav>
                <figure>
                    <input ref={inputRef} onClick={Enlarge} id="personal" type="image" src="/personal.png"/>
                    <figcaption ref={inputRef2}>Personal</figcaption>
                </figure>
                <figure>
                    <input id="university" type="image" src="/university.png"/>
                    <figcaption>University</figcaption>
                </figure>
                <figure>
                    <input id="house" type="image" src="/home.png"/>
                    <figcaption>Home</figcaption>
                </figure>
                <figure id="fig">
                    <input id="search" type="image" src="/search.png"/>
                    <figcaption>Search</figcaption>
                </figure>               
            </nav>
        </>
    )
}