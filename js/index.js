const apiForeign = "https://wger.de/api/v2"

document.addEventListener("DOMContentLoaded", ()=>{
    fetch(`${apiForeign}/exerciseimage`)
    .then(response => response.json())
    .then( gallery => console.log(gallery))
})