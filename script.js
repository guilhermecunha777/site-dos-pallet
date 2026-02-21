document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

function createWhatsappButton() {
  const btn = document.createElement('a');
  btn.href = 'https://wa.me/5599999999999';
  btn.className = 'whatsapp-float';
  btn.innerText = '💬';
  document.body.appendChild(btn);
}
createWhatsappButton();