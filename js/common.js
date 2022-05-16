//HEADER//


const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
    searchEl.classList.add("focused");
    searchInputEl.setAttribute("placeholder", "통합검색"); //Attribute: css 속성
});

searchInputEl.addEventListener("blur", function () {
    searchEl.classList.remove("focused");
    searchInputEl.setAttribute("placeholder", ""); //Attribute: css 속성
});



//YEAR//

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();