const student = {
    image: "",
    studentCode: "",
    name: "",
};

const endpoint = "http://localhost:3000/courses";

const listStudent = document.querySelector(".student-list");

const formPost = document.querySelector(".form-post");

const formSubmit = document.querySelector(".form-submit");

let updateId = null;

async function addNewCourse({ image, studentCode, name }) {
    await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
            image,
            studentCode,
            name,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
}

async function updateStudent({ id, image, studentCode, name }) {
    await fetch(`${endpoint}/${id}`, {
        method: "PUT",
        body: JSON.stringify({
            image,
            studentCode,
            name,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
}

async function getStudents(link = endpoint) {
    const response = await fetch(link);
    const data = await response.json();
    listStudent.innerHTML = "";
    console.log(data);
    if (data.length > 0 && Array.isArray(data)) {
        data.forEach((item) => renderItems(item));
    }
}

async function deleteStudent(id) {
    await fetch(`${endpoint}/${id}`, {
        method: "DELETE",
    });
}

async function getSingleStudent(id) {
    const response = await fetch(`${endpoint}/${id}`);
    const data = await response.json();
    return data;
}

function renderItems(item) {
    const template = `<div class="student-item">
    <div class="item-top">
        <img class="student-image" src="${item.image}" alt="">
        <button class="student-remove" data-id="${item.id}"><i class="fa fa-times"></i></button>
        <button class="student-edit" data-id="${item.id}"><i class="fa fa-pencil"></i></button>
    </div>
    <div class="student-infor">
        <p class="student-code">${item.studentCode}</p>
        <p class="student-name">${item.name}</p>
    </div>
</div>`;
    listStudent.insertAdjacentHTML("beforeend", template);
}

formPost.addEventListener("submit", async function (e) {
    e.preventDefault();
    const course = {
        image: this.elements["image"].value,
        studentCode: this.elements["studentCode"].value,
        name: this.elements["name"].value,
    };
    updateId ? await updateStudent({id,});
    this.reset();
});

listStudent.addEventListener("click", async function (e) {
    if (e.target.matches(".student-remove")) {
        const id = e.target.dataset.id;
        await deleteStudent(id);
        await getStudents();
    } else if (e.target.matches(".student-edit")) {
        e.stopPropagation();
        const id = e.target.dataset.id;
        const data = await getSingleStudent(id);
        formPost.elements["image"].value = data.image;
        formPost.elements["studentCode"].value = data.studentCode;
        formPost.elements["name"].value = data.name;
        formSubmit.textContent = "Update";
        updateId = id;
    }
});

getStudents();
