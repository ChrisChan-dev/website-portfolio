const profiles = {
    light: 'Designer (1).png', 
    dark: 'Designer (2).png'  
};

window.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const profileImg = document.getElementById('profileImg');

    if (!body.classList.contains('dark')) {
        body.classList.add('dark');
    }
    profileImg.src = profiles.dark;
});

function toggleTheme() {
    const body = document.body;
    const profileImg = document.getElementById('profileImg');

    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        profileImg.src = profiles.dark;
    } else {
        profileImg.src = profiles.light;
    }
}

function showSection(sectionId, event) {
    const sections = document.querySelectorAll('.section');
    const buttons = document.querySelectorAll('.nav-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));

    event.target.classList.add('active');
    document.getElementById(sectionId).classList.add('active');
}
