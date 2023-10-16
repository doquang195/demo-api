const student = {
    image: "",
    studentCode: "",
    name: "",
};

const endpoint = "http://localhost:3000/courses";

const listStudent = document.querySelector(".student-list");

async function addNewCourse({
    image,
    studentCode,
    name
  }) {
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

async function getStudents() {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
    if (data.lenght > 0 && Array.isArray(data)) {
        data.forEach((item) => renderItems(item));
    }
}

function renderItems(item) {
    const template = `<div class="student-item">
    <img class="student-image" src="${item.image}" alt="">
    <div class="student-infor">
        <p class="student-code">${item.studentCode}</p>
        <p class="student-name">${item.name}</p>
    </div>
</div>`;
    listStudent.insertAdjacentElement("beforeend", template);
}

const formPost = document.querySelector(".form-post");
formPost.addEventListener("submit", async function (e) {
    e.preventDefault();
    const image = this.elements["image"].value;
    const studentCode = this.elements["code"].value;
    const name = this.elements["name"].value;
    await addNewCourse(image, studentCode, name);
    this.reset();
});

getStudents();