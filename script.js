document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    const isOpen = content.classList.contains('open');

    button.classList.toggle('active', !isOpen);
    button.setAttribute('aria-expanded', String(!isOpen));
    content.classList.toggle('open', !isOpen);
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
