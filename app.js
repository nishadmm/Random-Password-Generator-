const input = document.querySelector('input');
const button = document.querySelector('button');

// Button evnet listner
button.addEventListener('click', function () {
  input.value = generatePassword(10);
});

// Generate password
function generatePassword(length = 16) {

  // Password Characters
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890#@$";

  let password = '';

  for (let i = 0; i < length; i++) {

    // Password letters position
    const position = Math.floor(Math.random() * (characters.length + 1));

    password += characters.charAt(position);
  }

  return password;
}