/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Factory function to create todo items
function createTodoItem(title, description, dueDate, priority, notes, checklist) {
    return {
        title,
        description,
        dueDate,
        priority,
        notes,
        checklist,
        complete: false, // Added complete status property
        addItemToChecklist: function(item) {
            this.checklist.push(item);
        },
        removeItemFromChecklist: function(item) {
            const index = this.checklist.indexOf(item);
            if (index !== -1) {
                this.checklist.splice(index, 1);
            }
        }
    };
}

// Create a todo item using the factory function
const todoItem = createTodoItem(
    "Finish project",
    "Complete the final tasks for the project",
    "2022-12-31",
    "High",
    "Remember to test the code thoroughly",
    ["Task 1", "Task 2", "Task 3"]
);

console.log(todoItem);
// Factory function to create project objects
function createProject(name, todoItems) {
    return {
        name,
        todoItems,
        addTodo: function(todo) {
            this.todoItems.push(todo);
        },
        removeTodo: function(todo) {
            const index = this.todoItems.indexOf(todo);
            if (index !== -1) {
                this.todoItems.splice(index, 1);
            }
        }
    };
}

// Create a project object using the factory function
const project = createProject("My Project", []);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project);

// Add a todo item to the project
project.addTodo(todoItem);
todoItem.addItemToChecklist("Task 4");
todoItem.removeItemFromChecklist("Task 2");



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/toDoGUI.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");

const mainDiv = document.querySelector('.main');
const ProjectsDiv=document.createElement('div');
const h1Element = document.createElement('h1');
ProjectsDiv.appendChild(h1Element);
h1Element.textContent = _toDo__WEBPACK_IMPORTED_MODULE_0__["default"].name;
const todoList = document.createElement('ul');
ProjectsDiv.appendChild(todoList);
_toDo__WEBPACK_IMPORTED_MODULE_0__["default"].todoItems.forEach((item) => {
    const todoItem = document.createElement('li');
    const todoTitle = document.createElement('span');
    const todoDueDate = document.createElement('span');
    
    todoTitle.textContent = item.title;
    todoDueDate.textContent = ` - Due Date: ${item.dueDate}`;
    
    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoDueDate);
    todoList.appendChild(todoItem);
});
mainDiv.appendChild(ProjectsDiv);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU8sRUFBQztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMxREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ042QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw2Q0FBTztBQUMvQjtBQUNBO0FBQ0EsNkNBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGFBQWE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb2FwcC8uL3NyYy90b0RvLmpzIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvYXBwLy4vc3JjL3RvRG9HVUkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgdG9kbyBpdGVtc1xyXG5mdW5jdGlvbiBjcmVhdGVUb2RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY2hlY2tsaXN0KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uLFxyXG4gICAgICAgIGR1ZURhdGUsXHJcbiAgICAgICAgcHJpb3JpdHksXHJcbiAgICAgICAgbm90ZXMsXHJcbiAgICAgICAgY2hlY2tsaXN0LFxyXG4gICAgICAgIGNvbXBsZXRlOiBmYWxzZSwgLy8gQWRkZWQgY29tcGxldGUgc3RhdHVzIHByb3BlcnR5XHJcbiAgICAgICAgYWRkSXRlbVRvQ2hlY2tsaXN0OiBmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tsaXN0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZW1vdmVJdGVtRnJvbUNoZWNrbGlzdDogZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuY2hlY2tsaXN0LmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tsaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG4vLyBDcmVhdGUgYSB0b2RvIGl0ZW0gdXNpbmcgdGhlIGZhY3RvcnkgZnVuY3Rpb25cclxuY29uc3QgdG9kb0l0ZW0gPSBjcmVhdGVUb2RvSXRlbShcclxuICAgIFwiRmluaXNoIHByb2plY3RcIixcclxuICAgIFwiQ29tcGxldGUgdGhlIGZpbmFsIHRhc2tzIGZvciB0aGUgcHJvamVjdFwiLFxyXG4gICAgXCIyMDIyLTEyLTMxXCIsXHJcbiAgICBcIkhpZ2hcIixcclxuICAgIFwiUmVtZW1iZXIgdG8gdGVzdCB0aGUgY29kZSB0aG9yb3VnaGx5XCIsXHJcbiAgICBbXCJUYXNrIDFcIiwgXCJUYXNrIDJcIiwgXCJUYXNrIDNcIl1cclxuKTtcclxuXHJcbmNvbnNvbGUubG9nKHRvZG9JdGVtKTtcclxuLy8gRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgcHJvamVjdCBvYmplY3RzXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSwgdG9kb0l0ZW1zKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgdG9kb0l0ZW1zLFxyXG4gICAgICAgIGFkZFRvZG86IGZ1bmN0aW9uKHRvZG8pIHtcclxuICAgICAgICAgICAgdGhpcy50b2RvSXRlbXMucHVzaCh0b2RvKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJlbW92ZVRvZG86IGZ1bmN0aW9uKHRvZG8pIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnRvZG9JdGVtcy5pbmRleE9mKHRvZG8pO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZG9JdGVtcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8gQ3JlYXRlIGEgcHJvamVjdCBvYmplY3QgdXNpbmcgdGhlIGZhY3RvcnkgZnVuY3Rpb25cclxuY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QoXCJNeSBQcm9qZWN0XCIsIFtdKTtcclxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdDtcclxuXHJcbi8vIEFkZCBhIHRvZG8gaXRlbSB0byB0aGUgcHJvamVjdFxyXG5wcm9qZWN0LmFkZFRvZG8odG9kb0l0ZW0pO1xyXG50b2RvSXRlbS5hZGRJdGVtVG9DaGVja2xpc3QoXCJUYXNrIDRcIik7XHJcbnRvZG9JdGVtLnJlbW92ZUl0ZW1Gcm9tQ2hlY2tsaXN0KFwiVGFzayAyXCIpO1xyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcHJvamVjdCBmcm9tIFwiLi90b0RvXCI7XHJcbmNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xyXG5jb25zdCBQcm9qZWN0c0Rpdj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29uc3QgaDFFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuUHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoaDFFbGVtZW50KTtcclxuaDFFbGVtZW50LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xyXG5jb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblByb2plY3RzRGl2LmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcclxucHJvamVjdC50b2RvSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgdG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY29uc3QgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBcclxuICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XHJcbiAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGAgLSBEdWUgRGF0ZTogJHtpdGVtLmR1ZURhdGV9YDtcclxuICAgIFxyXG4gICAgdG9kb0l0ZW0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcclxuICAgIHRvZG9JdGVtLmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcclxuICAgIHRvZG9MaXN0LmFwcGVuZENoaWxkKHRvZG9JdGVtKTtcclxufSk7XHJcbm1haW5EaXYuYXBwZW5kQ2hpbGQoUHJvamVjdHNEaXYpO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==