function register() {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (email && username && password) {
        let users = JSON.parse(localStorage.getItem('users')) || [];

        const userExists = users.some(user => user.username === username);

        if (userExists) {
            alert('Tên người dùng đã tồn tại. Vui lòng chọn tên khác.');
        } else {
            const newUser = {
                email: email,
                username: username,
                password: password
            };
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            alert('Đăng kí thành công.');
            window.location.href = './trangChu.html';
        }
    } else {
        alert('Hãy điền đủ thông tin.');
    }
}
