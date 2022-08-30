const apiForeign = "https://wger.de/api/v2"

document.addEventListener("DOMContentLoaded", ()=>{
    fetch(`${apiForeign}/exerciseimage`)
    .then(response => response.json())
    .then( gallery => console.log(gallery))
     
    let button = document.getElementById("monday-start")
    console.log(button)

    button.addEventListener("click", ()=>{
        console.log("Hello")
        displayWorkoutPage()
    })

    
})
// how to change the divs
function displayWorkoutPage() {
    [].forEach.call(document.querySelectorAll('.container'), 
        function(el){
            if(el.style.display == 'none')
                el.style.display = 'block';
            else
                
                el.style.display = 'none'
                // el.style.display = 'block';
        });
}



   
