document.getElementById('gift').addEventListener('click', function() {
    const formContainer = document.getElementById('formContainer');
    formContainer.classList.toggle('hidden');
});
document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault();  

    const name = document.getElementById('engname').value;
    const comment = document.getElementById('comment').value;

    if (name === '' || comment === '') {
        document.getElementById('error-message').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'none'; 
    
        alert("Form submitted successfully!");
    }
    document.getElementById('Form').reset();
});


