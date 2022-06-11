import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //create div tag
  const div = document.createElement("div");
  div.className = "list-row";
  // create li tag
  const li = document.createElement("li");
  li.innerText = inputText;

  // create complete button tag
  const completeButton = document.createElement("button");
  completeButton.innerText("complete");

  // create delete button tag
  const deleteButton = document.createElement("button");
  deleteButton.innerText("delete");

  // set div tag of child element li tag.
  div.appendChild(li);
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
