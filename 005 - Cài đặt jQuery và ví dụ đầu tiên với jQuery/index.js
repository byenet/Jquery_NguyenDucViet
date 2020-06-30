$(document).ready(function(){
    // code se duoc viet o day
    alert('hay click vao Huy dep trai');

    $('body').click(function(event){
        // Act on the event 
        $('h2').animate({
            marginLeft: 500,
            opacity: 0}, 
            500, function(){
                // stuff to do after animation completes
                alert('the h2 da bien mat')
        })
    })
});