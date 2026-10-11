const themeButton = document.getElementById('theme-toggle');

themeButton.addEventListener('click', function () {
  const html = document.documentElement;

  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light';
    themeButton.textContent = '🌙 Dark';
  } else {
    html.dataset.theme = 'dark';
    themeButton.textContent = '☀️ Light';
  }
});

const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  document.getElementById('name-error').textContent = '';
  document.getElementById('email-error').textContent = '';
  document.getElementById('message-error').textContent = '';
  document.getElementById('form-status').textContent = '';

  let valid = true;

  if (name === '') {
    document.getElementById('name-error').textContent = 'Please enter your name.';
    valid = false;
  }

  if (email === '') {
    document.getElementById('email-error').textContent = 'Please enter your email.';
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('email-error').textContent = 'Please enter a valid email address.';
    valid = false;
  }

  if (message === '') {
    document.getElementById('message-error').textContent = 'Please enter your message.';
    valid = false;
  }

  if (valid) {
    document.getElementById('form-status').textContent =
      'Message submitted successfully! This is a demo form.';
    form.reset();
  }
});