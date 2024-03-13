var fig = document.getElementById('fig');
var searchBar = document.createElement('input');
var showSearchBar = false;
searchBar.placeholder="Search location";
searchBar.style.height="30px";
searchBar.style.borderRadius="1.2em";
searchBar.style.border="transparent"
searchBar.style.padding="0.5em";
searchBar.style.paddingLeft="1em";
searchBar.style.position="absolute";
searchBar.style.top="310px"
searchBar.style.left="80px"
searchBar.style.width="80%";

function expand(e){  
    showSearchBar = true    
    fig.appendChild(searchBar);
}

function contract(){
    showSearchBar = false
    fig.removeChild(searchBar);
}

function toggleSearch(){
    if(showSearchBar==false){
        expand()
    }
    else{
        contract()
    }
}

let searchButton = document.getElementById('search');
searchButton.addEventListener('click', toggleSearch);
