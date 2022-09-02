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
  

function mondayWorkouts(){

    fetch(`${apiForeign }/mondayWorkout`)
    .then(response => response.json())
    .then( workout => {

    workout.forEach(elm =>{
        // console.log(elm.image1)
        let workoutPage = document.querySelector(".table");
            let child = document.createElement("tr")
            
            child.innerHTML += `
            <td class="workout-image"><img onmouseenter=src="${elm.image1}" alt="exerciseImage">
            <td>${elm.name}</td>
          <td>${elm.instructions}</td>
          <td>${elm.sets} x4 </td>           
         `
            

         workoutPage.appendChild(child)

        })
    
    
    
         })
    
        
    }

    // Display Tuesday Workouts
    function tuesdayWorkouts(){

        fetch(`${apiForeign }/tuesdayWorkouts`)
        .then(response => response.json())
        .then( workout => {

        workout.forEach(elm =>{
            // console.log(elm.image1)
            let workoutPage = document.querySelector(".table");
                let child = document.createElement("tr")
                
                child.innerHTML += `
                <td class="workout-image"><img onmouseenter=src="${elm.image1}" alt="exerciseImage">
                <td>${elm.name}</td>
              <td>${elm.instructions}</td>
              <td>${elm.sets} x4 </td>

             `      
             workoutPage.appendChild(child)
    
            })        
        })       
            
                }
     // Display Wednesday Workouts
     function wednesdayWorkouts(){

        fetch(`${apiForeign }/wednesdayWorkouts`)
        .then(response => response.json())
        .then( workout => {
    
        workout.forEach(elm =>{
            let workoutPage = document.querySelector(".table");
                let child = document.createElement("tr")
                
                child.innerHTML += `
                <td class="workout-image"><img onmouseenter=src="${elm.image1}" alt="exerciseImage">
                <td>${elm.name}</td>
              <td>${elm.instructions}</td>
              <td>${elm.sets} x4 </td>

                                    `      
             workoutPage.appendChild(child)

            })        
        })
    
     
}

    // Display Thursday Workouts
    function thursdayWorkouts(){

        fetch(`${apiForeign }/thursdayWorkouts`)
    .then(response => response.json())
    .then( workout => {
            console.log(workout)
        
        workout.forEach(elm =>{
            let workoutPage = document.querySelector(".table");
                let child = document.createElement("tr")
        
                child.innerHTML += `
                <td class="workout-image"><img onmouseenter=src="${elm.image1}" alt="exerciseImage">
                <td>${elm.name}</td>
              <td>${elm.instructions}</td>
              <td>${elm.sets} x4 </td>
                                        `      
             workoutPage.appendChild(child)
        
    })
        })
        
            
    }

    // Display Friday Workouts
    function fridayWorkouts(){

        fetch(`${apiForeign }/fridayWorkouts`)
    .then(response => response.json())
        .then( workout => {
    
        workout.forEach(elm =>{
            let workoutPage = document.querySelector(".table");
                let child = document.createElement("tr")
                
                child.innerHTML += `
                <td class="workout-image"><img onmouseenter=src="${elm.image1}" alt="exerciseImage">
                <td>${elm.name}</td>
                <td>${elm.instructions}</td>
                <td>${elm.sets} x4 </td>

                                    `      
             workoutPage.appendChild(child)
        
    }) 
        })

})
    
 
  






   
