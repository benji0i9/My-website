function on(){
    document.querySelector("img").style.setProperty( //selects and changes the properties of the code
    "animation-name", "moving")
    document.querySelector("img").style.setProperty( 
    "animation-duration", "4s")
    document.querySelector("img").style.setProperty( 
    "animation-iteration-count", "infinite")
}

function off(){
    document.querySelector("img").style.setProperty( 
    "animation", "0s ease 0s 0 normal none running moving")
}

