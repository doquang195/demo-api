let coursesAPI = "  http://localhost:3000/courses";

fetch(coursesAPI)
    .then((res) => res.json)
    .then(function (course) {
        console.log(courses);
    });
