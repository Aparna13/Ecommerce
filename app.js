$( document ).ready(function() {
  console.log("ready ");
  var counter = 0;

  var data = [
  {
    imgsrc:"http://i.imgur.com/KV2e9jE.jpg",
    price: "$ 39.99",
    name: "Black White Gray",
    shortlisted: false,
  
  },

  {
    imgsrc:"http://i.imgur.com/NeJMEqI.jpg",
    price: "$ 49.99",
    name: "Lacey White",
    shortlisted: false,
   
  },

  {
    imgsrc:"http://i.imgur.com/HIC0t9R.jpg",
    price: "$ 39.99",
    name: "Bell-sleeve white",
    shortlisted: false,
   
  },

  {
    imgsrc:"http://i.imgur.com/F1x2acl.jpg",
    price: "$ 29.99",
    name: "Knitted",
    shortlisted: false,
   
  },

  {
    imgsrc:"http://i.imgur.com/URuzXCf.jpg",
    price: "$ 49.99",
    name: "Black with Waist detail",
    shortlisted: false,
   
  },

  {
    imgsrc:"http://i.imgur.com/oH7qmjF.jpg",
    price: "$ 39.99",
    name: "Two-tone",
    shortlisted: false,

  },

  ];

  $('#bs-example-navbar-collapse-1').on('show.bs.collapse', function() {
    $('.nav-pills').addClass('nav-stacked');
  });

//Unstack menu when not collapsed
  $('#bs-example-navbar-collapse-1').on('hide.bs.collapse', function() {
      $('.nav-pills').removeClass('nav-stacked');
  });


  data.forEach(function add (n,i) {
                 
    $('.contentadd').append("<div class = 'col-sm-5 product'><a href='#'><img src= '" + n.imgsrc + " ' class = 'img-thumb'></a><div class='ontop' data-index='" + i + "'><span class ='btn btn-primary btn-box'>Shortlist </span></div><p><p class ='producttitle'> " + n.name + "<span class ='fontcolor text-right'>$ 39.99</span></p><p class ='size'>s m l</p></div></div>");
    
    });



  $('.ontop').on("click", function (e) {
    $(this).attr("class", "seen");
    $(this).children(".btn-box").css("display", "none");
    $(this).append ("<span class='glyphicon glyphicon-ok-sign tick'></span>");
    data[$(this).data('index')].shortlisted = true;
    console.log(data[$(this).data('index')]) ;
    // console.log(data[$(this).data('index')].shortlisted));
 
    counter++;
    $('.shortlist').text(counter);


  });


  $('#shortlist').on("click", function (e) {
    $(this).css("background-color", "#333333");
    $(this).css("color", "white");
    $('#outline').attr("class", "btn btn-default tog smtext");

    data.forEach(function addnew (n) {
      console.log(n.shortlisted);
     if (n.shortlisted == true){
      console.log("this is true");
      $('.contentadd').remove();            
      $('.shortlistadd').append("<div class = 'col-sm-5 product'><a href='#'><img src= '" + n.imgsrc + " ' class = 'img-thumb'></a><p class ='producttitle'> " + n.name + "<span class ='fontcolor text-right'>$ 39.99</span></p><p class ='size'>s m l</p></div></div>");
     }
   
    });


  });


    
});

