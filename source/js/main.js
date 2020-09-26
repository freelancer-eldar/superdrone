$(document).ready(function(){
	window.addEventListener("scroll",function (event){
		let py = window.pageYOffset;
		console.log(py/25+100);
		$(".page").css("background-size",(py/25+100)+"% 100%");
	});
});