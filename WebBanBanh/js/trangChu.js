function login() {
    const username = document.querySelector('.input-box input[type="text"]').value;
    const password = document.querySelector('.input-box input[type="password"]').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        localStorage.setItem('currentUser', username);
        alert('Đăng nhập thành công.');
        window.location.href = './home.html';  // Điều hướng đến trang chủ
    } else {
        alert('Tên đăng nhập hoặc mật khẩu không chính xác.');
    }
}
