import { getDeletedItemsFromLocalStorage } from "./toDoGUI";
import { renderToday } from "./today";

const mainContentDiv = document.querySelector('.content');
export function createTrash(){
    mainContentDiv.appendChild(renderToday(getDeletedItemsFromLocalStorage()));

}