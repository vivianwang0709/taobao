+function($){
    'use strict';

    console.log('tbanner');
    const tbanner_Handler = function(){
        const $this = $('[data-template-name="tbanner"]')
        const $target = $this.find('[layer="2-2"]')
        let $indicator = $this.find('[layer="2-1"]').find('.active')
        const count = $target.children().length -1
        let active = 0

        const changes = function(){
            $indicator.removeClass('active')
            if (active<=count*-100){
                 active = 0
                 $indicator = $indicator.siblings().first()
            }else{
                active = active - 100
                $indicator = $indicator.next()
            }
            $target.css('transform','translateX('+ active.toString() +'%)');
            $indicator.addClass('active')
        }
        setInterval(changes, '5000')
    }
    
    $(document).ready(tbanner_Handler)

}(jQuery);