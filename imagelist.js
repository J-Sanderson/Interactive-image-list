//load in images with titles (required) and descriptions (optional)
//this could be an externally loaded JSON file too depending on size
var images = [
  {
    'img': 'https://placeimg.com/640/480/animals',
    'title': 'In venenatis risus',
    'desc': 'Donec sodales euismod est sollicitudin finibus. Fusce ultrices varius erat, et blandit neque suscipit in. Vivamus eget ex vel lorem porta fringilla ut a augue. Morbi nec quam nec risus feugiat egestas pulvinar sit amet massa.'
  },
  {
    'img': 'https://placeimg.com/640/480/arch',
    'title': 'Quisque congue'
  },
  {
    'img': 'https://placeimg.com/640/480/nature',
    'title': 'Maecenas euismod metus'
  },
  {
    'img': 'https://placeimg.com/640/480/people',
    'title': 'Nulla libero lorem',
    'desc': 'Maecenas sed aliquam metus, in pretium nibh. Vivamus convallis nunc finibus lectus consectetur, id dapibus justo ultrices. Suspendisse euismod nulla erat, eget condimentum leo pretium sed. Praesent dignissim purus sapien, et faucibus neque dictum quis. Duis tincidunt nisi id semper ornare. Maecenas vitae egestas elit.'
  },
  {
    'img': 'https://placeimg.com/640/480/tech',
    'title': 'Aliquam ac',
    'desc': 'Vestibulum accumsan eget purus quis viverra. Aliquam erat volutpat. Suspendisse at consequat leo. Mauris sed hendrerit dolor.'
  }
];

document.addEventListener("DOMContentLoaded", function() {
  
  //initial setup
  
  var imageKeys = Object.keys(images);
  var currImage = imageKeys.length - 1;
  
  setImage();
  
  imageKeys.forEach(function(key) {
    document.getElementById("image-list-ol").innerHTML += '<li>' + 
      images[key].title + 
      '</li>';
  });
  
  //controls to move around the list
  
  //return to start
  document.getElementById("control-first").addEventListener("click", function() {
    currImage = 0;
    setImage();
  });
  
  //previous image
  document.getElementById("control-previous").addEventListener("click", function() {
    currImage -= 1;
    setImage();
  });
  
  //next image
  document.getElementById("control-next").addEventListener("click", function() {
    currImage += 1;
    setImage();
  });
  
  //latest image
  document.getElementById("control-latest").addEventListener("click", function() {
    currImage = Object.keys(images).length - 1;
    setImage();
  });
  
  function setImage() {
    document.getElementById("image").innerHTML = '<h2>' + 
    (currImage + 1) +
    ': ' +
    images[currImage].title +
    '</h2><img src=' +
    images[currImage].img +
    '>';
    if (images[currImage].desc) {
      document.getElementById("description").innerHTML = '<p>' +
        images[currImage].desc +
        '</p>';
    } else {
      document.getElementById("description").innerHTML = '';
    }
  }
  
});