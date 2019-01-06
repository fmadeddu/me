$(function(){
    <!-- Portfolio Items -->          
    $('.portfolio-modal').each(function(i, obj) {
        //portfolio         
        var portfolioItemHtml = "subsections/portfolio/"+obj.id+".html";
        console.log(portfolioItemHtml + " loaded")
        $(obj).load(portfolioItemHtml)
    });
    <!-- Sections -->          
    $('.sectionToLoad').each(function(i, obj) {
        //others         
        var htmlSection = "subsections/"+obj.id+".html";
        console.log(htmlSection + " loaded")
        $(obj).load(htmlSection)
    });
}); 