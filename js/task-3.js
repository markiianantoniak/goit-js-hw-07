const nameOutput = document.querySelector("#name-output");
const nameInput = document.querySelector("#name-input");
function onInputChange(event) {
  nameOutput.textContent = event.currentTarget.value || "Anonymous";
}

nameInput.addEventListener("input", onInputChange);
