$(function(){
      	$('.content-body').slimScroll({
          height: '680px',
          width:'inherit'
        });

        $("pre code").each(function(){
                var html = $(this).html();
                var pattern = html.match(/\s*\n[\t\s]*/);
                $(this).html(html.replace(new RegExp(pattern, "g"),'\n'));
            });
});