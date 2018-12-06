	$(window).load(function(){
		// setCookie("username","wangying",1);
		showcart();
		$.ajax({
			type:"get",
			url:"http://10.9.26.196/phpmine/product.php",
			datatype:"jsonp",
			success:function(msg){
				var arr = JSON.parse(msg);
				var str = '';
				for(var i = 0 ; i < arr.length ; i++){
					str += `<li src=${arr[i].src} pid=${arr[i].pid} pname=${arr[i].pname} price=${arr[i].price}>
					<img src="http://10.9.26.196/MyZBirdProject/myzbird/img/${arr[i].src}">
					<p>名称：<span class="pname">${arr[i].pname}</span></p>
					<p>￥<span class="price">${arr[i].price}</span></p>
					<p>售出:<span class="sold">699</span>评论:<span class="comments">12</span></p>
					<p><input type="button" class="buy" value="购买" /></p>
					</li>`
				}
				$(".list").html(str);
			}
		})

		$(".list").on("click"," img",function(){
			location.href=`http://10.9.26.196/MyZBirdProject/myzbird/html/zj.html?pid=${$(this).parent("li").attr("pid")}`;
		});
		$(".list").on("click","input",function(){
			$(".gwclist").html(" ");
			var $img = $("<img>");
			$fa = $(this).parent().parent().find("img")
			$img.attr("src",$fa.attr("src"));
			$("body").append($img);
			$img.css({
				"width":20,
				"height":20,
				"position":"absolute",
				"left":$fa.offset().left,
				"top":$fa.offset().top
			});

			// console.log($(".gwc").offset().left,$(".gwc").offset().top)
			startMove($img[0],{
				"left":parseInt($(".gwc").offset().left)-10,
				"top":parseInt($(".gwc").offset().top+10)
			},function(){
				$img.remove();
				var flag = false;
				var pid = $fa.parent().attr("pid");
				var price = $fa.parent().attr("price");
				var pname = $fa.parent().attr("pname");
				var src = $fa.parent().attr("src")
				var arr =[];
				if (localStorage.prolist != "null") {
					var brr = JSON.parse(localStorage.prolist);
					for(var i = 0 ; i < brr.length ; i++){				
							if (brr[i].pid == pid) {
								// console.log(brr[i].count);
								brr[i].count++;
								// console.log(brr[i].count);
								flag = true;
							}
								arr.push(brr[i]);
								// console.log(brr[i].count);
					}
					// console.log(arr);
				}
				// console.log(flag);
			if (flag) {
				var str = JSON.stringify(arr);
				localStorage.prolist = str;
				showcart();
				return;
			}else{
				var json = {	
								"pid" : pid,
								"pname":pname,
								"count": 1,
								"price":price,
								"src":src
							}
				arr.push(json);
			}
			var str = JSON.stringify(arr);
			localStorage.prolist = str;
			showcart();
			}.bind(this))
		});




























	})
