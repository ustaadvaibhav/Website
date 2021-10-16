var navbar = document.getElementById('navvbar');
function dark(){
    document.body.style.backgroundColor = "#0b2b45";
    document.body.style.color = "white";
    var object = document.getElementById('dark');
    dark.backgroundColor = "0e122b";
    dark.color = "white";
    // Saving the Preferred Mode Of the User
    localStorage.setItem('Appearance',"Dark");
    console.log('Dark');

    //Changing the lettering in the NavBar
    navbar.classList.add('daek');

    localStorage.setItem('Appearance',"Dark");
    console.log('Dark');
}
function light(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#0b2b45"; 
    console.log("yes");
    localStorage.setItem('Appearance',"Light");
    console.log('Light');

    navbar.classList.remove('Dark')
}

// function SelfCopy(copyText) 
// {
//       navigator.clipboard.writeText(copyText);
//       alert("You just copied this: (" + copyText + ").");
// }
var mode = localStorage.getItem('Appearance');
}

var mode = localStorage.getItem('Appearance');
console.log(mode); 


if (mode === "Light"){
    light()
}
else{
    dark()

}


}
