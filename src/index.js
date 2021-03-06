import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

const createIncompleteList = (text) => {
  //create div tag
  const div = document.createElement("div");
  div.className = "list-row";
  // create li tag
  const li = document.createElement("li");
  li.innerText = text;

  // create complete button tag
  const completeButton = document.createElement("button");
  completeButton.innerText = "complete";
  completeButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    const li = document.createElement("li");
    li.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "restore";
    backButton.addEventListener("click", () => {
      const deleteTarget = backButton.parentNode;
      document.getElementById("completed-list").removeChild(deleteTarget);
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);
    document.getElementById("completed-list").appendChild(addTarget);
  });

  // create delete button tag
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // set div tag of child element li tag.
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
