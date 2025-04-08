const employees = [
    { id: 1, task: "Hit the gym", completed: false },
    { id: 2, task: "Pay bills", completed: true },
    { id: 3, task: "Meet George", completed: false },
    { id: 4, task: "Buy eggs", completed: false },
    { id: 5, task: "Read a book", completed: false },
    { id: 6, task: "Organize office", completed: false }
  ];

  const ulEl = document.getElementById("myUL");

  function renderTasks() {
    let html = '';
    for (let i = 0; i < employees.length; i++) {
      html += `<li>${employees[i].task}</li>`;
    }
    ulEl.innerHTML = html;
  }

  renderTasks();

  document.querySelector(".addBtn").addEventListener("click", function () {
    let inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
      alert("Bạn phải nhập nội dung!");
    } else {
      let li = document.createElement("li");
      li.textContent = inputValue;


      document.getElementById("myUL").appendChild(li);
      document.getElementById("myInput").value = "";
    }
  });
