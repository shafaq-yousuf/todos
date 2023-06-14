// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
import { getDatabase, ref, set, onValue, update, remove, push } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyALg8ybwD4QyAv3YI_sWUbL8I2E4Aq_kb8",
    authDomain: "todoappdatabase-22b79.firebaseapp.com",
    databaseURL: "https://todoappdatabase-22b79-default-rtdb.firebaseio.com",
    projectId: "todoappdatabase-22b79",
    storageBucket: "todoappdatabase-22b79.appspot.com",
    messagingSenderId: "527541012280",
    appId: "1:527541012280:web:caced2d4b642eb0520a3cd",
    measurementId: "G-J8D93Z6TVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const dt = getDatabase();
var inp = document.getElementById("inp");

window.add = function () {
    var obj = {
        todo: inp.value,
    }
    obj.id = Math.random().toString().slice(2);
    console.log(obj);

    const reference = push(ref(dt, "todos/"));
    obj.id = reference.key
    set(reference, obj)
};

function getData() {
    var parent = document.getElementById("main");
    const reference = ref(dt, "todos/");
    onValue(reference, function (todo) {
        parent.innerHTML = "";
        var todos = Object.values(todo.val())
        for (var i = 0; i < todos.length; i++) {
            var app = todos[i];
            console.log(app.todo);
            parent.innerHTML += `<p class="text-center d-flex justify-content-evenly ms-3 pt-4">Todo : ${app.todo}<button onclick="edit('${app.id}')" class="btn btn-outline-success p-2 px-3  text-dark">EDIT</button><button onclick = "del('${app.id}')"class = btn btn-outline-danger p-2 px-4 mx-2 text-dark"> DELETE</button></p><br />`
        }
        var input = document.getElementById("inp").value = ""
    }
    )
}

getData();

window.delAll = function (id) {
    remove(ref(dt, `todos/`))
}
window.del = function (id) {
    remove(ref(dt, `todos/${id}`))
}

window.edit = function (id) {
    console.log(id);
    var newTodo = prompt("Enter update")
    update(ref(dt, `todos/${id}`), {
        todo: newTodo
    })
}
