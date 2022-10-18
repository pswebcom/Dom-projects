const createMyElement = (parent, elType, classAdd) => {
  const elem = document.createElement(elType);
  parent.append(elem);
  elem.classList.add(classAdd);
  return elem;
};

const addNewUser = (userName) => {
  const li = createMyElement(myList, "li", "my-list");
  li.textContent = userName;
  return li;
};

const output = document.querySelector(".output");
const myInput = createMyElement(output, "input", "w3-input");
myInput.setAttribute("type", "text");
const myButton = createMyElement(output, "button", "w3-button");
myButton.textContent = "Add new User";
const myList = createMyElement(output, "ul", "w3-ul");

myButton.addEventListener("click", (e) => {
  let userName = myInput.value;
  if (userName.length > 3) {
    addNewUser(userName);
    myInput.value = "";
  }
});
