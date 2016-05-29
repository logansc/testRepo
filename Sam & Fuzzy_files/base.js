$(function()
{
	var toc = $("#toc");
    
    $("#toc-rollover")
        .click( function() {
            toc.toggle(500);
        });

	$("#toc ul.volumes li").each(function()
	{
		var t = $(this);
		t.click(function()
		{
			if(t.hasClass("open"))
			{
				t.children("ol.chapters").slideUp(500, function() { t.removeClass("open"); });
			}
			else
			{
				t.children("ol.chapters").slideDown(500, function() { t.addClass("open"); });
			}
		});
	});
    
    $(window).bind("load", function() {
        var sidebar = $("#site > .container > .column.sidebar");
        var content = $("#site > .container > .column.content");
        
        if(content.height() < sidebar.height())
        {
            content.css({ 'min-height': sidebar.height()});
        }
    });
});