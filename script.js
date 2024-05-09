
function upDate(previewPic){

    document.getElementById("image").innerHTML = previewPic.alt;
      document.getElementById("image").style.backgroundColor = "#CCEECC";
    document.getElementById("image").style.backgroundImage = 'url(' + previewPic.src + ')';
    console.log(previewPic);
  }
  
  function unDo(){
  
    document.getElementById('image').innerHTML = 'Hover over an image below to display here.';
      document.getElementById("image").style.backgroundColor = '#8e68ff';
    document.getElementById('image').style.backgroundImage = 'url()';
    console.log()
  
         }
  
       function tabFocus(){
  
      var currentImages = document.querySelectorAll("#container img")
      for (var i=0; i< currentImages.length; i++){
        console.log("images" + i);
        currentImages[i].setAttribute("tabindex","0");
      }
    }	   