function handleLogin() {
    const correctUsername = "huanrose@gmail.com";
    const correctPassword = "123456";

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === correctUsername && password === correctPassword) {
      console.log("Đăng nhập thành công");
    } else {
      console.log("Tên đăng nhập hoặc mật khẩu sai");
    }
  }