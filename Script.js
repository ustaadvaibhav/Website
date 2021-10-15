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
    // var element = document.getElementById('element');
    // element.classList.add('class-1');
    // element.classList.add('class-2', 'class-3');
    // element.classList.remove('class-3');
}
function light(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "#0b2b45"; 
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

if (mode === "Light"){
    light()
}
else{
    dark()
}

