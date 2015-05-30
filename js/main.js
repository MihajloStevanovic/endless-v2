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

	headerHeight: function(){

		var windoweight = $(window).height();
		$('#header').css('height',windoweight+'px');
		$('#header').css('line-height',windoweight+'px');

		console.log(windoweight);

	},

	init :function(){
		this.navigationScroll()
		this.headerHeight()
	}

}

$(document).ready(function(){
	ES.init()
})