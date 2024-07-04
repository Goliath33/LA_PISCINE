let inputs = document.querySelectorAll('input,select');
let

  form.addEventListener ('submit', (e) => {
    e.preventDefault();

    const errors = document.querySelectorAll('.error');
    if (errors.length > 0) {
      console.error('There are errors in the form');
    }
  });

document.querySelector('').addEventListener('change', updateForm);

function updateForm() {
  const selectedValue = document.querySelector('').value;

  inputs.forEach((input, index) => {
    if (selectedValue === 'fr' && [1, 2].includes(index)) {
      input.style.display = 'none';
    } else if (selectedValue !== 'fr' && input.style.display === 'none') {
      input.style.display = '';
    }
  });
}

inputs.forEach((input) => {
  const errorMessage = document.createElement('.errorInput*');
  errorMessage.textContent = 'Ce champ est obligatoire';
  input.parentNode.appendChild(errorMessage);
});

body.addEventListener('submit', (e) => {
  inputs.forEach((input) => {
    if (input.value === '') {
      e.preventDefault();
      input.parentNode.appendChild(errorMessage);
    }
  });
})

