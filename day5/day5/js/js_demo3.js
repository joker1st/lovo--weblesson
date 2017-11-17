/* 	console.log(9/2.5);
	console.log(1/3);
	console.log(1.3*1.4);
	console.log(10-5);
	console.log(10+5);
	console.log(10+"5");
	console.log(10-"5");
	console.log("10"-"5");
	console.log("10"==10);
	console.log("10"===10);
	console.log("3"*"4");
	console.log(isNaN("五"*"六"));//类型转换错误 NaN
	//alert('0');
	console.log("alert('0')"); */
	//解释执行一段字符串
	//eval("alert('0')");  
	function awe(){
		//如何获取到html文档中元素标签？  document.getElementById("id")
		var awer = document.getElementById("awer");
		console.log(awer);
		//awer.innerHTML="碧";
		awer.innerText="碧";
		//使用JS控制元素对象(元素节点)的样式   style="font-size: 50px;color: red;"
		awer.style.fontSize="50px";
		awer.style.color="red";
		awer.style.backgroundColor="rgba(0,0,255,0.5)";
	}
	
	var current;//指向正在展开的div
	
	function isDisplay(obj){
		//根据传来的Id获取到id对应的元素标签对象
		var node = document.getElementById(obj);
		//判断如果是隐藏就显示，如果显示就隐藏
		if(node.style.display=="none"){
			node.style.display="block";
			
			if(current==undefined){
				current=node;
			}else {
				//把原来显示的div隐藏
				if(node!=current){
					current.style.display="none";
					//把正在显示的div赋值给current
					current=node;
				}
				
			}
		}else{
			node.style.display="none";
		}
	}
	var x=20;
	function changeWidth(){
		x++;
		var node = document.getElementById("div6");
		//window.setTimeout("方法名",时间);经过 指定的时间(单位是毫秒)执行指定方法
		node.style.width=x+"px";
		window.setTimeout("changeWidth()",100);
	}
	//点击一次 宽和高都增加50px.

	function getBigger(){
		//先获取div的宽和高，再让宽和高加50px，再赋值给div的宽和高
		var node = document.getElementById("div7");
		//JS对象.style 没有在JS中设置对象的样式属性值时，只能获取到内联式的样式属性值
		//node.style.width=100+"px";
		console.log(node.style.width);
		var w = parseInt(node.style.width);
		w=w+50;
		var h = parseInt(node.style.height);
		h=h+50;	
		node.style.width=w+"px";
		node.style.height=h+"px";
	}
	
	function chan(){
		//点击改变图片
		var node = document.getElementById("img1");
		console.log(node.src);
		node.src="img/aa.gif";
	}
	
	
	
	
	