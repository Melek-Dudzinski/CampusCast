'use client';
import './navbar.css'
import React, {useRef, useEffect} from 'react';
import { useSearchParams } from 'next/navigation'

export default function Navbar({uniToggle, setUniToggle, uniLocation, homeLocation, setLocation, setSearchLocation}) {
  // Constants used to see which sections of the navbar are selected. They are null at the start, and when an event occurs, they are returned a reference to the dom elements
  const uni = useRef(null)
  const uniCaption = useRef(null)
  const home = useRef(null)
  const homeCaption = useRef(null)
  const searchParams = useSearchParams()

  //Change the color of the background on event
  const handleColorChange = (event) => {
    document.body.style.background = (event.target.value)
  }

  //Change location of middle weather container when anything valid is typed into the searchbar. If nothing is entered, the default location is used
  const handleLocationChange = (event) => {
    if (event.target.value !== ""){
      try {
        setSearchLocation(event.target.value)
      } catch (AxiosError) {
        console.log("not a place")
      }
    } else {
      setSearchLocation("Homerton, London")
    }
  }

  //When uniToggle is changed, this function executes, changing the location of the arrival/departure and enlarging the respective button
  useEffect(() => {
    if (uniToggle===true){
      setLocation(uniLocation)
      enlarge(uni)}
    else if (uniToggle===false){
      setLocation(homeLocation)
      enlarge(home)}
  }, [uniToggle])


  //Enlarges the university or home button on toggle. If university button is pressed, the home button and caption css styles are reset and university is enlarged. If home button is pressed, same logic applies (css styles for university button is slightly different due to university button enlarged be default) 
  function enlarge(button){
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

  //Lower and bolden text of button pressed, in order to accomodate for the enlarged button
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

  //Changes whether searchbar or color picker is displayed. Fetches the two elements which have className content, and removes any instances of the class active. Then, gives the chosen option the class active.
  function changeContent(id) {
    var contents = document.getElementsByClassName("content");
    for (var i = 0; i < contents.length; i++) {
      contents[i].classList.remove("active");
    }
    var contentToShow = document.getElementById(id);
    contentToShow.classList.add("active");
  }

  return (
    <>
      <header>
        <table>
          <tbody>
            <tr>
              <td style={{ width: '15%'}}><a href="/"><input id="logout" type="image" src="/logout.png"/></a></td>
              <td><h1 id="greeting">Hello {searchParams.get('myName')}!</h1></td>
            </tr>
          </tbody>
        </table>
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
          <input onClick={()=>changeContent('content1')} id="search" type="image" src="/search.png"/>
          <figcaption>Search</figcaption>
        </figure>
        <figure>
          <input onClick={()=>changeContent('content2')} id="change-background" type="image" src='/changeTheme.png'/>
          <figcaption>Change Background</figcaption>
        </figure>
      </nav>
      <form method="post">
        <div id="content1" className="content">
          <input name="searchResult" id="searchBar" type="text" placeholder='Enter location' onChange={handleLocationChange}></input>
        </div>
        <div id="content2" className="content">
          <input name="colorResult" id="searchBarColor" type="color" onChange={handleColorChange}></input>
        </div>
      </form>
    </>
  )
}