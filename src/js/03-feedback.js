import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const savedValue =
  JSON.parse(localStorage.getItem('feedback-form-state')) || {};

function saveValue() {
  const currentValue = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(currentValue));
}
const throttledSaveValue = throttle(saveValue, 500);

emailInput.addEventListener('input', throttledSaveValue);
messageInput.addEventListener('input', throttledSaveValue);

emailInput.value = savedValue.email || '';
messageInput.value = savedValue.message || '';

function handleSubmit(event) {
  event.preventDefault();
  if (emailInput.value === '' || messageInput.value === '') {
    return alert('Заповни всі поля!!!');
  } else {
    const currentValue = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log(currentValue);
  }
  localStorage.removeItem('feedback-form-state');
  emailInput.value = '';
  messageInput.value = '';
}

form.addEventListener('submit', handleSubmit);
