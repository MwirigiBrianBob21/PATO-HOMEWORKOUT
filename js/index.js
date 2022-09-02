const apiForeign = "https://mwirigibrianbob21.github.io/patojson.api/myData.json"
const apiHost = "http://localhost:3000";


document.addEventListener("DOMContentLoaded", ()=>{
    

 // Refresh Page after clicking end button

 function refreshPage(){
    window.location.reload();
} 

    Array.from(document.getElementsByClassName('end-button')).forEach(function (elm) { elm.addEventListener('click', ()=>{  
        
        displayHomePage()
        refreshPage()
        

        
    } )
})

// How to change the divs
function displayHomePage() {
    [].forEach.call(document.querySelectorAll('.container'), 
        function(el){
            if(el.style.display == 'none' )
                el.style.display = 'flex';
            else if(el.style.display == 'flex')
                
                el.style.display = 'none'
                else 
                 el.style.display = 'flex'
        });
    }  

}



)

function displayWorkoutPage() {
    
    [].forEach.call(document.querySelectorAll('.container'), 
        function(el){
            if(el.style.display == 'flex')
                el.style.display = 'none';
            else if(el.style.display == 'none')
                
                el.style.display = 'flex';
                
                
        });
    }

    // Grabbing each button
document.querySelector("#monday-start").addEventListener("click", ()=>{
            displayWorkoutPage()
            mondayWorkouts()   
        
    })

document.querySelector("#tuesday-start").addEventListener("click", ()=>{
        displayWorkoutPage()
        tuesdayWorkouts()    
    
})

document.querySelector("#wednesday-start").addEventListener("click", ()=>{
    displayWorkoutPage()
    wednesdayWorkouts()   

})

document.querySelector("#thursday-start").addEventListener("click", ()=>{
displayWorkoutPage()
thursdayWorkouts()    

})

document.querySelector("#friday-start").addEventListener("click", ()=>{
    displayWorkoutPage()
    fridayWorkouts()    
    
})

// Display MondayWorkouts
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

       //Display Workouts by body
       function displayInputs() {
            let options = document.querySelector("#mySelect")
            options.firstElementChild = mondayWorkouts()
       }
       displayInputs()

     // ADDING THE LIKE BUTTON
     let count = document.querySelector("#like-count")
        let countValue = `0`
           let loveBtn = document.querySelector("#like-button")
           loveBtn.addEventListener("click", ()=>{
           count.innerHTML = `${countValue ++} likes`
               
           })
        
            
    }
    


    
 
  






   
