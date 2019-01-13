(function($){
    // Sections       
    $('.portfolio-modal').each(function(i, obj) {
        //portfolio         
        var portfolioItemHtml = "subsections/portfolio/"+obj.id+".html";
        console.log(portfolioItemHtml + " loaded")
        $(obj).load(portfolioItemHtml)
    });
})(jQuery);