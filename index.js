const changeTitleButton = document.getElementsByClassName("change-title")
const pageTitle = document.getElementsByClassName("page-title")

changeTitleButton[0].addEventListener("click", (event) => {
  const highlightClass = "highlight-title"

  // Toggle class
  pageTitle[0].classList.toggle(highlightClass)
})

// changeTitleButton[0].removeEventListener("click", (event) => {
//   console.log(event)
//   pageTitle[0].classList.remove("highlight-title")
// })
