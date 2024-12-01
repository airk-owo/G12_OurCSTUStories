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
});

document.querySelectorAll('.snowflake').forEach(snowflake => {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 75%)`;
    snowflake.style.color = randomColor;
});


let guestbookEntries = [];

document.getElementById('summit').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    if (name && comment) {
        guestbookEntries.push({name: name, comment: comment});
        alert("Form submitted successfully!");
        document.getElementById('Form').reset();
    } else {
        alert('Please fill out both fields.');
    }
});
document.getElementById('info').addEventListener('click', function() {
    const entriesContainer = document.getElementById('entries');
    entriesContainer.style.display = 'block'; 
});

document.getElementById('info').addEventListener('click', function() {
    
    const entriesContainer = document.getElementById('entries');
    entriesContainer.innerHTML = '';
    guestbookEntries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.innerHTML = `<strong>${entry.name}</strong>: ${entry.comment}`;
        entriesContainer.appendChild(entryDiv);
    });
    document.getElementById('guestbookDisplay').style.display = 'block';
});
document.getElementById('gift').addEventListener('click', function() {
    const entriesContainer = document.getElementById('entries');
    entriesContainer.style.display = 'none';
});

