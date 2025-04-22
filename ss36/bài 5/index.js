document.addEventListener("DOMContentLoaded", function () {
    const taskNameInput = document.getElementById("taskName");
    const addButton = document.querySelector(".task-input button");
  
    const pendingTasks = document.getElementById("pendingTasks");
    const inProgressTasks = document.getElementById("inProgressTasks");
    const doneTasks = document.getElementById("doneTasks");
  
    // Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  
    function createTaskElement(task) {
      const taskDiv = document.createElement("div");
      taskDiv.className = "task";
  
      const taskContent = document.createElement("p");
      taskContent.textContent = task.name;
      taskDiv.appendChild(taskContent);
  
      // Add "Chuyển tiếp" button if not "done"
      if (task.status !== "done") {
        const nextButton = document.createElement("button");
        nextButton.textContent = "Chuyển tiếp";
        nextButton.addEventListener("click", function () {
          changeTaskStatus(task.id);
        });
        taskDiv.appendChild(nextButton);
      }
    
      return taskDiv;
    }
  
    function renderTasks() {
      pendingTasks.innerHTML = "";
      inProgressTasks.innerHTML = "";
      doneTasks.innerHTML = "";
  
      tasks.forEach((task) => {
        const taskElement = createTaskElement(task);
        if (task.status === "pending") {
          pendingTasks.appendChild(taskElement);
        } else if (task.status === "in-progress") {
          inProgressTasks.appendChild(taskElement);
        } else if (task.status === "done") {
          doneTasks.appendChild(taskElement);
        }
      });
    }
  
    function changeTaskStatus(taskId) {
      const task = tasks.find((t) => t.id === taskId);
      if (task.status === "pending") {
        task.status = "in-progress";
      } else if (task.status === "in-progress") {
        task.status = "done";
      }
      saveTasks();
      renderTasks();
    }
  
    addButton.addEventListener("click", function () {
      const name = taskNameInput.value.trim();
      if (name === "") return;
  
      const newTask = {
        id: Date.now(),
        name: name,
        status: "pending",
      };
  
      tasks.push(newTask);
      saveTasks();
      renderTasks();
      taskNameInput.value = "";
    });
  
    renderTasks();
  });
   