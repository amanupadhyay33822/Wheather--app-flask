document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('locationInput');
    
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            getWeather();
        }
    });
});





function getWeather() {
    var locationInput = document.querySelector(".locationInput").value;
    if (locationInput === "" || locationInput.replace(/\s/g, "") === "") {
    } else {
        window.location.href = `/weather/${locationInput.replace("/", ",").toLowerCase()}`;
    }
}