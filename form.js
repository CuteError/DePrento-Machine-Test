const form = document.getElementById('form');

let fName = document.getElementById('name').value;
let date = document.getElementById('date').value;
let title = document.getElementById('title').value;
let message = document.getElementById('message').value;
let gender = document.querySelector('input[name="flexRadioDefault"]:checked').value;
let checkbox = [];
let checkboxes = document.getElementsByName('checkbox[]');




let submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();

    console.log(fName, date, title, message, gender, checkboxes);
})