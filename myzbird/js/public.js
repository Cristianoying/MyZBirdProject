//函数封装
//1.轮播图封装
//$imgs是轮播的图片
//$dots
//t 是时间
function lunbo($imgs,t,$dots){
	var index = 0;
	autoplay();
	var timer = setInterval(autoplay,t);
	function autoplay(){
		if (index >= $imgs.size()) {
			index = 0;
		}
		if ($dots) {
			$dots.eq(index).css("background","pink").siblings().css("background","");
		}
		console.log();
		// console.log($imgs.eq(index))
			$imgs.eq(index).fadeIn("slow").siblings().fadeOut("slow");
			// $imgs.eq(index).css("display","block").siblings().css("display","none");
			index++;
		}
}


//选项卡的封装
//
//$xxk 选项卡的划过标签集合
//$xxkdiv 显示的标签集合
function xxk($xxk,$xxkdiv,class1){
	$xxk.mouseenter(function() {
		 var index = $(this).index();
		 console.log(index)
		 // console.log($("#navbottom div").eq(index))
		$xxkdiv.eq(index).css("display","block").siblings(class1).css("display","none");
	})
	// .mouseleave(function() {
		// $xxkdiv.css("display","none");
	// });
}

