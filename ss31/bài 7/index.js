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