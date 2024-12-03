//ฟอร์ม
document.getElementById('gift').addEventListener('click', function () {
    const formContainer = document.getElementById('formContainer');
    const box = document.getElementById('box');

   
    if (formContainer.classList.contains('hidden')) {
      formContainer.classList.remove('hidden'); 
      box.classList.add('hidden');             
    } else {
      formContainer.classList.add('hidden');   
    }
  });
//กล่อง
  document.getElementById('members').addEventListener('click', function () {
    const formContainer = document.getElementById('formContainer');
    const box = document.getElementById('box');
    if (box.classList.contains('hidden')) {
      box.classList.remove('hidden');         
      formContainer.classList.add('hidden');   
    } else {
      box.classList.add('hidden');             
    }
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
document.getElementById('info').addEventListener('click', function () {
    const entriesContainer = document.getElementById('entries');
    const button = document.getElementById('info');

    if (entriesContainer.style.display === 'block') {
        entriesContainer.style.display = 'none';
        button.textContent = ''; 
    } else {
        entriesContainer.style.display = 'block';
        button.textContent = ''; 
    }
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
    const snowflakes = document.getElementById('snowflakes')
    let isPlaying = false;

    //สลับสถานะการเล่น
    toggleButton.addEventListener('click', () => {
      if (isPlaying) {
        bgm.pause();
        toggleButton.classList.remove('pauseButton');
        toggleButton.classList.add('playButton');
        snowflakes.classList.add('snowflakes');
      } else {
        bgm.play().catch(error => {
          console.warn('Cannot play audio:', error);
        });
        toggleButton.classList.remove('playButton');
        toggleButton.classList.add('pauseButton');
        snowflakes.classList.remove('snowflakes');
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