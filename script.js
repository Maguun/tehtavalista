"use strict";

const STORAGE_KEY = "tehtavalista.tasks.v1";
const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const taskCount = document.querySelector("#task-count");
const emptyMessage = document.querySelector("#empty-message");
const errorMessage = document.querySelector("#error-message");

function loadTasks() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    if (!Array.isArray(stored)) return [];
    return stored.filter(task =>
      task && typeof task.id === "string" &&
      typeof task.text === "string" &&
      typeof task.completed === "boolean"
    );
  } catch (error) {
    console.warn("Tehtävien lukeminen epäonnistui.", error);
    return [];
  }
}

let tasks = loadTasks();

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.hidden = !message;
}

function saveTasks() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    showError("");
  } catch (error) {
    console.warn("Tehtävien tallennus epäonnistui.", error);
    showError("Tallennus ei onnistunut. Tehtävät eivät ehkä säily sivun päivityksen jälkeen.");
  }
}

function renderTasks() {
  taskList.replaceChildren();
  emptyMessage.hidden = tasks.length > 0;
  const unfinished = tasks.filter(task => !task.completed).length;
  taskCount.textContent = `${tasks.length} tehtävää · ${unfinished} kesken`;

  tasks.forEach(task => {
    const item = document.createElement("li");
    item.className = `task${task.completed ? " completed" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.setAttribute("aria-label", `Merkitse tehtävä ${task.text} valmiiksi`);
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      saveTasks();
      renderTasks();
    });

    const text = document.createElement("span");
    text.className = "task-text";
    text.textContent = task.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.type = "button";
    deleteButton.textContent = "Poista";
    deleteButton.setAttribute("aria-label", `Poista tehtävä ${task.text}`);
    deleteButton.addEventListener("click", () => {
      tasks = tasks.filter(other => other.id !== task.id);
      saveTasks();
      renderTasks();
    });

    item.append(checkbox, text, deleteButton);
    taskList.append(item);
  });
}

form.addEventListener("submit", event => {
  event.preventDefault();
  const text = taskInput.value.trim();
  if (!text) {
    showError("Kirjoita tehtävän nimi ennen lisäämistä.");
    taskInput.focus();
    return;
  }
  const id = (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function")
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random()}`;
  tasks.push({ id, text, completed: false });
  saveTasks();
  renderTasks();
  taskInput.value = "";
  taskInput.focus();
});

renderTasks();
