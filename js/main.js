var ES = {

	navigationScroll :function(){
		
		$(window).scroll(function(){
			if ($(window).scrollTop() > 80) {
				$('#nav').addClass('light');
			}
			else {
				$('#nav').removeClass('light');
			}
		})

	},

	init :function(){
		this.navigationScroll()
	}

}

$(document).ready(function(){
	ES.init()
})