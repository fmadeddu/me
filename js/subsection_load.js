(function($){
    $('.subSectionToLoad').each(function(i, obj) {
        //others         
        var htmlSection = "subsections/"+obj.id+".html";
        console.log(htmlSection + " loaded")
        $(obj).load(htmlSection)
    });
})(jQuery);