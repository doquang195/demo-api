let coursesAPI = "http://localhost:3000/courses";

let listCourses = document.querySelector('#list-courses');

function start(){
    getCourses( renderCourses);
}

start();

function getCourses(callback) {
    fetch(coursesAPI)
        .then((res) => res.json())
        .then(callback)
}

function renderCourses() {

}
