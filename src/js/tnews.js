+function($){
    'use strict';

    console.log('tnews');
    const tnews_Handler = function(e){
        const $this = $('[data-template-name="tnews"]')
        const $target = $this.find('[layer="2-2"]')
        const count = $target.children().length - 1
        let active = -100;
        const changes = function(){
            $target.css('transform','translateY('+ active.toString() +'%)');
            active = active - 100
            if (active<count*-100) active = 0
        }

        setInterval(changes, '5000')
    }

    $(document).ready(tnews_Handler)

}(jQuery);