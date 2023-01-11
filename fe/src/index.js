const expandAddNewTask = (event) => {
  event.target.classList.toggle("hide");
  event.target.nextElementSibling.classList.toggle("hide");
};

const addNewTask = (event) => {
  event.preventDefault();

  console.log(event.target.elements);
  const formElem = document.querySelector("form");

  const formData = new FormData(formElem);

  console.log(formData);

  console.log(formData.get("radnja"));
};
