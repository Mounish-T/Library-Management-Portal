// Activate the color in side-nav for current page 
const navLinks = document.querySelectorAll('.side-nav .activities a');
navLinks[2].classList.add('active');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // prevent default navigation for demo
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        window.location.href = link.getAttribute('href');
    });
});
