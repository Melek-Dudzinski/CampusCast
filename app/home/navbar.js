'use client';
import './navbar.css'
import {useRef, useState} from 'react';

export default function Navbar() {
    const uni = useRef(null)
    const uniCaption = useRef(null)
    const home = useRef(null)
    const homeCaption = useRef(null)
    var uniToggle = true

    function Enlarge(button){
        if (button===uni){
            home.current.style.scale=null
            homeCaption.current.style.top=null
            homeCaption.current.style.fontWeight=null
            uniToggle=true
        }
        else{
            uni.current.style.scale=1
            uniCaption.current.style.top="0px"
            uniCaption.current.style.fontWeight="normal"
            uniToggle=false
        }
        button.current.style.scale="1.4"
        Lower()
    }

    function Lower(){
        if (uniToggle===true){
            uniCaption.current.style.position="relative"
            uniCaption.current.style.top="10px"
            uniCaption.current.style.fontWeight = "bold"
        }
        else{
            homeCaption.current.style.position="relative"
            homeCaption.current.style.top="10px"
            homeCaption.current.style.fontWeight = "bold"
        }
    }

    return (
        <>
            <header>
                <h1 id="greeting">Hello User!</h1>
            </header>
            <nav>
                <figure>
                    <a href="profile">
                        <input id="personal" type="image" src="/personal.png"/>
                    </a>
                    <figcaption>Profile</figcaption>
                </figure>
                <figure>
                    <input ref={uni} onClick={()=>Enlarge(uni)} id="university" type="image" src="/university.png"/>
                    <figcaption ref={uniCaption} id="uniCaption">University</figcaption>
                </figure>
                <figure>
                    <input ref={home} onClick={()=>Enlarge(home)} id="house" type="image" src="/home.png"/>
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