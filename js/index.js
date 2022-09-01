const apiForeign = "https://mwirigibrianbob21.github.io/patojson.api/myData.json"
const apiHost = "http://localhost:3000";


document.addEventListener("DOMContentLoaded", ()=>{
    
    




    
    
    // Adding Button Functionalities
    Array.from(document.getElementsByClassName('button')).forEach(function (elm) { elm.addEventListener('click', ()=>{
        displayWorkoutPage()

        })
    }) 

    Array.from(document.getElementsByClassName('end-button')).forEach(function (elm) { elm.addEventListener('click', displayHomePage) 
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
                
                
        });
  

        // Add timer

    function countdown(){
        var timeleft = 30;

        var downloadTimer = setInterval(function function1(){
        document.getElementById("countdown").innerHTML = timeleft + 
            " "+"seconds remaining";

            timeleft -= 1;
                if(timeleft <= 0){
                    clearInterval(downloadTimer);
                    document.getElementById("countdown").innerHTML = "Congrats! See you Tommorrow"
                }
            }, 1000);

    // console.log(countdown);
    
     
}countdown()
}


fetch(`${apiHost }/workout`)
    .then(response => response.json())
    .then( workout => {
        
        return workout;
        
        
    })
// Render Workouts Array
function fetchWorkouts(){
    fetch(`${apiHost}/workout`)
    .then(response => response.json())
    .then(obj => {
        let array = obj.workout
       console.log(array)
        
    }) 
}fetchWorkouts()

})
    
 
  






   
