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

	displayMobileNav :function(){

		$('.fa-bars').on('click', function(){
			console.log('tst');
			$('#nav ul ').toggleClass('open');
		})
	},

	init :function(){
		this.navigationScroll()
		this.headerHeight()
		this.displayMobileNav()
	}

}

$(document).ready(function(){
	ES.init()
})