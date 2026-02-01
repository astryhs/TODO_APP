import {
  initDragAndDrop,
  initDeleteCompleted,
  initAddTodo,
  initChangeStatus,
  updateTask,
  initDownload,
  downloadButton,
  initDelete,
  renderData,
} from "./components/index.js";

import { getTodos } from "./API/index.js";

import { showError, hideLoader, showLoader } from "./utils/helpers.js";

export const container = document.getElementById("posts-container");

export async function loadData() {
  try {
    showLoader();
    const todos = await getTodos();
    renderData(todos, container);
  } catch (error) {
    console.error(error.message);
    if (error.message === "Задач нет") {
      showError("Задач нет");
    } else {
      showError("Не удалось получить данные");
    }
  } finally {
    hideLoader();
  }
}

initAddTodo();
initDownload();
initDeleteCompleted(container);
