// let nameInput = document.querySelector('.name')
// let rollInput = document.querySelector('.roll')
// let idInput = document.querySelector('.studentId')
// let ageInput = document.querySelector('.age')
// let addBtn = document.querySelector('.add-btn')
// let studentList = document.querySelector('.student-list')

// addBtn.addEventListener('click', ()=>{
//     let name =nameInput.value.trim()
//     let roll =roll.value.trim()
//     let id = id.value.trim()
//     let studentClass= classInput.value.trim()
//     let age= ageInput.value.trim()


//      if(!name|| !roll || !id || !studentClass ||! age){
//         alert(' please fill all fields!')
//      }
// })



const nameInput = document.querySelector(".name");
const rollInput = document.querySelector(".roll");
const idInput = document.querySelector(".studentId");
const classInput = document.querySelector(".studentClass");
const ageInput = document.querySelector(".age");
const addBtn = document.querySelector(".add-btn");
const studentList = document.querySelector(".student-list");

addBtn.addEventListener("click", function () {

    const name = nameInput.value.trim();
    const roll = rollInput.value.trim();
    const id = idInput.value.trim();
    const studentClass = classInput.value.trim();
    const age = ageInput.value.trim();

    if (!name || !roll || !id || !studentClass || !age) {
        alert("Please fill all fields!");
        return;
    }

    const studentCard = document.createElement("div");
    studentCard.classList.add("student-card");

    studentCard.innerHTML = `
        <div>Name: ${name}</div>
        <div>Roll: ${roll}</div>
        <div>ID: ${id}</div>
        <div>Class: ${studentClass}</div>
        <div>Age: ${age}</div>
    `;

    studentList.appendChild(studentCard);

    // Clear input fields
    nameInput.value = "";
    rollInput.value = "";
    idInput.value = "";
    classInput.value = "";
    ageInput.value = "";
});
