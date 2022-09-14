const changeElement = () => {
  const list = document.getElementById("list");
  const data = ["Array item", "Array item", "Array item", "Array item"];

  const listElements = data
    .map(function (item) {
      return `<li>${item}</li>`;
    })
    .join("");

  list.innerHTML = listElements;
};
