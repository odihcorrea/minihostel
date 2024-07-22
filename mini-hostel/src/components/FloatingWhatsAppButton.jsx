import React from 'react';
import './FloatingWhatsAppButton.css';

function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/5598985540632"
      className="floating-whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="../img/whatsapp.webp" alt="WhatsApp" />
    </a>
  );
}

export default FloatingWhatsAppButton;
