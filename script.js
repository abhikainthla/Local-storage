const data = JSON.parse(localStorage.getItem("data"));

let Fname = document.getElementById("first-name");
let Lname = document.getElementById("last-name");
let countryName = document.getElementById("country");
let phno = document.getElementById("phone-number");
let st = document.getElementById("state");
let ct = document.getElementById("city");
let vll = document.getElementById("village");
if(data){
console.log("data is already present");
Fname.innerHTML = data.firstName;
Lname.innerHTML = data.lastName;
countryName.innerHTML = data.country;
phno.innerHTML = data.phoneNumber;
st.innerHTML = data.state;
ct.innerHTML = data.city;
vll.innerHTML = data.village;
}
else{
    updateData();
}

    function  updateData(){
var firstName = prompt("Please enter your First name");
var lastName = prompt("Please enter your Last name");
var country = prompt("Please enter your Country");
var phoneNumber = prompt("Please enter your Phone number");
var state = prompt("Please enter your State");
var city = prompt("Please enter your City");
var village = prompt("Please enter your Village");


// Define an object to store user information
const userInformation = {
  firstName: '',
  lastName: '',
  country: '',
  phoneNumber: '',
  state: '',
  city: '',
  village: '',
};


// Set user information using the object
userInformation.firstName = firstName;
userInformation.lastName = lastName;
userInformation.country = country;
userInformation.phoneNumber = phoneNumber;
userInformation.state = state;
userInformation.city = city;
userInformation.village = village;


localStorage.setItem("data", JSON.stringify(userInformation));
// Use the object to set and display information
Fname.innerHTML = userInformation.firstName;
Lname.innerHTML = userInformation.lastName;
countryName.innerHTML = userInformation.country;
phno.innerHTML = userInformation.phoneNumber;
st.innerHTML = userInformation.state;
ct.innerHTML = userInformation.city;
vll.innerHTML = userInformation.village;
    }

document.getElementById("reset").addEventListener('click',() => {
  localStorage.clear(data);
  Fname.innerHTML = '';
Lname.innerHTML = '';
countryName.innerHTML = '';
phno.innerHTML = '';
st.innerHTML = '';
ct.innerHTML = '';
vll.innerHTML = '';
updateData();
})
