
document.addEventListener("DOMContentLoaded", () => {
   const imageTags = document.querySelectorAll(".slide-in");

   function debounce(callback, delay) {
    // each call to debounce initializes a new timeoutId, overwrites old one
    let timeoutId
    //console.log("default timeoutId", timeoutId)
    return function() {
      // this inner function keeps a reference to
      // timeoutId from the function outside of it
      //console.log("initial timeoutId", timeoutId)
      clearTimeout(timeoutId)
      //console.log("cleared timeoutId", timeoutId)
      timeoutId = setTimeout(callback, delay)
      //console.log("what is timeoutId?", timeoutId)
    }
}


   const slideImage = (e) => { 
     imageTags.forEach(image => {
       const slideInAt = (window.scrollY + window.innerHeight) - image.height/2;
       const imageBottom = image.offsetTop + image.height;
       const isHalfShown= slideInAt > image.offsetTop;
       const isNotScrolledPast= window.scrollY < imageBottom;
      
       if(isHalfShown && isNotScrolledPast) {
         image.classList.add("active")
       }
       else {
         image.classList.remove("active")
       }
    })
   }

   window.addEventListener("scroll", debounce(slideImage, 50)) 
})