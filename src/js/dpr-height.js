+function($,win){
    'use strict';

    console.log('dpr-width');

    var setHeight = function(){
        const height    = win.innerHeight
        const width     = win.innerWidth
        const dpr       = win.devicePixelRatio
        console.log(width,dpr)
        const $target    = $('.scroll-content')
        
            $target.css('height',height)
    }

    $(document).ready(setHeight)
    
}(jQuery,window);

