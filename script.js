//ฟอร์ม
document.getElementById('gift').addEventListener('click', function() {
    const formContainer = document.getElementById('formContainer');
    formContainer.classList.toggle('hidden');
//members
});
document.getElementById('members').addEventListener('click', function() {
    const box = document.getElementById('box');
    box.classList.toggle('hidden');
});



let guestbookEntries = [];

//รับคอมเมต์
document.getElementById('summit').addEventListener('click', function(event) {
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const faculty = document.getElementById('faculty').value;

    if (name && comment && gender && faculty) {
        guestbookEntries.push({name: name, comment: comment,gender: gender.value,
            faculty: faculty,});
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
        entryDiv.innerHTML = `<strong>${entry.name}</strong>(${entry.gender}, ${entry.faculty}): ${entry.comment}`;
        entriesContainer.appendChild(entryDiv);
    });
    document.getElementById('guestbookDisplay').style.display = 'block';
});
//ซ่อนentries
document.getElementById('gift').addEventListener('click', function() {
    const entriesContainer = document.getElementById('entries');
    entriesContainer.style.display = 'none';
});

const bgm = document.getElementById('bgm');
    const toggleButton = document.getElementById('toggleButton');
    let isPlaying = false;

    //สลับสถานะการเล่น
    toggleButton.addEventListener('click', () => {
      if (isPlaying) {
        bgm.pause();
        toggleButton.classList.remove('pauseButton');
        toggleButton.classList.add('playButton');
      } else {
        bgm.play().catch(error => {
          console.warn('Cannot play audio:', error);
        });
        toggleButton.classList.remove('playButton');
        toggleButton.classList.add('pauseButton');
      }
      isPlaying = !isPlaying;
    });

//snowflake ใน ourfuture
    const snowflake = [];
    const colors = ['#FFFFFF', '#E0FFFF', '#B0E0E6'];

    function createSnoeflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDirection = Math.random() * 3 + 2 + 's';
        snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
        snowflake.style.color = colors[Math.floor(Math.random() * colors.length)];
        document.body.appendChild(snowflake);
        snowflake.push(snowflake);

        setTimeout(() => {
            snowflake.remove();
            snowflakeS.shift();
        }, 5000);
    }

    setInterval(createSnoeflake, 200);