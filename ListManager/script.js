const createMyElement = (parent, elType, classAdd) => {
  const elem = document.createElement(elType);
  parent.append(elem);
  elem.classList.add(classAdd);
  return elem;
};

const addNewUser = (userName) => {
  const li = createMyElement(myList, "li", "my-list");
  const div = createMyElement(li, "div", "main-div");

  const span1 = createMyElement(div, "span", "span-userName");
  span1.textContent = userName;
  const div2 = createMyElement(div, "div", "button-div");
  const span2 = createMyElement(div2, "i", "fa-solid");
  span2.classList.add("fa-pencil");
  const span3 = createMyElement(div2, "span", "fa-solid");
  span3.classList.add("fa-trash");

  span2.addEventListener("click", () => {
    if (span2.classList.contains("fa-pencil")) {
      span1.setAttribute("contenteditable", true);
      span1.style.backgroundColor = "yellow";
      span1.focus();
      span2.classList.remove("fa-pencil");
      span2.classList.add("fa-floppy-disk");
    } else {
      span2.classList.remove("fa-floppy-disk");
      span2.classList.add("fa-pencil");
      span1.setAttribute("contenteditable", false);
      span1.style.backgroundColor = "";
      span1.blur();
    }
  });

  span3.addEventListener("click", () => {
    li.remove();
  });

  return li;
};

const output = document.querySelector(".output");
const myTop = createMyElement(output, "div", "top");
const myInput = createMyElement(myTop, "input", "w3-input");
myInput.setAttribute("type", "text");
const myButton = createMyElement(myTop, "button", "w3-button");
myButton.textContent = "Add new User";
const myList = createMyElement(output, "ul", "w3-ul");

myButton.addEventListener("click", (e) => {
  let userName = myInput.value;
  if (userName.length > 3) {
    addNewUser(userName);
    myInput.value = "";
  }
});
