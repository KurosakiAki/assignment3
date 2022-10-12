// get email
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const emailForm = document.querySelector(".form-email");
const personalInfo = document.querySelector(".personal-info");

document.getElementById("btn--submitEmail").addEventListener("click", () => {
  const email = document.querySelector("#input--email").value;
  const errorText = document.querySelector("#error--email");

  //   check email
  if (!regex.test(String(email).toLowerCase()))
    errorText.innerHTML = "Error email";
  else {
    emailForm.classList.toggle("hidden");
    personalInfo.classList.toggle("hidden");
  }
});

// hide job details
const allJobDetails = document.querySelectorAll(".job-details");
const allJobDescriptions = document.querySelectorAll(".more-details");
const allHoverViews = document.querySelectorAll('.hover-view');

const closeDetails = (jobDetails, index) => {
  allHoverViews[index].textContent = 'View more';    
  allJobDescriptions[index].classList.add("hidden");
  // reduce height
  jobDetails.style.height = "140px";
};

const openDetails = (jobDetails, index) => {
  allHoverViews[index].textContent = 'View Less';    

  allJobDescriptions[index].classList.remove("hidden");
  // reduce height
  jobDetails.style.height = "100%";
};

allJobDetails.forEach((jobDetails, index) => {
  jobDetails.addEventListener("click", () => {
    console.log("clicked");
    !allJobDescriptions[index].classList.contains("hidden")
      ? closeDetails(jobDetails, index)
      : openDetails(jobDetails, index);
  });
});
