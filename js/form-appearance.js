var button = document.querySelector(".search-form-title");
var searchForm = document.querySelector(".search-form");
var animationCssClass = "search-form--animation";
var showCssClass = "search-form--show";
var formVisible = false;
var animationTimeoutId = 0;
var animationDurationInMS = 300;

button.addEventListener("click", function (event) {
  clearTimeout(animationTimeoutId)
  if(formVisible) {
    searchForm.classList.remove(animationCssClass)
    animationTimeoutId = setTimeout(function() {
      searchForm.classList.remove(showCssClass)
    }, animationDurationInMS)
  } else {
    if (!searchForm.classList.contains(showCssClass)) {
      searchForm.classList.add(showCssClass)
    }
    setTimeout(function() {
      if(formVisible){
          searchForm.classList.add(animationCssClass)
      }
   }, 50)
  }
  formVisible = !formVisible
})
