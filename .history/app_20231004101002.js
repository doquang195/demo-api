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

function renderCourses(courses) {
    let listCourses = document.querySelector("#list-courses");
    const htmls = courses.map(function (course) {
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
            </li>`;
    });
    listCourses.innerHTML = htmls.join();
}

function handleCreateForm() {
    const createBtn = document.querySelector("#create");
    createBtn.onclick = function () {
        const name = doc
    };
}