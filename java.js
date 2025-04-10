document.addEventListener('DOMContentloaded', function(){
cons RegistrationForm =
document.getElemntById('studentRegistrationForm');
const PasswordInput=
document.getElemtById('password');

function validation
function validationPassword(){
if (passwordInput.value ! == conformPassword
RegistrationForm.addEventListener('Register',function(e){
e.preventDefault();

if(!validatyepassword()){
return;
}

cons StudentIdInput=
document.getElementById('StudentId');
StudentIdInput.addEventListener('input',function(e)){
cons Idpattern=a(5);
if (!idpattern.test(studentIdInput.value)) {
studentIdInput.setCustomValid('requested number must start from 5 digits');
}else{
student
