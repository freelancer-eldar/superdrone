$(document).ready(function(){
	function parallax(c,l){
		$(c).css("top",l+"px");
	};
	parallax(".page__bgi",Math.round(window.pageYOffset/7));
	window.addEventListener("scroll",function (event){
		let py = window.pageYOffset;
		parallax(".page__bgi",Math.round(py/5));
	});

	$(".burger").on("click",function(){
		$(".burger,.nav").toggleClass("active");
		$("body").toggleClass("lock");
	});
	
	var addLogin = false;
	function addLinks(ww){
		if (ww<=600 && !addLogin){
			addLogin = true;
			var links = $(".header__column:last-child").html();
			console.log(addLogin);

			document.querySelector(".nav").innerHTML+="<div class=\"link-row df\">"+links+"</div>";
		};
	};
	addLinks(window.innerWidth);
	window.addEventListener("resize",function(){
		let ww = window.innerWidth;

		addLinks(ww);
	});
});