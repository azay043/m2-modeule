const items = document.getElementById("items");
const deletbtn = document.getElementsByClassName("deletbtn");
const btnAdd = document.getElementById("btn-add");
const deletee = document.getElementById("delete");
const module2Value = document.getElementById("module2-value");
const module2srt = document.getElementById("module2-srt")





btnAdd.addEventListener("click", (e) => {
    if (items.value == "") {
        console.log("Deyer girin")
    }
    else {

        module2Value.style.display = "block";


        const valueDiv = document.createElement("div");

        const valuem2 = document.createElement("p");
        valuem2.innerHTML = items.value;

        const valueBtn = document.createElement("button");
        valueBtn.innerHTML = "✕";


        const btnDiv = document.createElement("div");

        module2Value.append(valueDiv);
        valueDiv.append(btnDiv);
        valueDiv.append(valuem2);



        btnDiv.append(valueBtn);

        valueDiv.classList.add("invalue");
        valueDiv.setAttribute("data-ordered", items.value);
        valueBtn.setAttribute("class", "deletbtn");
        btnDiv.setAttribute("class", "delbtn");
        valuem2.setAttribute("class", "valuem2InnerTxt");

        items.value = "";


        removeBtns = [...deletbtn]
        console.log(removeBtns.length)

        removeBtns.forEach(item => {
            item.addEventListener('click', (e) => {
                item.parentNode.parentNode.remove();
                if (module2Value.childNodes.length === 0) {
                    module2Value.style.display = "none";

                }
                else {
                    module2Value.style.display = "block";
                }
            });

        })


    }

});



function elave() {
    e
}

deletee.addEventListener("click", (e) => {
    e.preventDefault();
    items.value = "";
});

module2srt.addEventListener("click", (e) => {
    e.preventDefault();

    function comparator(a, b) {
        if (a.dataset.ordered < b.dataset.ordered)
            return -1;
        if (a.dataset.ordered > b.dataset.ordered)
            return 1;
        return 0;
    }


    function todoSort() {
        var itemDivs =
            document.querySelectorAll("[data-ordered]");
        let aray = Array.from(itemDivs);
        let sorted = aray.sort(comparator);
        sorted.forEach(e =>
            document.querySelector("#module2-value").
                appendChild(e));
    }
    todoSort();



});



