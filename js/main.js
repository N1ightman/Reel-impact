// ändrar bakgrundsfärgen på navbaren när man scrollar ner
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  
  if (window.scrollY > 50) {
    // om användaren scrollar mer än 50px blir navbaren svart
    nav.style.backgroundColor = '#000000';
  } else {
    // annars återgår den till ursprungsfärgen
    nav.style.backgroundColor = '#1a1a1a';
  }
});

// Kontaktformulär - kollar om alla färt är ifyllda innan man skickar, 

function skickaFormular() {
  const namn = document.getElementById('namn').value;
  const epost = document.getElementById('epost').value;
  const meddelande = document.getElementById('meddelande').value;
// om något fält är tomt visas ett felmeddelande
  if (namn === '' || epost === '' || meddelande === '') {
    alert('Fyll i alla fält!');
  } else {
    // om allt är ifyllt visas ett bekräftelsemeddelande
    alert('Tack ' + namn + '! Vi hör snart av oss.');
  }
}
