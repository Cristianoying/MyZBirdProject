//支持完美运动和前面的几个运动
//obj  代表 操作的元素
//json  代表要操作的多个属性和目标值
//callback  代表一个函数  当一个函数作为参数时，这样的参数叫做 回调函数
function startMove( obj , json , callback ){
	clearInterval( obj.timer );
	obj.timer = setInterval( function(){
		var flag = true;//假设值为 true时 可以停止定时器
		for( var attr in json ){
			var current = 0;//用于接收非行内元素样式值
			if( attr == "opacity" ){
				current = parseFloat( getStyle(obj,attr) ) * 100;
			}else if( attr == "zIndex" ){
				current = parseInt( getStyle(obj,attr) ) ;
			}else{
				current = parseInt( getStyle(obj,attr) ) ;//获取元素的实际样式值
			}
			
			var speed = (json[attr] - current)/10;
			speed = speed>0?Math.ceil(speed) : Math.floor(speed);
			if( json[attr] != current ){
				flag = false;//没有达到目标值  flag要做改变
			}
			
			//没有达到目标值 继续设置运动物体的样式改变
			if( attr == "opacity" ){
				obj.style["opacity"] = (current + speed)/100;
			}else if( attr == "zIndex" ){
				obj.style[attr] = json[attr];
			}else{
				obj.style[attr] = current + speed + "px";
			}
		}
			
		if( flag ){//达到目标值
			clearInterval( obj.timer );
			//进入到下一个动作（可变功能）
			if( callback ){
				callback();
			}
		}
	},30 )
}


//获取非行内元素样式值
//attr参数表示 样式属性
//obj  表示操作的元素
function getStyle(obj,attr){
	if( getComputedStyle ){
		return window.getComputedStyle(obj,false)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}