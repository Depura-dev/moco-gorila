const $quiz_options = document.querySelectorAll('.form-type-radio');

$quiz_options.forEach(($quiz_option) => {
  $quiz_option.addEventListener('click', e => {
    const $radio = e.target.querySelector('.form-radio');
    if ($radio) $radio.checked = true;
  });
});
