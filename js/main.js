var objBel = {
	init: function(){
		console.log("Probando...");
	},
	/*LLamados de modal de pruebas*/
	oneModal: function(){
		$('#oneModal').modal('show');
	},
	twoModal: function(){
		$('#twoModal').modal('show');
	},
	threeModal: function(){
		$('#threeModal').modal('show');
	},
	fourModal: function(){
		$('#fourModal').modal('show');
	},
	fiveModal: function(){
		$('#fiveModal').modal('show');
	},
	sixModal: function(){
		$('#sixModal').modal('show');
	},
	sevenModal: function(){
		$('#sevenModal').modal('show');
	}
	/*End*/
}
$(document).ready(function(){
	objBel.init();
});