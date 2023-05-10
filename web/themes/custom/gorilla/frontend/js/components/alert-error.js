const d = document;

d.addEventListener('click', e =>{
  if (!e.target.matches('.alert-error')&&$(".alert-error").is(":visible")) {
    d.querySelector('.alert-error').classList.add('hidden');
  }
});
