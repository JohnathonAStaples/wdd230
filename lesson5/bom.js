       const list = document.getElementById("list");
       const input = document.getElementById("favchap") ;
       const button = document.getElementById("submit");

       button.addEventListener("click", () => {
        if (input.value !== ""){
        const myItem = input.value;
        input.value ="";

        const listItem = document.createElement("li");
        const listText = document.createElement("span");
        const listBtn = document.createElement("button")

        listItem.appendChild(listText);
        listText.innerHTML = myItem;
        listItem.appendChild(listBtn);
        listBtn.innerHTML = "X";
        list.appendChild(listItem);

        listBtn.addEventListener("click",() => {
            list.removeChild(listItem);
        });
        input.focus();}
       });
