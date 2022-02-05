//$("#home").animate({width:'100%'},3000);
$("#home").animate({width:'100%'},1000).animate({height:'100vh'},1000,function(){
    $("h1").fadeIn(300,function(){
        $(".div1").fadeIn(300,function(){
            $(".div2").fadeIn(300,function(){
                $(".div3").fadeIn(300,function(){
        
                })
            })
        })
    })
});