export default function formValidation () {
  const form = document.getElementById('form');

  function logSubmit(event) {
    alert(`Sucess`)
    event.preventDefault();
  }
  
  form.addEventListener('submit', logSubmit);
}

