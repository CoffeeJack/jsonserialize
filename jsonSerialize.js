/*********************
Version: 1.0
Creator: Vinny Tsui (aka CoffeeJack)
Comment: Use this plugin to quickly grab form fields into a JSON 
**********************/
(function ($) {
        $.fn.jsonSerialize = function(){
                var form = this;
        var inputs = $(this).find('input');
        var selects = $(this).find('select');
        var json = {};

        $.each(inputs,function(key,val){
                var type = $(val).attr("type");

                if($(val).attr("name")){
                        json[$(val).attr("name")] = $(val).val();
                }
                
        })

        $.each(selects,function(key,val){
                if($(val).attr("name")){
                        json[$(val).attr("name")] = $(val).val();
                }
        });

        return json;

        }
}( jQuery ));