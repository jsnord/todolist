(function () {

	function insertAfter(elem, refElem) {
	  var parent = refElem.parentNode;
	  var next = refElem.nextSibling;
	  if (next) {
	    return parent.insertBefore(elem, next);
	  } else {
	    return parent.appendChild(elem);
	  }
	}

	function Todo(field, insertElement) {
		var field = document.querySelector(field);
		var insertElement = document.querySelector(insertElement);

		var self = this;

		//create elements
		var todoList = document.createElement('ul');
		todoList.classList.add('todo');

		//validate input
		var isFieldClear = function(fieldValue) {
			return fieldValue.replace(/\s/g, '');
		};

		//complete task
		var completeTodo = function(e) {
			e.preventDefault();
			this.closest('li').classList.toggle('fill');
		};

		//delete task
		var deleteTodo = function (e) {
			e.preventDefault();
			this.closest('li').remove();
		};

		//event for key enter
		field.addEventListener('keydown', function(e) {
			if(e.keyCode === 13 && isFieldClear(field.value)) {
				addTodo();
			}
		});

		//event for button add-todo
		document.querySelector('.js-add-todo').addEventListener('click', function(e) {
			e.preventDefault();
			if(isFieldClear(field.value)) {
				addTodo();
			}
		});

		//add todo
		var addTodo = function () {
			self.todoLi = document.createElement('li');
			self.todoLi.innerHTML = '<span class="todo__text">' + field.value + '</span>' +
															'<div class="buttons">' +
																'<a href="#" class="add-check"><i class="fa fa-check"></i></a>' +
																'<a href="#" class="delete-todo"><i class="fa fa-trash"></i></a>' +
															'</div>';
			insertAfter(todoList, insertElement);
			todoList.insertBefore(self.todoLi, todoList.firstChild);
			field.value = '';

			document.querySelector('.add-check').addEventListener('click', completeTodo);
			document.querySelector('.delete-todo').addEventListener('click', deleteTodo);
		};
	}

	var todo = new Todo('.js-field-todo', '.main-header');

}());


