document.addEventListener(
"DOMContentLoaded",
function(){

console.log(
"Kai Teng Portfolio Loaded"
);



const buttons =
document.querySelectorAll(
"button"
);



buttons.forEach(
function(button){


button.addEventListener(
"click",
function(){


console.log(
"Button clicked"
);


});


}

);


});