"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

//menambahkan  sebuah variabel berisi array yang akan menampung beberapa object. Object ini berisikan data-data Todo user. 
var todos = []; //menambahkan sebuah variabel yang bertujuan mendefinisikan custom event  dengan nama render-todo

var RENDER_EVENT = 'render-todo';
var SAVED_EVENT = 'saved-todo';
var STORAGE_KEY = 'TODO_APPS'; //Kode di bawah adalah sebuah listener yang akan menjalankan kode yang ada didalamnya ketika event DOMContentLoaded dibangkitkan alias ketika semua elemen HTML sudah dimuat menjadi DOM dengan baik.

document.addEventListener('DOMContentLoaded', function () {
  var submitForm = document.getElementById('form');
  submitForm.addEventListener('submit', function (event) {
    event.preventDefault();
    addTodo();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
}); //membuat fungsi untuk membuat todo

function addTodo() {
  //kode di bawah berfungsi untuk mengambil elemen pada html
  var textTodo = document.getElementById('title').value; //dalam kasus ini kita menangkap element input dengan id title dan memanggil properti value untuk mendapatkan nilai yang diinputkan oleh user

  var timestamp = document.getElementById('date').value;
  var generatedID = generateId();
  var todoObject = generateTodoObject(generatedID, textTodo, timestamp, false);
  todos.push(todoObject);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function addTaskToCompleted(todoId) {
  var todoTarget = findTodo(todoId);
  if (todoTarget == null) return;
  todoTarget.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function findTodo(todoId) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = todos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var todoItem = _step.value;

      if (todoItem.id === todoId) {
        return todoItem;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return null;
}

function removeTaskFromCompleted(todoId) {
  var todoTarget = findTodoIndex(todoId);
  if (todoTarget === -1) return;
  todos.splice(todoTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function undoTaskFromCompleted(todoId) {
  var todoTarget = findTodo(todoId);
  if (todoTarget == null) return;
  todoTarget.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function findTodoIndex(todoId) {
  for (var index in todos) {
    if (todos[index].id === todoId) {
      return index;
    }
  }

  return -1;
}

function saveData() {
  if (isStorageExist()) {
    var parsed = JSON.stringify(todos);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

function isStorageExist()
/* boolean */
{
  if ((typeof Storage === "undefined" ? "undefined" : _typeof(Storage)) === undefined) {
    alert('Browser kamu tidak mendukung local storage');
    return false;
  }

  return true;
} //menambahkan fungsi untuk menghasilkan identitas unik pada setiap item todo


function generateId() {
  //Untuk menghasilkan identitas yang unik, kita manfaatkan +new Date() untuk mendapatkan timestamp pada JavaScript.
  return +new Date();
} //menambahkan fungsi untuk membuat object baru dari data yang sudah disediakan dari inputan


function generateTodoObject(id, task, timestamp, isCompleted) {
  return {
    id: id,
    task: task,
    timestamp: timestamp,
    isCompleted: isCompleted
  };
}

function makeTodo(todoObject) {
  var textTitle = document.createElement('h2');
  textTitle.innerText = todoObject.task;
  var textTimestamp = document.createElement('p');
  textTimestamp.innerText = todoObject.timestamp;
  var textContainer = document.createElement('div');
  textContainer.classList.add('inner');
  textContainer.append(textTitle, textTimestamp);
  var container = document.createElement('div');
  container.classList.add('item', 'shadow');
  container.append(textContainer);
  container.setAttribute('id', "todo-".concat(todoObject.id));

  if (todoObject.isCompleted) {
    var undoButton = document.createElement('button');
    undoButton.classList.add('undo-button');
    undoButton.addEventListener('click', function () {
      undoTaskFromCompleted(todoObject.id);
    });
    var trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');
    trashButton.addEventListener('click', function () {
      removeTaskFromCompleted(todoObject.id);
    });
    container.append(undoButton, trashButton);
  } else {
    var checkButton = document.createElement('button');
    checkButton.classList.add('check-button');
    checkButton.addEventListener('click', function () {
      addTaskToCompleted(todoObject.id);
    });
    container.append(checkButton);
  }

  return container;
}

function loadDataFromStorage() {
  var serializedData = localStorage.getItem(STORAGE_KEY);
  var data = JSON.parse(serializedData);

  if (data !== null) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var todo = _step2.value;
        todos.push(todo);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
} //menambahkan listener dari RENDER-EVENT


document.addEventListener(RENDER_EVENT, function () {
  var uncompletedTODOList = document.getElementById('todos');
  uncompletedTODOList.innerHTML = '';
  var completedTODOList = document.getElementById('completed-todos');
  completedTODOList.innerHTML = '';
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = todos[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var todoItem = _step3.value;
      var todoElement = makeTodo(todoItem);
      if (!todoItem.isCompleted) uncompletedTODOList.append(todoElement);else completedTODOList.append(todoElement);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }
});
document.addEventListener(SAVED_EVENT, function () {
  console.log(localStorage.getItem(STORAGE_KEY));
});