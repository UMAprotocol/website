/**	
 *  Handle smooth scrolling to element in other page
 */

function scrollToProjects() {
  let hashcode = window.location.hash;

  if(hashcode) {
	  $('html,body').animate({
	  	scrollTop: $(hashcode).offset().top
	  }, 600);
  }
}

scrollToProjects();