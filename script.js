const anoAtual = document.getElementById("ano-atual");

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}

// Configure aqui o telefone real da barbearia.
// Formato: codigo do pais + DDD + telefone, somente numeros.
const telefoneWhatsApp = "5521999999999";

const botaoWhatsApp = document.getElementById("botao-whatsapp");

if (botaoWhatsApp) {
  botaoWhatsApp.addEventListener("click", function (evento) {
    evento.preventDefault();

    if (telefoneWhatsApp === "5521999999999") {
      alert("O WhatsApp da barbearia ainda precisa ser configurado.");
      return;
    }

    const mensagem = encodeURIComponent(
      "Ola! Acessei o site da Barbearia Premium e gostaria de agendar um horario. Quais servicos e horarios estao disponiveis?",
    );

    const enderecoWhatsApp =
      "https://wa.me/" + telefoneWhatsApp + "?text=" + mensagem;

    window.open(enderecoWhatsApp, "_blank");
  });
}
