$(document).ready(function() {
   // do stuff when DOM is ready
   $('table').click(function(){
	   $(this).table2CSV();
	   //alert($(this).html());
	});
 });

