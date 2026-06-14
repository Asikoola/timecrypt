function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  m.classList.toggle('open');
}
 
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
}
 
function handleSubmit() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  if (!name || !email) {
    alert('Please fill in your name and email to continue.');
    return;
  }
  alert('Thank you, ' + name + '! We\'ll reach out to ' + email + ' within 24 hours. Welcome to Time Crypto!');
}
 
