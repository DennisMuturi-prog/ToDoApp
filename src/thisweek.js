import differenceInCalendarDays from "date-fns/differenceInCalendarDays";
import { renderToday,mainContentDiv } from "./today";

export function createThisWeek() {
    const projects = JSON.parse(localStorage.getItem('projects'));
    const date = new Date();
    const today = date.toISOString().slice(0, 10);
    const thisWeekItems = [];

    projects.forEach((project, projectIndex) => {
        project.todoItems.forEach((todo, todoIndex) => {
            const dueDate = new Date(todo.dueDate);
            const daysDifference = differenceInCalendarDays(dueDate,date);

            if (daysDifference <= 7 && daysDifference >= 0) {
                todo.projectIndex = projectIndex;
                todo.todoIndex = todoIndex;
                thisWeekItems.push(todo);
            }
        });
    });
    console.log(thisWeekItems);

    if (thisWeekItems.length === 0) {
        mainContentDiv.textContent = "No tasks for today";
    } else {
        mainContentDiv.appendChild(renderToday(thisWeekItems));
    }
}