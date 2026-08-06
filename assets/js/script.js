document.addEventListener(
"DOMContentLoaded",
function(){

console.log(
"Turkey Kai Portfolio Loaded"
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