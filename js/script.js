function toogle (event){
    const subButton = event.target.nextElementSibling

    if(subButton.style.display === "none" || subButton.style.display===""){
        subButton.style.display ="block"
    }else{
        subButton.style.display="none"
    }
}

const buttons = document.querySelectorAll(".btn")

buttons.forEach(button =>{
    button.addEventListener("click", toogle)
})



const catgories = document.querySelector(".catgories")
const subcatgories = document.querySelector(".sub-category")

catgories.addEventListener("click", ()=>{
    if(subcatgories.style.display === "none"){
        subcatgories.style.display ="block"
    }else{
        subcatgories.style.display="none"
    }
})










// Get references to the increase and decrease buttons and the span element
const increase = document.querySelector(".btn-increase");
const decrease = document.querySelector(".btn-decrease");
const span = document.querySelector(".spans span");

// Add a click event listener to the increase button
increase.addEventListener("click", () => {
    // Get the current value from the span element's text content and convert it to an integer
    const currentValue = parseInt(span.textContent);
    
    // Increment the value by 1 and update the span element's text content
    span.textContent = currentValue + 1;
});

// Add a click event listener to the decrease button
decrease.addEventListener("click", () => {
    // Get the current value from the span element's text content and convert it to an integer
    const currentValue = parseInt(span.textContent);

    // Check if the current value is greater than 1 before decrementing
    if (currentValue > 1) {
        // Decrement the value by 1 and update the span element's text content
        span.textContent = currentValue - 1;
    }
});



// This function is called when a link is clicked to show content.
// It takes two parameters: event and id.
function showContent(event, id) {
    // Prevent the default behavior of the link, like following the href.
    event.preventDefault();

    // Get all elements with the class "decription-detail".
    const details = document.getElementsByClassName("decription-detail");

    // Loop through all the elements with the class "decription-detail".
    for (let i = 0; i < details.length; i++) {
        // Hide each element by setting its display style to "none".
        details[i].style.display = "none";
    }

    // Show the element with the provided id by setting its display style to "block".
    document.getElementById(id).style.display = "block";
}





// Wait for the DOM to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", function () {
    // Select elements by their IDs
    let yourViews = document.getElementById("yourViews");
    let userName = document.getElementById("username");
    let userEmail = document.getElementById("userEmail");
    let leaveCommentBtn = document.getElementById("leaveCommentBtn");
    let commentList = document.querySelector(".comment");
    let commentCount = document.getElementById("commentCount");

    // Function to handle leaving a comment
    function leaveComment() {
        // Get values from input fields
        const userView = yourViews.value;
        const user = userName.value;
        const email = userEmail.value;
        const date = new Date().toLocaleString(); // Get the current date and time

        // Check if both userView and user are not empty
        if (userView.trim() !== "" && user.trim() !== "") {
            // Create a new <li> element for the comment
            const li = document.createElement("li");
            li.classList.add("commentLi"); // Add a class to the <li> element
            // Populate the <li> element with comment content
            li.innerHTML = `<strong>${user}</strong> ${date}: ${userView} <br> <br> <strong>${email}</strong>`;
            
            // Append the <li> element to the commentList <ul>
            commentList.appendChild(li);

            // Increment and update the comment count
            let currentComment = parseInt(commentCount.textContent);
            commentCount.textContent = `${currentComment + 1} comment`;

            // Clear input fields
            yourViews.value = "";
            userName.value = "";
            userEmail.value = "";
        }
    }

    // Add a click event listener to the "Leave Comment" button
    leaveCommentBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default form submission behavior
        leaveComment(); // Call the leaveComment function to handle leaving a comment
    });
});



  





