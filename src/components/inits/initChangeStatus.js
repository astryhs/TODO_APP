import { showError } from "../../utils/helpers.js";
import { loadData } from "../index.js";
import { toggleTodoStatus } from "../../API/index.js";

export function initChangeStatus(todo, checkbox) {
  checkbox.addEventListener("change", async () => {
    try {
      await toggleTodoStatus(todo.id, checkbox.checked);
      await loadData();
    } catch (error) {
      console.error(error.message);
      showError("Не удалось изменить статус задачи");
    } finally {
    }
  });
}
