
import React, { useState, useEffect } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("none");
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  // Load tasks from localStorage
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
      console.log("Loaded tasks from localStorage:", JSON.parse(storedTasks)); // Debug log
    }
  }, []);

  // Save tasks to localStorage 
  useEffect(() => {
    console.log("Saving tasks to localStorage:", tasks); // Debug log
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Update current time 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const addTask = () => {
    if (taskInput.trim()) {
      if (editId !== null) {
        setTasks(
          tasks.map((task) =>
            task.id === editId ? { ...task, text: taskInput } : task
          )
        );
        setEditId(null);
      } else {
        setTasks([
          ...tasks,
          { id: Date.now(), text: taskInput, completed: false },
        ]);
      }
      setTaskInput("");
    } else {
      console.log("Task input is empty"); // Debug log for empty input
    }
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setTaskInput(taskToEdit.text);
    setEditId(id);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const resetTasks = () => {
    setTasks([]);
    localStorage.removeItem("tasks");
    console.log("Tasks reset and localStorage cleared"); // Debug log for reset
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sort === "asc") return a.text.localeCompare(b.text);
    if (sort === "desc") return b.text.localeCompare(a.text);
    return 0;
  });

  return (
    <div className="todo-list">
      <div className="header">
        <h1>To-Do List</h1>
        <div className="date-time">{currentTime}</div>
      </div>
      <input
        type="text"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        placeholder="Enter a task"
        className="task-input"
      />
      <button onClick={addTask} className="add-task-btn">
        {editId ? "Update Task" : "Add Task"}
      </button>
      <div className="filters">
        <button onClick={() => setFilter("all")} className="filter-btn">
          Show All Tasks
        </button>
        <button onClick={() => setFilter("completed")} className="filter-btn">
          Completed Tasks
        </button>
        <button onClick={() => setFilter("incomplete")} className="filter-btn">
          Incomplete Tasks
        </button>
      </div>
      <div className="sorting">
        <button onClick={() => setSort("none")} className="sort-btn">
          Unsorted
        </button>
        <button onClick={() => setSort("asc")} className="sort-btn">
          Sort asec.
        </button>
        <button onClick={() => setSort("desc")} className="sort-btn">
          Sort desc.
        </button>
      </div>
      <button onClick={resetTasks} className="reset-btn">
        Reset for New Day
      </button>
      <ul className="task-list">
        {sortedTasks.map((task) => (
          <li key={task.id} className="task-item">
            <span
              className={`task-text ${task.completed ? "task-completed" : ""}`}
            >
              {task.text}
            </span>
            <div className="task-buttons">
              <button
                onClick={() => toggleTaskCompletion(task.id)}
                className="complete-btn"
              >
                {task.completed ? "Undo" : "Complete"}
              </button>
              {!task.completed && (
                <button onClick={() => editTask(task.id)} className="edit-btn">
                  Edit
                </button>
              )}
              <button
                onClick={() => removeTask(task.id)}
                className="remove-btn"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
