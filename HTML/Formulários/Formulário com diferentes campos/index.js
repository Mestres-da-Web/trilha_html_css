const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);

  console.log(Object.fromEntries(formData));
});
