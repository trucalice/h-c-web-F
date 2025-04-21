// Đăng ký
function register() {
    const username = document.getElementById("register-username").value.trim();
    const password = document.getElementById("register-password").value;
  
    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ thông tin.");
      return;
    }
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    if (users.some(u => u.username === username)) {
      alert("Tên đăng nhập đã tồn tại!");
      return;
    }
  
    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));
  
    alert("Đăng ký thành công!");
    window.location.href = "index.html";
  }
  
  // Đăng nhập
  function login() {
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;
    const remember = document.getElementById("rememberMe").checked;
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.username === username && u.password === password);
  
    if (!user) {
      alert("Sai tên đăng nhập hoặc mật khẩu!");
      return;
    }
  
    if (remember) {
      localStorage.setItem("loggedInUser", username);
    } else {
      sessionStorage.setItem("loggedInUser", username);
    }
  
    window.location.href = "home.html";
  }
  
  // Hiển thị chào mừng
  function showWelcome() {
    const username = localStorage.getItem("loggedInUser") || sessionStorage.getItem("loggedInUser");
  
    if (!username) {
      window.location.href = "index.html";
      return;
    }
  
    document.getElementById("welcome-msg").innerText = `Xin chào, ${username}! 👋`;
  }
  
  // Đăng xuất
  function logout() {
    localStorage.removeItem("loggedInUser");
    sessionStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
  }
  