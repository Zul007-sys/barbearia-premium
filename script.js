// ========================================
// BARBEARIA PREMIUM
// Funcionalidades do site
// ========================================

// Atualiza automaticamente o ano do rodapé
const anoAtual = document.getElementById("ano-atual");

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}

// ========================================
// CONFIGURAÇÃO DO WHATSAPP
// ========================================

// Substitua pelo número autorizado da barbearia.
// Formato: código do país + DDD + número.
// Digite somente números, sem espaços ou símbolos.

const telefoneWhatsApp = "5521999999999";

// Seleciona o botão de agendamento
const botaoWhatsApp = document.getElementById("botao-whatsapp");

// Configura o botão
if (botaoWhatsApp) {
  botaoWhatsApp.addEventListener("click", function (evento) {
    evento.preventDefault();

    // Verifica se o telefone ainda é fictício
    if (telefoneWhatsApp === "5521999999999") {
      alert("O WhatsApp da barbearia ainda precisa ser configurado.");

      return;
    }

    // Mensagem que será preenchida automaticamente
    const mensagem =
      "Olá! Acessei o site da Barbearia Premium e gostaria de agendar um horário. Quais serviços e horários estão disponíveis?";

    // Prepara a mensagem para a URL
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Monta o endereço do WhatsApp
    const enderecoWhatsApp =
      "https://wa.me/" + telefoneWhatsApp + "?text=" + mensagemCodificada;

    // Abre o WhatsApp em uma nova aba
    window.open(enderecoWhatsApp, "_blank");
  });
}
