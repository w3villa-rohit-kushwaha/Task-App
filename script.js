let taskSubmit = document.getElementById("submit");
let taskTable = document.getElementById("task-table");
let taskRow = document.getElementById("task-row");
let editingRow = null;

taskSubmit.addEventListener("click", (e) => {
  let taskName = document.getElementById("task-name");
  let taskDue = document.getElementById("due-date");
  let taskDiscription = document.getElementById("task-description");

  if (taskName.value === "" || taskDue.value === "" || taskDiscription.value === "") {
    alert("Please fill all the fields");
  } else {
    e.preventDefault();

    if (editingRow) {
      // Update existing row
      editingRow.cells[0].innerText = taskName.value;
      editingRow.cells[1].innerText = taskDue.value;
      editingRow.cells[2].innerText = taskDiscription.value;
      editingRow = null;
    } else {
      // Add new row
      taskRow.innerHTML += `
          <tr>
          <td>${taskName.value}</td>
          <td>${taskDue.value}</td>
          <td>${taskDiscription.value}</td>
          <td><button onclick="myedit(event)">Edit</button></td>
          <td><i onclick="myremove(event)"class="fa-sharp fa-solid fa-circle-xmark"></i></td>
          </tr>
           `;
    }

    taskName.value = "";
    taskDue.value = "";
    taskDiscription.value = "";
  }
});
// edit function
function myedit(event) {
  editingRow = event.target.parentNode.parentNode;
  let cells = editingRow.getElementsByTagName("td");
  let taskName = document.getElementById("task-name");
  let taskDue = document.getElementById("due-date");
  let taskDiscription = document.getElementById("task-description");

  taskName.value = cells[0].innerText;
  taskDue.value = cells[1].innerText;
  taskDiscription.value = cells[2].innerText;
}
//delete function
function myremove(event) {
  let row = event.target.parentNode.parentNode;
  row.parentNode.removeChild(row);
}