class Drag {
	constructor (opt) {
		this.opt = opt
		this.iNode = document.querySelector(opt.id);
		this.boxX = 0;//鼠标距离div左部的距离
		this.boxY = 0;//鼠标距离div顶部的距离
		this.moveX = 0;//div-Left距离屏幕左部的距离
		this.moveY = 0;//div-Top距离屏幕顶部的距离
		this.pinX = document.querySelector(opt.based).offsetWidth - this.iNode.offsetWidth;//屏幕减去div的宽度
		this.pinY = document.querySelector(opt.based).offsetHeight - this.iNode.offsetHeight;//屏幕减去div的高度
		this.downt();
		this.mouseUp();
	}
	downt(){
		this.iNode.onmousedown = (e) =>{
			var ev = e || event;
			//鼠标始终在div中间
			this.boxX = this.iNode.offsetWidth / 2; 
			this.boxY = this.iNode.offsetHeight / 2;
			//鼠标点在div哪里就在哪里
			//this.boxX = ev.clientX - this.iNode.offsetLeft; 
			//this.boxY = ev.clientY - this.iNode.offsetTop;
			this.mouseMove();
		}
	}
	mouseMove(){
		document.onmousemove = (e) =>{
			var ev = e || event;
			this.moveX = ev.clientX - this.boxX ;
			this.moveY = ev.clientY - this.boxY ;
			
			this.opt.unTop == false ? this.moveY <= 0 ? this.moveY = 0 : this.moveY : false;
			this.opt.unLeft == false ? this.moveX <= 0 ? this.moveX = 0 : this.moveX : false;
			this.opt.unRight == false ? this.moveX >= this.pinX ? this.moveX = this.pinX : this.moveX : false;
			this.opt.unBottom == false ? this.moveY >= this.pinY ? this.moveY = this.pinY : this.moveY :false;
			
			this.iNode.style.left = this.moveX + 'px'
			this.iNode.style.top = this.moveY + 'px'
		}
	}
	mouseUp(){
		document.onmouseup = () =>{
			document.onmousemove = false
		}
	}
}
new Drag({
	"id":"#box",
	"based":"#layer",
	"unTop":false,
	"unLeft":false,
	"unRight":false,
	"unBottom":false
});