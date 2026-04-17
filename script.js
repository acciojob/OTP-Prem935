//your JS code here. If required.
const otp_length = 6;
const codeContainer = document.querySelector('.code-container');

function createOtpInputs(count) {
  for (let i=0;i<count;i++) {
    const input = document.createElement('input');
	input.id = `code-${i+1}`;
    input.className = 'code';
    input.type = 'text';
    input.inputMode = 'numeric';
    input.maxLength = 1;
    input.pattern = '[0-9]*';
    input.addEventListener('input', handleInput);
    input.addEventListener('keydown', handleKeyDown);
    codeContainer.appendChild(input);
  }
}

function handleInput(e) {
  const input = e.target;
  const value = input.value.replace(/[^0-9]/g, '');
  input.value = value;

  if (value && input.nextElementSibling) {
    input.nextElementSibling.focus();
  }
}

function handleKeyDown(e) {
  const input = e.target;

  if (e.key === 'Backspace') {
    e.preventDefault();
    if (input.value) {
      input.value = '';
      return;
    }

    const previous = input.previousElementSibling;
    if (previous) {
      previous.value = '';
      previous.focus();
    }
  }
}

createOtpInputs(otp_length);
const firstInput = codeContainer.querySelector('input');
if (firstInput) {
  firstInput.focus();
}