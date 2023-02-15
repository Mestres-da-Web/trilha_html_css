const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(e.target);
  const formData = new FormData(e.target);

  for (const p of formData) {
    console.log(p);
  }

  /* console.log(Object.fromEntries(formData)); */
});
