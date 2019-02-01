const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")

// when I click the toggleTag, toggle a class of open on mainTag
// and if its open, make toggleTag say closed
// and if its shut, make the toggle tag say open
toggleTag.addEventListener("click", function(){
  mainTag.classList.toggle("open")
  
  if (mainTag.classList.contains("open")) {
      toggleTag.innerHTML = "<img src='close.svg' alt='X to close' /> Close"
      } else {
        toggleTag.innerHTML = "<img src='menu.svg' alt='menu' /> Menu"
      }
  
  
})