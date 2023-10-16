// let coursesAPI = "http://localhost:3000/courses";

// function start() {
//     getCourses(renderCourses);
//     handleCreateForm();
// }

// start();

// function getCourses(callback) {
//     fetch(coursesAPI)
//         .then((res) => res.json())
//         .then(callback);
// }

// function createCourse(data, callback) {
//     let options = {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//     };
//     fetch(coursesAPI, options)
//         .then((res) => res.json())
//         .then(callback);
// }

// function handleDeleteCourse(id) {
//     let options = {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json",
//         },
//     };
//     fetch(coursesAPI + "/" + id, options)
//         .then((res) => res.json())
//         .then(function () {
//             const courseItem = document.querySelector(".course-" + id);
//             if (courseItem) {
//                 courseItem.remove();
//             }
//         });
// }

// function renderCourses(courses) {
//     let listCourses = document.querySelector("#list-courses");
//     const htmls = courses.map(function (course) {
//         return `
//             <div class="course-${course.id}" style="width: 300px, height: 300px">
//                 <h4>${course.name}</h4>
//                 <p>${course.description}</p>
//                 <button onclick="handleDeleteCourse(${course.id})">Xoa</button>
//             </div>`;
//     });
//     listCourses.innerHTML = htmls;
// }

// function handleCreateForm() {
//     const createBtn = document.querySelector("#create");
//     createBtn.onclick = function () {
//         const name = document.querySelector('input[name="name"]').value;
//         const description = document.querySelector(
//             'input[name="description"]'
//         ).value;
//         const formData = {
//             name: name,
//             description: description,
//         };
//         createCourse(formData, function () {
//             getCourses(renderCourses);
//         });
//     };
// }
const student = {
    image: "",
    studentCode: "",
    name: "",
};

const endpoint = "http://localhost:3000/courses";

async function addPost(image, studentCode, name) {
    const response = fetch(endpoint, {
        method: "POST",
        body: JSON.stringify({
            image,
            studentCode,
            name,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    })
        .then((res) => res.json())
        .then((json) => {});
}

async function getStudents()

const formPost = document.querySelector(".form-post");
formPost.addEventListener("submit", async function (e) {
    e.preventDefault();
    const image = this.elements["image"].value;
    const studentCode = this.elements["code"].value;
    const name = this.elements["name"].value;
    await addPost(image, studentCode, name);
    this.reset();
});
