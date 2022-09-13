//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------
//? 3.Metod
const h1 = document.querySelector("#header h1");
h1.onmouseover = function () {
  h1.style.color = "red";
  h1.style.fontWeight = "300";
};

h1.onmouseout = () => {
  h1.style.color = "black";
  h1.style.fontWeight = "900";
};

//? 4. Metod
h1.addEventListener("click", () => {
  alert("H1 pressed");
});

//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------

document.getElementById("btn").addEventListener("click", function () {
  const input = document.querySelector("#input");
  //   if (!input.value) {
  //     alert("Please enter an item");
  //   } else {
  //     alert(`${input.value} entered`);
  //   }
  // })
  !input.value
    ? alert("Please enter an item")
    : alert(`${input.value} entered`);

  input.value = "";
});

//* EXAMPLE-3 (addEventListener())
//* -------------------------------------------------
const list = document.querySelectorAll(".list");
list.forEach((li) => {
  li.style.transition = "all 0.8s";
  li.style.lineHeight = "2rem";
  li.onmouseover = () => {
    li.style.fontSize = "2rem";
    li.style.transform = "translateX(10px)";
  };
  li.onmouseout = () => {
    li.style.fontSize = "1rem";
    li.style.transform = "translateX(-10px)";
  };
});
console.log("list");

//* EXAMPLE-4 (onload)
//* -------------------------------------------------
window.onload = function () {
  document.querySelector("#input").focus();
};
