let coursesAPI = "http://localhost:3000/courses";

fetch(coursesAPI)
    .then((res) => res.json())
    .then((courses) => console.log(courses));

let listCourses = document.querySelector('#list-courses');

function start(){
    getCourses((courses) => console.log);
}

start();

function getCourses(callback) {
    fetch(coursesAPI)
        .then((res) => res.json())
        .then(callback)
}
