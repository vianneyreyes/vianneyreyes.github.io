const resultDiv = document.getElementById('result');

const addSignature = () => {

  console.log('I am working');
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  console.log('Your name is' + name);
  console.log(email);

  const result = document.createElement('p');
  result.innerHTML = 'thank you,' +  name + ' for your support!';
  console.log(result);
  resultDiv.appendChild(result);
  form.reset()
}

const validateForm = () => {
  event.preventDefault();
  let containsErrors = false;

  let petitionInputs = document.getElementById("myForm").elements;

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }
  if (containsErrors == false) {
    addSignature();
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }
}
const toggleDarkMode = () => {
  console.log("hello");
  document.body.classList.toggle("dark-mode");
}
const button = document.getElementById("theme-button");
button.addEventListener('click', (toggleDarkMode))
const form = document.getElementById('myForm');
form.addEventListener('submit', validateForm);