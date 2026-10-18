const anoAtual = document.getElementById("ano-atual");

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}

const botaoWhatsApp = document.getElementById("botao-whatsapp");

// Substitua pelo numero real da barbearia.
// Use codigo do pais + DDD + numero, somente digitos.
const telefoneWhatsApp = "5521999999999";

if (botaoWhatsApp) {
  botaoWhatsApp.onclick = function (evento) {
    evento.preventDefault();

    if (telefoneWhatsApp === "5521999999999") {
      alert("O WhatsApp da barbearia ainda precisa ser configurado.");
      return;
    }

    const mensagem = encodeURIComponent(
      "Ola! Encontrei o site da Barbearia Premium e gostaria de consultar os horarios disponiveis para agendar um servico.",
    );

    const enderecoWhatsApp =
      "https://wa.me/" + telefoneWhatsApp + "?text=" + mensagem;

    window.open(enderecoWhatsApp, "_blank");
  };
}
