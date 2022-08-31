const apiForeign = "https://wger.de/api/v2"

document.addEventListener("DOMContentLoaded", ()=>{
    fetch(`${apiForeign}/exerciseimage`)
    .then(response => response.json())
    .then( gallery => displayExerciseImage(gallery))
     
    
    // Adding Button Functionalities
    Array.from(document.getElementsByClassName('button')).forEach(function (elm) { elm.addEventListener('click', displayWorkoutPage) })
    Array.from(document.getElementsByClassName('end-button')).forEach(function (elm) { elm.addEventListener('click', displayHomePage) })

    
})


// how to change the divs
function displayHomePage() {
    [].forEach.call(document.querySelectorAll('.container'), 
        function(el){
            if(el.style.display == 'none' )
                el.style.display = 'flex';
            else if(el.style.display == 'flex')
                
                el.style.display = 'none'
                // el.style.display = 'block';
                else 
                 el.style.display = 'flex'
        });
    }


function displayWorkoutPage() {

    
    [].forEach.call(document.querySelectorAll('.container'), 
        function(el){
            if(el.style.display == 'flex')
                el.style.display = 'none';
            else if(el.style.display == 'none')
                
                el.style.display = 'flex';
                countdown()
                
        });

    

        // Add timer

    function countdown(){
        var timeleft = 15;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("countdown").innerHTML = timeleft + 
    " "+"seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);

     
}}

// const daysOfTheWeek = }





   
