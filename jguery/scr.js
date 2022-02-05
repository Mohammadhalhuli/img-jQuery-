/*$("button").click(function(){
   //$("h1").html("fsdv");
  // $("h1").html("<p>fvfd</p>");
  $("h1").text("fsdv");
})*/




/*
$("button").click(function(){
    //$(".img1").attr();//get
    //alert("df");
    $(".img1").attr('src','image/1 (1).jpg')
})
*/

/**** 
    add class
*/
/*
$("button").click(function(){
    //$(".img1").attr();//get
    //alert("df");
    $(".img1").addClass('mo');
    //addd ,or class
   // $(".img1").addClass('mo test 2m');


   // remove class
   //.removeClass('Name class')

   //$(".img1").addClass('mo');
})
*/


 //with 
 //height


 //let w=$("demo1").css('width');//get
 //console.log(x);
 $(".demo1").css("width","500px");//set
 $(".demo1").css("backgroundColor","blue");//set
 //or
 $(".demo1").css({

 });
 //let w=$("demo1").css('width','500px');//set
 //console.log(x); //set







 /*
$("button").click(function(){
    let x=(".demo1").css('width');
    let y=(".demo1").css('height');
    //or
    let z=(".demo1").css(['height','width']);
})*/

/*
$("button").click(function(){
    let x=(".demo1").width();
    console.log(x);
})//
$("button").click(function(){
    let x=(".demo1").innerwidth();
    console.log(x);
})// الويذ مع البادينك  240!!
//width +padding
//20يمين &&20يسار
$("button").click(function(){
    let x=(".demo1").outerwidth();
    console.log(x);
})//width+padding+border
////////////////////////////////////////////////////////
//with bootstrab differant width
*/


//click iterm

$("button").click(function(){
    $("#wse").append("welcome");//add finale
    $("#wse").append($("img"));//add finale
})//

$("button").click(function(){
    $("#wse").prepend("welcome");//add first
    $("#wse").prepend($("img"));//add first
})//

$("button").click(function(){
    $("#wse").remove();
})//

