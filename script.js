document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();  
  alert('Login successful');
  document.getElementById('loginForm').reset();  
});
