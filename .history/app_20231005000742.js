const student = {
    image: "",
    studentCode: "",
    name: "",
};

const endpoint = "http://localhost:3000/courses";

const listStudent = document.querySelector(".student-list");

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
    await

}

function renderItems(item) {
    const template = `<div class="student-item">
    <div class="item-top">
        <img class="student-image" src="${item.image}" alt="">
        <button class="course-remove" data-id="${item.id}"><i class="fa fa-times"></i></button>
    </div>
    <div class="student-infor">
        <p class="student-code">${item.studentCode}</p>
        <p class="student-name">${item.name}</p>
    </div>
</div>`;
    listStudent.insertAdjacentHTML("beforeend", template);
}

const formPost = document.querySelector(".form-post");
formPost.addEventListener("submit", async function (e) {
    e.preventDefault();
    const course = {
        image: this.elements["image"].value,
        studentCode: this.elements["code"].value,
        name: this.elements["name"].value,
    };
    await addNewCourse(course);
    this.reset();
});

listStudent.addEventListener("click", function(e) {
    if (e.target.matches(".course-remove")) {
        const id = e.target.dataset.id;
        console.log(id);
    }
})

getStudents();
