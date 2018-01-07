var objBel = {
	init: function(){
		objBel.sliderHome();
		console.log("Probando...");
	},
	sliderHome: function(){
		$(".slider-promocion").slick({
			slidesToShow:1,
			slidesToScroll:1,
			autoplay:true,
			autoplaySpeed:5000
		});
	},
	/*LLamados de modal de pruebas*/
	oneModal: function(){
		$('#oneModal').modal({
			backdrop: false,
			show: true,
			keyboard: false
		});
	},
	twoModal: function(){
		$('#twoModal').modal({
			backdrop: false,
			show: true,
			keyboard: false
		});
	},
	threeModal: function(){
		$('#threeModal').modal({
			backdrop: false,
			show: true,
			keyboard: false
		});
	},
	fourModal: function(){
		$('#fourModal').modal({
			backdrop: false,
			show: true,
			keyboard: false
		});
	},
	fiveModal: function(){
		$('#fiveModal').modal({
			backdrop: false,
			show: true,
			keyboard: false
		});
	},
	sixModal: function(){
		$('#sixModal').modal({
			backdrop: false,
			show: true,
			keyboard: false
		});
	},
	sevenModal: function(){
		$('#sevenModal').modal({
			backdrop: false,
			show: true,
			keyboard: false
		});
	},
	eightModal: function(){
		$('#eightModal').modal({
			backdrop: false,
			show: true,
			keyboard: false
		});
	}
	/*End*/
}
$(document).ready(function(){
	objBel.init();
});