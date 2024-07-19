const quiz = {
    title: 'Đề 1',
    questions: [
        { q: 'Câu 1: 2 + 2 = ?', a: ['3', '4', '5', '6'], c: 1 },
        { q: 'Câu 2: Thủ đô của Việt Nam là ?', a: ['Hà Nội', 'Hồ Chí Minh', 'Đà Nẵng', 'Huế'], c: 0 },
        { q: 'Câu 3: 5 + 5 = ?', a: ['9', '10', '11', '12'], c: 1 },
        { q: 'Câu 4: Việt Nam thuộc châu nào?', a: ['Châu Á', 'Châu Âu', 'Châu Phi', 'Châu Mỹ'], c: 0 },
        { q: 'Câu 5: 3 x 3 = ?', a: ['6', '7', '8', '9'], c: 3 },
        { q: 'Câu 6: Biển Đông nằm ở phía nào của Việt Nam?', a: ['Bắc', 'Nam', 'Đông', 'Tây'], c: 2 },
        { q: 'Câu 7: Hà Nội có bao nhiêu quận?', a: ['10', '12', '17', '20'], c: 2 },
        { q: 'Câu 8: Sông nào dài nhất Việt Nam?', a: ['Sông Hồng', 'Sông Đà', 'Sông Đồng Nai', 'Sông Mekong'], c: 3 },
        { q: 'Câu 9: Thủ tướng đầu tiên của Việt Nam là ai?', a: ['Hồ Chí Minh', 'Phạm Văn Đồng', 'Võ Nguyên Giáp', 'Nguyễn Tấn Dũng'], c: 1 },
        { q: 'Câu 10: Quốc hoa của Việt Nam là gì?', a: ['Hoa Sen', 'Hoa Mai', 'Hoa Đào', 'Hoa Hồng'], c: 0 }
    ]
};

let timer;
let timeLeft = 3600;

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById('timer').textContent = `Thời gian còn lại: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);
}

function startQuiz() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    if (name && age) {
        document.getElementById('personal-info').style.display = 'none';
        document.getElementById('quiz').style.display = 'block';
        displayQuiz();
        startTimer();
    } else {
        alert('Vui lòng điền đầy đủ thông tin cá nhân.');
    }
}

function displayQuiz() {
    const questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = quiz.questions.map((q, i) =>
        `<div>
            <p>${q.q}</p>
            ${q.a.map((a, j) => `<input type="radio" name="q${i}" value="${j}"><label>${a}</label><br>`).join('')}
        </div>`
    ).join('');
}

function submitQuiz() {
    clearInterval(timer);
    const answers = document.querySelectorAll('#quizForm input[type="radio"]:checked');
    let score = 0;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    answers.forEach((a, i) => {
        const isCorrect = parseInt(a.value) === quiz.questions[i].c;
        score += isCorrect ? 1 : 0;
        answersDiv.innerHTML += `<p>Câu ${i + 1}: ${isCorrect ? 'Đúng' : 'Sai'} - Đáp án đúng: ${quiz.questions[i].a[quiz.questions[i].c]}</p>`;
    });
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('score').textContent = `Điểm của bạn: ${score}/${quiz.questions.length}`;
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('timer').textContent = `Thời gian còn lại: 60:00`;
});
