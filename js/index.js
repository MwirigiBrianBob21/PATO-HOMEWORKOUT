const apiForeign = "https://mwirigibrianbob21.github.io/patojson.api/myData.json"
const apiHost = "http://localhost:3000";


document.addEventListener("DOMContentLoaded", ()=>{
    fetch(`${apiForeign }/warmup`)
    .then(response => response.json())
    .then( exercise => {console.log( exercise)})

    document.querySelector("#monday-start").addEventListener("click",() =>{
        console.log("Hello")
        let workoutTable = document.querySelector("tr")
        console.log(workoutTable)
        
        for(let r of exercise.list) {
            workoutTable += `<tr>
            <th>${r.id}</th>
            <th>Workout</th>
            <th>Instructions</th>
            <th>Sets</th>
            <th>Muscle Group</th>
          </tr>`;
        }
       
        document.querySelector("table").innerHTML = workoutTable;
    })
     
    
    // Adding Button Functionalities
    Array.from(document.getElementsByClassName('button')).forEach(function (elm) { elm.addEventListener('click', ()=>{
        displayWorkoutPage()
        // mondayWorkout()
    //    let buttonArray = [...elm]
    //    console.log(elm)
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



    
 
  
})







   
