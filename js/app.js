
$(document).ready(function(){


    $('body').on({ 'mousemove' : function( e ){
        console.clear()
        let clientX = e.originalEvent.clientX
        let clientY = e.originalEvent.clientY
        $('#cursor').css({
            'left' : (clientX - 40 ) + 'px',
            'top' : (clientY - 40 ) + 'px'
        })
    }})
})