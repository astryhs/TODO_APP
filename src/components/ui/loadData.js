import { getTodos } from "../../API/index.js";
import { showError, hideLoader, showLoader } from "../../utils/helpers.js";
import { renderData } from "../index.js";

export async function loadData() {
  try {
    showLoader();
    const todos = await getTodos();
    renderData(todos);
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
