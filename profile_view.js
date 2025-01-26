const form = document.getElementById("profile-form");
const formContainer = document.getElementById("form-container");
const profileContainer = document.getElementById("profile-container");

const displayUsername = document.getElementById("display-username");
const displayEmail = document.getElementById("display-email");
const displayDepartment = document.getElementById("display-department");
const displayProjectLinks = document.getElementById("display-project_Links");
const displayDescription = document.getElementById("display-description");
const profilePicture = document.getElementById("profile-picture");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 

    // Get form values
    const username = document.getElementById("UserName").value;
    const email = document.getElementById("Email").value;
    const department = document.getElementById("Department").value;
    const projectLinks = document.getElementById("Project_Link").value;
    const description = document.getElementById("Description").value;
    const profileImage = document.getElementById("Profile_Image").files[0];

    displayUsername.textContent = username;
    displayEmail.textContent = email;
    displayDepartment.textContent = department;
    displayProjectLinks.textContent = projectLinks;
    displayDescription.textContent = description;

    
    if (profileImage) {
        const imageUrl = URL.createObjectURL(profileImage);
        console.log("Generated Image URL:", imageUrl);
        
        profilePicture.src = imageUrl;
        profilePicture.style.display = "block";  // Show the profile image
    } else {
        profilePicture.style.display = "none";  // Hide image if none is selected
    }

    formContainer.style.display = "none";
    profileContainer.style.display = "block";
});


function editProfile() {
    formContainer.style.display = "block";
    profileContainer.style.display = "none";
}
