/*Name this external file gallery.js*/

function upDate(previewPic) {
  x = document.getElementById("image");
  x.style.backgroundImage = "url('" + previewPic.src + "')";
  x.innerHTML = previewPic.alt;
}

function unDo(id) {
  x = document.getElementById("image");
  x.style.backgroundImage = "url('')";
  x.innerHTML = "Hover over an image below to display here.";
}

function setImages() {
  console.log("setImages function called");

  currentImages = document.querySelectorAll(".flex img");
  for (var i = 0; i < currentImages.length; i++) {
    console.log("Image" + i);    
    currentImages[i].setAttribute("tabindex", "0");

  
  }
}
