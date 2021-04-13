// 1 - ідентифікація всіх активних елементів
// 2 - написання коду:
//     1 додаавання тексту в список (enter)
//     2 збереження (save) local storage
//     3 (clear)
//     4 видалення одного елементу
//     5 виконання одного елементу
//     6 олівець
//     7 підказки (tips)
//     8 закрити підказки

function preLoader() {
  let $input = document.querySelector(".lists"),
    $ul = document.querySelector("ul.todos")
    loadList();
    let $basket = document.querySelectorAll(".todos span"),
    $save = document.querySelector(".save"),
    $clear = document.querySelector(".clear"),
    $showTips = document.querySelector(".tipBtn"),
    $pencil = document.querySelector("#pencil"),
    $overlay = document.querySelector("#overlay"),
    $hideTips = document.querySelector(".closebtn");


  function deleteItem() {
    for (let i = 0; i < $basket.length; i++) {
      $basket[i].addEventListener("click", function() {
        this.parentElement.remove();
      });
    }
  }
  deleteItem();
  $input.addEventListener("keypress", function (key) {
    if (key.which == 13) {
      let value = this.value.trim();
      this.value = "";
      if (value) {
        let li = document.createElement("LI"),
          span = document.createElement("SPAN"),
          icon = document.createElement("I");
        icon.classList.add("fas", "fa-trash-alt");
        li.textContent = value;
        span.insertAdjacentElement("afterbegin", icon);
        li.insertAdjacentElement("afterbegin", span);
        $ul.insertAdjacentElement("afterbegin", li);
        $basket = document.querySelectorAll(".todos span")
        deleteItem()
      } else {
        alert("Error! Wrong data!");
      }
    }
  });
  $pencil.addEventListener('click', ()=>{
      $input.classList.toggle('display')
  })
  $save.addEventListener("click", () => {
    localStorage.setItem("list", $ul.innerHTML);
  });
  $showTips.addEventListener('click', ()=>{
      $overlay.style.height = '100vh'
  })
  $hideTips.addEventListener('click', ()=>{
    $overlay.style.height = '0'
  })
  $clear.addEventListener('click', ()=>{
      localStorage.setItem('list', $ul.innerHTML= '')
  })
  function loadList() {
    let list = localStorage.getItem("list");
    if (list) {
      $ul.innerHTML = list;
    }
  }

}

document.addEventListener("DOMContentLoaded", preLoader());
