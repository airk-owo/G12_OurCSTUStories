//ฟอร์ม
document.getElementById('gift').addEventListener('click', function() {
    const formContainer = document.getElementById('formContainer');
    formContainer.classList.toggle('hidden');
});
document.getElementById('members').addEventListener('click', function() {
    const box = document.getElementById('box');
    box.classList.toggle('hidden');
});
//snowfall
document.querySelectorAll('.snowflake').forEach(snowflake => {
    const randomColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 75%)`;
    snowflake.style.color = randomColor;
});

let guestbookEntries = [];

//รับคอมเมต์
document.getElementById('summit').addEventListener('click', function(event) {
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
//แสดงกล่องentries
document.getElementById('info').addEventListener('click', function() {
    const entriesContainer = document.getElementById('entries');
    entriesContainer.style.display = 'block'; 
});
//แสดงข้อความ
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
//ซ่อนentries
document.getElementById('gift').addEventListener('click', function() {
    const entriesContainer = document.getElementById('entries');
    entriesContainer.style.display = 'none';
});

