'use client';
import './navbar.css'
import React, {useRef, useEffect} from 'react';
import { useSearchParams } from 'next/navigation'
import Link from 'next/link';

export default function Navbar({uniToggle, setUniToggle, uniLocation, homeLocation, setLocation}) {
  const uni = useRef(null)
  const uniCaption = useRef(null)
  const home = useRef(null)
  const homeCaption = useRef(null)
  var result = ''

  const searchParams = useSearchParams()

  useEffect(() => {
    if (uniToggle===true){
      setLocation(uniLocation)
      enlarge(uni)}
    else if (uniToggle===false){
      setLocation(homeLocation)
      enlarge(home)}
  }, [uniToggle])

  function enlarge(button){
    hide()
    if (button===uni){
      home.current.style.scale=null
      home.current.style.border=null
      homeCaption.current.style.top=null
      homeCaption.current.style.fontWeight=null        
    } else {
      uni.current.style.scale=1
      uni.current.style.border=null
      uniCaption.current.style.top="0px"
      uniCaption.current.style.fontWeight="normal"
    }
    button.current.style.scale="1.4"
    button.current.style.border="solid 2px black"
    lower()
  }

  function lower(){
    if (uniToggle===true){
      uniCaption.current.style.position="relative"
      uniCaption.current.style.top="10px"
      uniCaption.current.style.fontWeight = "bold"
    } else{
      homeCaption.current.style.position="relative"
      homeCaption.current.style.top="10px"
      homeCaption.current.style.fontWeight = "bold"
    }
  }

  function show(){
    let s = document.getElementById('searchBar')
    if (s.style.visibility==="visible"){
      hide()
    } else{
      s.style.visibility="visible";
    }
  }

  function hide(){
    let s = document.getElementById('searchBar')
    s.style.visibility="hidden";
  }

  function handleSubmit(e, result) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    result = Object.fromEntries(formData.entries());
    var f = result.searchResult
    result=f
    console.log(result)
  }

  useEffect(() => {
      console.log("reuslt changed")
  }, [result])

  return (
    <>
      <header>
        <h1 id="greeting">Hello {searchParams.get('myName')}!</h1>
      </header>
      <nav>
        <figure>
        <a href="profile">
          <input id="personal" type="image" src="/personal.png"/>
        </a>
        <figcaption>Profile</figcaption>
        </figure>
        <figure>
          <input ref={uni} onClick={()=>setUniToggle(true)} id="university" type="image" src="/university.png"/>
          <figcaption ref={uniCaption} id="uniCaption">University</figcaption>
        </figure>
        <figure>
          <input ref={home} onClick={()=>setUniToggle(false)} id="house" type="image" src="/home.png"/>
          <figcaption ref={homeCaption}>Home</figcaption>
        </figure>
        <figure id="fig">
          <input onClick={()=>show()} id="search" type="image" src="/search.png"/>
          <figcaption>Search</figcaption>
        </figure>               
      </nav>
      <form method="post" onSubmit={handleSubmit}>
        <input name="searchResult" id="searchBar" type="text" placeholder='Enter location'></input>
      </form>
    </>
  )
}