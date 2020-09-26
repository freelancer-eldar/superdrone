$(document).ready(function(){

	function parallax(c,l){
		$(c).css("top",l+"px");
	};
	parallax(".page__bgi",Math.round(window.pageYOffset/7));
	window.addEventListener("scroll",function (event){
		let py = window.pageYOffset;
		parallax(".page__bgi",Math.round(py/7));
	});

	$(".burger").on("click",function(){
		$(this).toggleClass("active");
		$("body").toggleClass("lock");
	});
});