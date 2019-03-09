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
    'desc': 'Maecenas sed aliquam metus, in pretium nibh. Vivamus convallis nunc finibus lectus consectetur, id dapibus justo ultrices. Suspendisse euismod nulla erat, eget condimentum leo pretium sed.</p><p> Praesent dignissim purus sapien, et faucibus neque dictum quis. Duis tincidunt nisi id semper ornare. Maecenas vitae egestas elit.'
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
  var archiveList = document.getElementsByClassName('archive-link');
  
  imageKeys.forEach(function(key) {
    document.getElementById("image-list-ol").innerHTML += '<li class="archive-link" id="archive-link-' +
      key +
      '">' + 
      images[key].title + 
      '</li>';
  });
  
  setImage();
  
  //controls to move around the list
  
  //return to start
  document.getElementById("control-first").addEventListener("click", function() {
    setImage('first');
  });
  
  //previous image
  document.getElementById("control-previous").addEventListener("click", function() {
    setImage('previous');
  });
  
  //next image
  document.getElementById("control-next").addEventListener("click", function() {
    setImage('next');
  });
  
  //latest image
  document.getElementById("control-latest").addEventListener("click", function() {
    setImage('latest');
  });
  
  //clicking archive link
  document.getElementById("image-list-ol").addEventListener("click", function(e) {
    var clicked = parseInt(e.target.id.slice(-1));
    if (!isNaN(clicked)) {
      setImage('menu', clicked);
    }
    
  });
  
  function setImage(direction, menuIndex) {
    //remove previous active list
    document.getElementById("archive-link-" + currImage).classList.remove("active");
    //set next current image (if passed in from nav buttons)
    switch(direction) {
      case 'first':
        currImage = 0;
        break;
      case 'previous':
        if (currImage !== 0) {
          currImage -=1;
        }
        break;
      case 'next':
        if (currImage < imageKeys.length -1) {
          currImage += 1;
        }
        break;
      case 'latest':
        currImage = imageKeys.length - 1;
        break;
      case 'menu':
        currImage = menuIndex;
        break;
      default:
        break;
    }
    //set new image
    document.getElementById("image").innerHTML = '<h2>' + 
    (currImage + 1) +
    ': ' +
    images[currImage].title +
    '</h2><img src=' +
    images[currImage].img +
    '>';
    //set archive link
    document.getElementById("archive-link-" + currImage).classList.add("active");
    //set new description if applicable
    if (images[currImage].desc) {
      document.getElementById("description").innerHTML = '<p>' +
        images[currImage].desc +
        '</p>';
    } else {
      document.getElementById("description").innerHTML = '';
    }
  }
  
});