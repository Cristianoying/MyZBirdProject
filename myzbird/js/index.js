$(window).load(function(){

	var $gwc = $(".htright li").first(),
		$niaochao = $(".htright li").eq(2);
		$gwc.mouseenter(function(event) {
			$.ajax({
				type:"get",
				url:"",
				success:function(msg){
					console.log(msg);
				}
			})
		});		


	//nav选项卡
	$(".navxxk").mouseenter(function() {
		 var index = $(this).index();
		 // console.log($("#navbottom div").eq(index))
		$("#navbottom div").eq(index-1).css("display","block").siblings().css("display","none");
	}).mouseleave(function() {
		// $("#navbottom div").css("display","block");
	});
	$("#navbottom").mouseleave(function(){
		$("#navbottom div").css("display","none");
	});
	$(".headermiddle").mouseenter(function(){
		$("#navbottom div").css("display","none");
	})
	//轮播图
	{
		// console.log(index)
		$lunbos =$("#lunbo img");
		$lunbobt = $("#lunbo li");
		var index = 0;
		autoplay();
		var timer = setInterval(autoplay,3000);
		function autoplay(){
			if (index >= $lunbos.size()) {
				index = 0;
			}
			// console.log(index)
			$lunbobt.eq(index).addClass('on').siblings().removeClass();
			$lunbos.eq(index).addClass("active").fadeIn(800).siblings().not("ul,span").fadeOut(800).removeClass();
			index++;
		}
		$("#lunbo .leftbt").click(function(){
			clearInterval(timer);
			index = $("#lunbo .active").index();
			if (index == -1 ) {
				index =  $lunbos.size();
			}else{
				index--;
			}
			autoplay();
		});

		$("#lunbo .rightbt").click(function(){
			clearInterval(timer);
			index = $("#lunbo .active").index();
			if (index == $lunbos.size()-1 ) {
				index = 0;
			}else{
				index++;
			}
			autoplay();
		});

		$lunbobt.mouseenter(function() {
			index = $(this).index();
			clearInterval(timer);
			// console.log(index);
			autoplay();
		}).mouseleave(function() {
			timer = setInterval(autoplay,3000);
		});
		$lunbos.mouseenter(function() {
			clearInterval(timer);
			index = $(this).index();
			// console.log(index)
			// autoplay();
		}).mouseleave(function() {
			timer = setInterval(autoplay,3000);
		});
	

		}
	

// small banner 轮播图
	$imgs = $("#banner .bannerleft ul img");
	console.log($imgs);
	lunbo($imgs,2000);
	// lunbo($(".wdleft img"),2000,$(".wddots li"));
//右侧鼠标事件
	$(".imgflash").mouseenter(function(){
		$(this).stop().fadeTo(200,.8,function(){
			$(this).stop().fadeTo(200,1);
		})
	})
	// console.log($(".imgflash"));
//系列产品选项卡
{
	var $xxk = $("#seriesProduct .spheader a"),
		$xxkdiv = $("#seriesProduct .spbody");
		// console.log($xxk,$xxkdiv);
		xxk($xxk,$xxkdiv,".spbody");

	//轮播图
	// lunbo($xxk,1000,$xxkdiv)
	var ind = 0;
	var timer2 = setInterval(autoplay2,2000);
	// console.log(autoplay2)
	function autoplay2(){
		if (ind == $xxk.size()) {
			ind = 0;
		}
		$xxk.eq(ind).css("color","#000").siblings().css("color","#fff");
		$xxkdiv.eq(ind).css("display","block").siblings(".spbody").css("display","none");
		ind++;
	}
	$xxk.mouseenter(function(){
		clearInterval(timer2);
		ind = $(this).index();
		autoplay2();
	}).mouseleave(function(){
		ind = $(this).index();
		console.log(ind);
		$xxk.eq(ind).css("color","#000").siblings().css("color","#fff");
		timer2 = setInterval(autoplay2,2000);
	});
}
	

//婚戒推荐 & 全球美钻 运动
	var $rec = $("#recommend ul"),
		dis = $rec[0].children[0].offsetWidth;
		// console.log(dis)
	$("#recommend .recleft").click(function(){
		var nowleft = $rec[0].offsetLeft;
		console.log(nowleft);
		if (nowleft >= -882) {
			startMove($rec[0],{"left":nowleft-dis});
		}
		
	})
	$("#recommend .recright").click(function(){
		var nowleft = $rec[0].offsetLeft;
		console.log(nowleft);
		if (nowleft <= 0) {
			startMove($rec[0],{"left":nowleft + dis});
		}
		
	})

//地址选项卡下的轮播图
lunbo($(".wdleft img"),2000,$(".wddots li"));
//
//地址ajax
var $pos = $("#posi .province a");
// console.log($pos);
$pos.mouseenter(function(){
	var index = $(this).index();
	console.log(index);
	$.ajax({
		type:"get",
		url:"html/store.json",
		success:function(msg){
			var stores = msg["stores"][index];
			var str ='';
			for(var i = 0 ; i < stores.length ; i++){
				// console.log(stores[i]);
				str += `<a href="#" data-position="" >${stores[i]}</a>`;
			}
			$("#posi .storeright").html(str);
		}
	})
})
















})//onload 结束标签

	