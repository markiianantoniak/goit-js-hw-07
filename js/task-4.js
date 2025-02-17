let form = document.querySelector("form.login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let email = form.elements.email;
  let password = form.elements.password;

  if (!form.email || !form.password) {
    alert("Всі поля повинні бути заповнені!");
    return;
  }
  const formData = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  console.log(formData);
  form.reset();
});
