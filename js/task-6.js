function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    return null;
  }
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }

  return fragment;
}
function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
  destroyBoxes();
  const amount = Number(input.value);
  const fragment = createBoxes(amount);

  if (fragment) {
    boxesContainer.appendChild(fragment);
  }

  input.value = "";
});

destroyButton.addEventListener("click", () => {
  destroyBoxes();
});
