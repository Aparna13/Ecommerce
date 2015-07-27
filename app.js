$( document ).ready(function() {
  console.log("ready ");

  var data = [
  {
    imgsrc:"http://i.imgur.com/KV2e9jE.jpg",
    price: "$ 39.99",
    name: "Black White Gray",
    shortlisted: false
  
  },

  {
    imgsrc:"http://i.imgur.com/NeJMEqI.jpg",
    price: "$ 49.99",
    name: "Lacey White",
    shortlisted: false
   
  },

  {
    imgsrc:"http://i.imgur.com/HIC0t9R.jpg",
    price: "$ 39.99",
    name: "Bell-sleeve white",
    shortlisted: false
   
  },

  {
    imgsrc:"http://i.imgur.com/F1x2acl.jpg",
    price: "$ 29.99",
    name: "Knitted",
    shortlisted: false
   
  },

  {
    imgsrc:"http://i.imgur.com/URuzXCf.jpg",
    price: "$ 49.99",
    name: "Black with Waist detail",
    shortlisted: false
   
  },

  {
    imgsrc:"http://i.imgur.com/oH7qmjF.jpg",
    price: "$ 39.99",
    name: "Two-tone",
    shortlisted: false
  },

  ];

  $('#bs-example-navbar-collapse-1').on('show.bs.collapse', function() {
    $('.nav-pills').addClass('nav-stacked');
  });

//Unstack menu when not collapsed
  $('#bs-example-navbar-collapse-1').on('hide.bs.collapse', function() {
      $('.nav-pills').removeClass('nav-stacked');
  });


  data.forEach(function add (n) {
                 
  $('.contentadd').append("<div class = 'col-sm-5 product'><a href='#'><img src= '" + n.imgsrc + " ' class = 'img-thumb'></a><div class='ontop'><span class ='btn btn-primary btn-box'>Shortlist </span><span class='glyphicon glyphicon-ok-circle tick'></span></div><p><p class ='producttitle'> " + n.name + "<span class ='fontcolor text-right'>$ 39.99</span></p><p class ='size'>s m l</p></div></div>");
  
  

  });


    
});

