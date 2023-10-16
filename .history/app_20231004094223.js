let coursesAPI = "http://localhost:3000/courses";

fetch(coursesAPI)
    .then((res) => res.json())
    .then((courses) => console.log(courses));

let listCourses = document.querySelector('#list-courses');

function start(){

}

start();

function getCourses() {
    
}
