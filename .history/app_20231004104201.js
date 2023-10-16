let coursesAPI = "http://localhost:3000/courses";

function start() {
    getCourses(renderCourses);
    handleCreateForm();
}

start();

function getCourses(callback) {
    fetch(coursesAPI)
        .then((res) => res.json())
        .then(callback);
}

function createCourse(data, callback) {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    };
    fetch(coursesAPI, options)
        .then((res) => res.json())
        .then(callback);
}

function deleteCourse(id) {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    };
    fetch(coursesAPI + , options)
        .then((res) => res.json())
        .then(callback);
}

function renderCourses(courses) {
    let listCourses = document.querySelector("#list-courses");
    const htmls = courses.map(function (course) {
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
                <button onclick="deleteCourse(${course.id})">Xoa</button>
            </li>`;
    });
    listCourses.innerHTML = htmls.join();
}

function handleCreateForm() {
    const createBtn = document.querySelector("#create");
    createBtn.onclick = function () {
        const name = document.querySelector('input[name="name"]').value;
        const description = document.querySelector(
            'input[name="description"]'
        ).value;
        const formData = {
            name: name,
            description: description,
        };
        createCourse(formData, function() {
            getCourses(renderCourses);
        });
    };
}
