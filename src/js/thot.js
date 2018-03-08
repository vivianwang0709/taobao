+function($){
    'use strict';
    console.log('thot')

    const thot_Handler = function(){
        const $this = $('[data-template-name="thot"]').find('[layer="5"]')
        let $h = $this.children().eq(0)
        let $m = $this.children().eq(2)
        let $s = $this.children().eq(4)
        let h='01',m='00',s='00'
        
        if(h=='00' & m=='00' & s=='00')
        //var interval 
    }

    $(document).ready(thot_Handler)

}(jQuery);