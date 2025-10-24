// Activate the color in side-nav for current page 
const navLinks = document.querySelectorAll('.side-nav .activities a');
navLinks[0].classList.add('active');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // prevent default navigation for demo
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        window.location.href = link.getAttribute('href');
    });
});

// Generate the charts

// Bar-Chart
const days = ['Ṃon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const borrowedBooks = [40, 55, 30, 175, 60, 45, 90];

const maxValue = Math.max(...borrowedBooks);
const maxIndex = borrowedBooks.indexOf(maxValue);

const lightBlue = '#9cdaf7ff';
const darkBlue = '#3B9BD9';
const colors = borrowedBooks.map((_, i) => (i === maxIndex ? darkBlue : lightBlue));

const total = borrowedBooks.reduce((a, b) => a + b, 0);

const ctx = document.getElementById('barChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: days,
        datasets: [{
            data: borrowedBooks,
            backgroundColor: colors,
            borderRadius: 12,
            barPercentage: 1,   
            categoryPercentage: 0.7
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false }, // hide legend
            title: { display: false },
            tooltip: {
                backgroundColor: '#ffffff',
                titleColor: '#000',
                bodyColor: '#000',
                borderColor: '#3B9BD9',
                borderWidth: 1,
                callbacks: {
                    label: function(context) {
                        const value = context.raw;
                        const percentage = ((value / total) * 100).toFixed(1);
                        return ` ${percentage}% (${value} books)`;
                    },
                    title: function(context) {
                        return context[0].label;
                    }
                }
            }
        },
        scales: {
            x: {
                // display: false,
                grid: { display: false }
            },
            y: {
                display: false,
                grid: { display: false },
                beginAtZero: true
            }
        },
        layout: {
            padding: 1,
        },
        animation: {
            duration: 1200,
            easing: 'easeOutBounce'
        }
    }
});


// Pie-Chart

const categories = ['Fiction', 'Sci-Fi', 'Mystery'];
const values = [45, 30, 25]; // Example percentages
const piecolors = ['#4285F4', '#34A853', '#F4B400']; // Blue, green, yellow

const piectx = document.getElementById('pieChart').getContext('2d');

new Chart(piectx, {
    type: 'doughnut',
    data: {
        labels: categories,
        datasets: [{
            data: values,
            backgroundColor: piecolors,
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        cutout: '70%',
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
                align: 'center',
                labels: {
                    boxWidth: 20,
                    padding: 10,
                    font: {
                        size: 14
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.raw}%`;
                    }
                }
            }
        }
    }
});