document.addEventListener("DOMContentLoaded",(function(){({delay:12,_x:0,_y:0,endX:window.innerWidth/2,endY:window.innerHeight/2,cursorVisible:!0,cursorScaled:!1,$outline:document.querySelector(".cursor-dot"),init:function(){this.outlineSize=this.$outline.offsetWidth,this.setupEventListeners(),this.animateDotOutline()},setupEventListeners:function(){var e=this;document.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), summary").forEach((function(t){t.addEventListener("mouseover",(function(){e.cursorScaled=!0,e.toggleCursorSize()})),t.addEventListener("mouseout",(function(){e.cursorScaled=!1,e.toggleCursorSize()}))})),document.querySelectorAll("a[data-hover-text]:not([disabled])").forEach((function(t){t.addEventListener("mouseover",(function(){e.cursorScaled=!0,e.toggleCursorSizeHoverText(),e.$outline.dataset.hovering="text",e.$outline.innerHTML="<span>"+t.dataset.hoverText+"</span>"})),t.addEventListener("mouseout",(function(){e.cursorScaled=!1,e.toggleCursorSizeHoverText(),e.$outline.dataset.hovering="",e.$outline.innerHTML=""}))})),document.addEventListener("mousedown",(function(){e.cursorScaled=!0,e.toggleCursorSize()})),document.addEventListener("mouseup",(function(){e.cursorScaled=!1,e.toggleCursorSize()})),document.addEventListener("mousemove",(function(t){e.cursorVisible=!0,e.toggleCursorVisibility(),e.endX=t.clientX||t.pageX,e.endY=t.clientY||t.pageY})),document.addEventListener("mouseenter",(function(t){e.cursorVisible=!0,e.toggleCursorVisibility()})),document.addEventListener("mouseleave",(function(t){e.cursorVisible=!0,e.toggleCursorVisibility()}))},animateDotOutline:function(){this._x+=(this.endX-this._x)/this.delay,this._y+=(this.endY-this._y)/this.delay,this.$outline.style.top=this._y/16-7.5+"rem",this.$outline.style.left=this._x/16+7.5+"rem",requestAnimationFrame(this.animateDotOutline.bind(this))},toggleCursorSize:function(){this.cursorScaled?this.$outline.style.transform="translate(-50%, -50%) scale(.0666)":this.$outline.style.transform="translate(-50%, -50%) scale(.1)"},toggleCursorSizeHoverText:function(){this.cursorScaled?this.$outline.style.transform="translate(-50%, -50%) scale(1)":this.$outline.style.transform="translate(-50%, -50%) scale(.1)"},toggleCursorVisibility:function(){this.cursorVisible?this.$outline.style.opacity=.75:this.$outline.style.opacity=0}}).init()}),!1);