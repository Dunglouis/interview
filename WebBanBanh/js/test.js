
// login
// function login() {
//     const username = document.querySelector('.input-box input[type="text"]').value;
//     const password = document.querySelector('.input-box input[type="password"]').value;
//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     const user = users.find(user => users.username === username && users.password === password);
//     if (user) {
//         localStorage.setItem('currentUser', username);
//         alert("Đăng nhập thành công.");
//         window.location.href = "./home.html";
//     } else {
//         alert("Tên đăng nhập hoặc mật khẩu không chính xác.");
//     }
// }

//register

const quiz = {
    title: 'de 1',
    questions: [
        { q: "cau 1: 2+2= ?", a: ["1", "2", "3", "4"], c: 3 },
        { q: "cau 2: 2+2= ?", a: ["1", "2", "3", "4"], c: 3 },
        { q: "cau 3: 2+2= ?", a: ["1", "2", "3", "4"], c: 3 },
        { q: "cau 4: 2+2= ?", a: ["1", "2", "3", "4"], c: 3 },
        { q: "cau 5: 2+2= ?", a: ["1", "2", "3", "4"], c: 3 },
        { q: "cau 6: 2+2= ?", a: ["1", "2", "3", "4"], c: 3 },
        { q: "cau 7: 2+2= ?", a: ["1", "2", "3", "4"], c: 3 },
        { q: "cau 8: 2+2= ?", a: ["1", "2", "3", "4"], c: 3 },
    ]
}

let timer;
let timeLeft = 3600;

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        document.getElementById("timer").textContent = `thoi gian con lai ${minutes}:${seconds}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            submitQuiz();
        }
    }, 1000);
}

function startQuiz() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    if (name && age) {
        document.getElementById("personal-info").style.display = 'none';
        document.getElementById('quiz').style.display = 'block';
        displayQuiz();
        startTimer();
    } else {
        alert("Vui lòng điền đầy đủ thông tin cá nhân.");
    }
}

function displayQuiz() {
    const questionsDiv = document.getElementById("questions");
    questionsDiv.innerHTML = quiz.questions.map((q, i) =>
        `
        <div>
            <p>${q.q}</p>
            ${q.a.map((a, j) => `<input type='radio' name="q${i}" value="${i}"><lable>${a}</lable><br>`).join("")}
        </div>
    `
    ).join("");
}

function submitQuiz() {
    clearInterval(timer);
    let score = 0;
    quiz.questions.forEach((q, i) => {
        const selectedAnswer = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.c) {
            score++;
        }
    });
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('score').textContent = `Điểm của bạn: ${score}/${quiz.questions.length}`;
}