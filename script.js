document.getElementById('gift').addEventListener('click', function() {
    const formContainer = document.getElementById('formContainer');
    formContainer.classList.toggle('hidden');
});
document.getElementById('Form').addEventListener('submit', function(event) {
    event.preventDefault();  // ป้องกันการส่งฟอร์ม

    const name = document.getElementById('engname').value;
    const comment = document.getElementById('comment').value;

    if (name === '' || comment === '') {
        document.getElementById('error-message').style.display = 'block'; // แสดงข้อความ error
    } else {
        document.getElementById('error-message').style.display = 'none'; // ซ่อนข้อความ error
        // ส่งข้อมูล (สามารถทำการส่งฟอร์มได้ที่นี่ หรือแสดงข้อความสำเร็จ)
        alert("Form submitted successfully!");
    }
    document.getElementById('Form').reset();
});


