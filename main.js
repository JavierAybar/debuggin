
// Form validation email //

const formElement = document.getElementById('form');
const emailImput = document.getElementById('email');
const paragraphAlert = document.querySelector('.alertMessage');

formElement.addEventListener('submit', (event) => {
  const pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  if (!pattern.test(emailImput.value)) {
    event.preventDefault();
    paragraphAlert.textContent = 'the email field has to be in lower case.';
  } else {
    paragraphAlert.textContent = '';
  }
});

// Local storage //

const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');

// Save form data in local storage //
const saveFormData = () => {
  const formObjects = {
    mnae: nameInput.value,
    email: emailImput.value,
    message: messageInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formObjects));
};

// Load form data to the inputs //
const loadFormData = () => {
  if (localStorage.getItem('formData')) {
    nameInput.value = JSON.parse(localStorage.getItem('formData')).name;
    emailImput.value = JSON.parse(localStorage.getItem('formData')).email;
    messageInput.value = JSON.parse(localStorage.getItem('formData')).message;
  }
};

formElement.addEventListener('input', () => {
  saveFormData();
});

loadFormData();