// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('#createnewdiary').click(sendEvent)
	function sendEvent (e) {
		ga("send", "event", "createnewdiary", "click");
	}
}

jQuery(function($) {
	if($(".swipebox").length > 0) {
	  $('.swipebox').swipebox();
	}
});


$(document).ready(function(){
  if($(".twentytwenty-container").length > 0) {
    $('.twentytwenty-container').twentytwenty();
  }
  
});


function swapButton() {
    var b = $('#button');
    b.text('Done');
    b.buttonMarkup({ icon: "check" });
    b.button('refresh');
}