'use client';
import './navbar.css'
import {useRef} from 'react';

export default function Navbar() {
    const uni = useRef(null)
    const uniCaption = useRef(null)
    const home = useRef(null)
    const homeCaption = useRef(null)
    var uniToggle = false
    var homeToggle = false

    function Enlarge(state, capState){
        if (uniToggle === false && homeToggle===false){
            if (state===uni){
                uni.current.style.scale="1.4"
                uniToggle = true
            }
            else{
                home.current.style.scale="1.4"
                homeToggle = true
            }
        }
        else if (uniToggle===true && state===home){
            uni.current.style.scale=null
            uniToggle=false
            home.current.style.scale="1.4"
            homeToggle = true
        }
        else if (homeToggle===true && state===uni){
            home.current.style.scale=null
            homeToggle=false
            uni.current.style.scale="1.4"
            uniToggle = true
        }
        Lower()
    }

    function Lower(){
        if (uniToggle === true && homeToggle===false){
            uniCaption.current.style.position="relative"
            uniCaption.current.style.top="10px"
            uniCaption.current.style.fontWeight = "bold"
            homeCaption.current.style.fontWeight = null
            homeCaption.current.style.position=null
            homeCaption.current.style.top=null
        }
        else if (uniToggle === false && homeToggle===true){
            homeCaption.current.style.position="relative"
            homeCaption.current.style.top="10px"
            homeCaption.current.style.fontWeight = "bold"
            uniCaption.current.style.fontWeight = null
            uniCaption.current.style.position=null
            uniCaption.current.style.top=null
        }
    }

    return (
        <>
            <header>
                <h1 id="greeting">Hello User!</h1>
            </header>
            <nav>
                <figure>
                    <input id="personal" type="image" src="/personal.png"/>
                    <figcaption>Personal</figcaption>
                </figure>
                <figure>
                    <input ref={uni} onClick={()=>Enlarge(uni, uniCaption)} id="university" type="image" src="/university.png"/>
                    <figcaption ref={uniCaption}>University</figcaption>
                </figure>
                <figure>
                    <input ref={home} onClick={()=>Enlarge(home, homeCaption)} id="house" type="image" src="/home.png"/>
                    <figcaption ref={homeCaption}>Home</figcaption>
                </figure>
                <figure id="fig">
                    <input id="search" type="image" src="/search.png"/>
                    <figcaption>Search</figcaption>
                </figure>               
            </nav>
        </>
    )
}