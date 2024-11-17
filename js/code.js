
window.onload=init;

function init()
{
    console.log("window has loaded");
    state.i=1;
    state.j=1;
    state.k=1;
    
}

var state = {
    j:0,
    k:0
};

function nextlandscape()
{
    console.log("inside function nextshoe");
    console.log(state.j);
    var shoe=document.getElementById("shoes");
    if(state.j===0){
    shoe.setAttribute("class","cloudy");
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
    shoe.setAttribute("class","jupiter");
         state.j++;
         console.log(state.j);
    }
    else
     if(state.j===2){
    shoe.setAttribute("class","scales");
         state.j=0;
    }
    
}
function nextring()
{
    console.log("inside function nexthair");
    
    console.log(state.k);
    var hairf=document.getElementById("rings");
    
    if(state.k===0){
    hairf.setAttribute("class","onering");
        state.k++;
        console.log(state.k);
    }
    else
     if(state.k===1){
    hairf.setAttribute("class","tworings");
         state.k++;
         console.log(state.k);
    }
    else
     if(state.k===2){
    hairf.setAttribute("class","snowring");
         state.k=0;
    }
    else
    if(state.k===3){
   hairf.setAttribute("class","snowring2");
        state.k=0;
   }
    
}

document.getElementById('colorPicker').addEventListener('input', function() {
    const circle = document.getElementById('circle');
    circle.style.backgroundColor = this.value;
});


document.getElementById('planetForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    const name = document.getElementById('nameInput').value;
    const heading = document.getElementById('planetHeading');
    heading.textContent = `Planet ${name}`;
    heading.style.display = 'block'; // Show the heading
});