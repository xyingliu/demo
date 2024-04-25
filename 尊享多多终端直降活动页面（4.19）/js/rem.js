(function(designWidth, maxWidth) {
	var doc = document,
		win = window,
		docEl = doc.documentElement,
		remStyle = document.createElement("style"),
		tid;
 
	function refreshRem() {
		var width = docEl.getBoundingClientRect().width;//屏幕宽度
		maxWidth = maxWidth || 540;//设置最大宽度
		width < 800  && (width = 800);//设置最小宽度
		width > maxWidth && (width = maxWidth);
		var rem = width * 100 / designWidth;//屏幕宽度 / 设计稿宽度 * 100，若为电脑运行，此时rem=100
		remStyle.innerHTML = 'html{font-size:' + rem + 'px;}'//此时重新定义html根元素大小为1rem，即100px
	}
 
	if (docEl.firstElementChild) {
		docEl.firstElementChild.appendChild(remStyle);
	} else {
		var wrap = doc.createElement("div");
		wrap.appendChild(remStyle);
		doc.write(wrap.innerHTML);
		wrap = null;
	}
	//要等 wiewport 设置好后才能执行 refreshRem，不然 refreshRem 会执行2次；
	refreshRem();
	win.addEventListener("resize", function() {
		clearTimeout(tid); //防止执行两次
		tid = setTimeout(refreshRem, 300);
	}, false);
 
	win.addEventListener("pageshow", function(e) {
		if (e.persisted) { // 浏览器后退的时候重新计算
			clearTimeout(tid);
			tid = setTimeout(refreshRem, 300);
		}
	}, false);
 
	if (doc.readyState === "complete") {
		doc.body.style.fontSize = "16px";
	} else {
		doc.addEventListener("DOMContentLoaded", function(e) {
			doc.body.style.fontSize = "16px";
		}, false);
	}

	
})(375, window.screen.width);//此处传入设计稿宽度及最大宽度


