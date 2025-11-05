// ===== Theme Toggle =====
function toggleTheme() {
    document.body.classList.toggle('dark');
}

// ===== Navbar Sections =====
function showSection(sectionId, event) {
    const sections = document.querySelectorAll('.section');
    const buttons = document.querySelectorAll('.nav-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));

    event.target.classList.add('active');
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}

// ===== Profile Change =====
const profiles = [
    'profile1.jpg',
    'profile2.jpg',
    'profile3.jpg'
];
let currentProfile = 0;

function changeProfile() {
    currentProfile = (currentProfile + 1) % profiles.length;
    document.getElementById('profileImg').src = profiles[currentProfile];
}
