import { createWhatsappButton } from './components/whatsapp.js';
import { smoothScroll } from './scroll.js';

document.addEventListener('DOMContentLoaded', () => {
  createWhatsappButton();
  smoothScroll();
});