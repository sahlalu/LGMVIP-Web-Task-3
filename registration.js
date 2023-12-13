const students = [];

function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const website = document.getElementById("website").value;
  const image = document.getElementById("image").value;
  const skills = Array.from(
    document.querySelectorAll('input[name="skills"]:checked')
  ).map((skill) => skill.value);

  // Add student details to the array
  const student = { name, email, gender, website, image, skills };
  students.unshift(student); 

  // Display the student details
  const displayContent = document.getElementById("display-content");
  displayContent.innerHTML = students
    .slice(0, 2)
    .map(
      (student, index) => `
        <h4>Student Profile</h4>
          <div id="student-data">
            <div id="flex-container">
            <p><strong>Name:</strong> ${student.name}</p>
            <p><strong>Email:</strong> ${student.email}</p>
            <p><strong>Gender:</strong> ${student.gender}</p>
            <p><strong>Website:</strong> ${student.website}</p>
            <p><strong>Skills:</strong> ${student.skills.join(", ")}</p>
          </div>
          <div id="image-link">
            <p><strong>Profile Image:</strong><br> <img src="${
              student.image
            }" alt="User Image"></p>
          </div>
          </div>   
        `
    )
    .join("");


  document.getElementById("registration-form").reset();
}

function clearForm() {
  
  document.getElementById("registration-form").reset();

 
  document.getElementById("display-content").innerHTML = "";
}
