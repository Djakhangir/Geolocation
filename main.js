

//In Chrome or android it is impossible to fake the heading or speed but we can fake coordinates
//To fake the heading and speed, we can do it in IOS that is why we use for this exercise xcode IDE;


// Accessed all the classes to work with;
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value'); 

//to listen the user position;

navigator.geolocation.watchPosition((data) => {   //thereis .getCurrentPosition returns only one value/number position when 
console.log(data);      //watchPosition just watch it overtime and returns data as frequently as we need, if we move around
 speed.textContent = data.coords.speed;
 arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.error(err);
    alert('Hey! you have to allow that!!!');
});  

