const navLinks = document.querySelectorAll('.side-nav .activities a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // prevent default navigation for demo
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});
