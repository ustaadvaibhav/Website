function dark(){
    document.body.style.backgroundColor = "#0e122b";
    document.body.style.color = "white";
    var object = document.getElementById('dark');
    dark.backgroundColor = "0e122b";
    dark.color = "white";
    
    // Saving the Preferred Mode Of the User
    localStorage.setItem('Appearance',"Dark");
    console.log('Dark');

    //Changing the lettering in the NavBar
    // var element = document.getElementById('element');
    // element.classList.add('class-1');
    // element.classList.add('class-2', 'class-3');
    // element.classList.remove('class-3');
    localStorage.setItem('Appearance',"Dark");
    console.log('Dark');
}
function light(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#0e122b"; 
    console.log("yes");
    localStorage.setItem('Appearance',"Light");
    console.log('Light');
}

// function SelfCopy(copyText) 
// {
//       navigator.clipboard.writeText(copyText);
//       alert("You just copied this: (" + copyText + ").");
// }
var mode = localStorage.getItem('Appearance');

var mode = localStorage.getItem('Appearance');
console.log(mode); 

if (mode === "Light"){
    light()
}
else{
    dark()

}

}

