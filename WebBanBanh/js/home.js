document.addEventListener('DOMContentLoaded', function () {
    const userInfo = document.getElementById('userInfo');
    const currentUser = localStorage.getItem('currentUser');
    const toggleThemeButton = document.getElementById('toggleTheme');
    const currentTheme = localStorage.getItem('theme');

    if (currentUser) {
        userInfo.textContent = `Xin chào, ${currentUser}!`;
    } else {
        userInfo.textContent = 'Chào mừng, Khách!';
    }

    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleThemeButton.textContent = 'Chế độ sáng';
    }

    toggleThemeButton.addEventListener('click', toggleTheme);

    // Data for the chart
    const data = [5, 4.9, 4.5, 4.5, 4.4];
    const labels = ['Sumi cake', 'Yami Yami', 'Story cake', 'Berri mum', 'Ngon ngon story'];

    // Create the chart
    const chartContainer = document.getElementById('barChart');
    chartContainer.innerHTML = '';

    data.forEach((value, index) => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value * 50}px`;

        const barValue = document.createElement('span');
        barValue.textContent = value;
        bar.appendChild(barValue);

        chartContainer.appendChild(bar);
    });

    const labelsContainer = document.getElementById('labels');
    labelsContainer.innerHTML = '';

    labels.forEach(label => {
        const labelDiv = document.createElement('div');
        labelDiv.classList.add('label');
        labelDiv.textContent = label;
        labelsContainer.appendChild(labelDiv);
    });

    // Slide show
    let slideIndex = 0;
    let slides = document.getElementsByClassName("slide");
    showSlides();

    function showSlides() {
        let currentSlide = slides[slideIndex];
        let nextSlide = slides[(slideIndex + 1) % slides.length];

        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active', 'incoming', 'next');
            slides[i].style.opacity = 0;
        }

        currentSlide.classList.add('active');
        nextSlide.classList.add('incoming');

        currentSlide.style.opacity = 1;
        nextSlide.style.opacity = 1;

        slideIndex = (slideIndex + 1) % slides.length;
        setTimeout(showSlides, 3000);
    }
});

function toggleTheme() {
    const body = document.body;
    const toggleThemeButton = document.getElementById('toggleTheme');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = 'Chế độ sáng';
        localStorage.setItem('theme', 'dark');
    } else {
        toggleThemeButton.textContent = 'Chế độ tối';
        localStorage.setItem('theme', 'light');
    }
}

function logout() {
    localStorage.removeItem('currentUser');
    alert('Bạn đã đăng xuất thành công!');
    window.location.href = './trangChu.html';
}
