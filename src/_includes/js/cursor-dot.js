document.addEventListener("DOMContentLoaded",(function(){({delay:12,_x:0,_y:0,endX:window.innerWidth/2,endY:window.innerHeight/2,cursorVisible:!0,cursorEnlarged:!1,$outline:document.querySelector(".cursor-dot"),init:function(){this.outlineSize=this.$outline.offsetWidth,this.setupEventListeners(),this.animateDotOutline()},setupEventListeners:function(){var t=this;document.querySelectorAll("a, button, summary").forEach((function(e){e.addEventListener("mouseover",(function(){t.cursorEnlarged=!0,t.toggleCursorSize()})),e.addEventListener("mouseout",(function(){t.cursorEnlarged=!1,t.toggleCursorSize()}))})),document.addEventListener("mousedown",(function(){t.cursorEnlarged=!0,t.toggleCursorSize()})),document.addEventListener("mouseup",(function(){t.cursorEnlarged=!1,t.toggleCursorSize()})),document.addEventListener("mousemove",(function(e){t.cursorVisible=!0,t.toggleCursorVisibility(),t.endX=e.clientX||e.pageX,t.endY=e.clientY||e.pageY})),document.addEventListener("mouseenter",(function(e){t.cursorVisible=!0,t.toggleCursorVisibility(),t.$outline.style.opacity=1})),document.addEventListener("mouseleave",(function(e){t.cursorVisible=!0,t.toggleCursorVisibility(),t.$outline.style.opacity=0}))},animateDotOutline:function(){this._x+=(this.endX-this._x)/this.delay,this._y+=(this.endY-this._y)/this.delay,this.$outline.style.top=this._y/16+"rem",this.$outline.style.left=this._x/16+"rem",requestAnimationFrame(this.animateDotOutline.bind(this))},toggleCursorSize:function(){this.cursorEnlarged?this.$outline.style.transform="translate(-50%, -50%) scale(.666)":this.$outline.style.transform="translate(-50%, -50%) scale(1)"},toggleCursorVisibility:function(){this.cursorVisible?this.$outline.style.opacity=.75:this.$outline.style.opacity=0}}).init()}),!1);