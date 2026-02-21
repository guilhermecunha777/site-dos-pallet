export function createWhatsappButton() {
  const btn = document.createElement('a');
  btn.href =
    'https://wa.me/551159345927?text=Olá,%20quero%20orçamento%20de%20pallets';
  btn.className = 'whatsapp-float';
  btn.setAttribute('aria-label', 'Falar no WhatsApp');
  btn.innerHTML = '💬';

  document.body.appendChild(btn);
}
