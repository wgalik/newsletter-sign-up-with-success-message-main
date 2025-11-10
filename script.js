const dismissBtn = document.getElementById("dismissBtn");
const emailInput = document.getElementById("email");
const emailValue = document.getElementById("emailValue");
const noValidateMsg = document.getElementById("noValidateMsg");
const regex = /^[^@]+@[A-Za-z0-9.-]{2,}\.[A-Za-z]{2,}$/;
const signUpSection = document.getElementById("signUp");
const submitBtn = document.getElementById("submitBtn");
const successMsgSection = document.getElementById("successMsg");

let isError = false;

const openNoValidateMsg = () => {
  if (isError) return;
  noValidateMsg.style.display = "inline-block";
  emailInput.classList.add("error");
  isError = true;
};

const subscribe = (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  if (!email) {
    openNoValidateMsg();
    return;
  }
  if (!regex.test(email)) {
    openNoValidateMsg();
    return;
  }

  signUpSection.style.display = "none";
  successMsgSection.style.display = "grid";
  noValidateMsg.style.display = "none";
  emailValue.innerHTML = email;
};

const resetPage = () => {
  if (isError) {
    emailInput.classList.remove("error");
    isError = !isError;
  }
  emailInput.value = "";
  emailValue.innerHTML = "";
  signUpSection.style.display = "flex";
  successMsgSection.style.display = "none";
};

submitBtn.addEventListener("click", subscribe);

dismissBtn.addEventListener("click", resetPage);

emailInput.addEventListener("click", resetPage);

emailInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") subscribe();
});
