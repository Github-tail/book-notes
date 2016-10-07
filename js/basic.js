
function addEvent(obj, type, fn){
	if(obj.addEventListener){
		obj.addEventListener(type, fn, false);
	}else if(obj.attachEvent){
		obj.attachEvent('on' + type, function(){
			fn.call(obj);
		});
	}
}

function removeEvent(obj, type, fn){
	if(obj.removeEventListener){
		obj.removeEventListener(type, fn, false);
	}else if (obj.detachEvent){
		obj.detachEvent('on' + type, fn);
	}
}

function preDef(evt){
	var e = evt || window.event;
	if(e.preventDefault){
		e.preventDefault();
	}else{
		e.returnValue = false;
	}
}


function getTarget(evt){
	if(evt.target){		//W3C
		return evt.target;
	}else if(window.event.srcElement){	//IE
		return window.event.srcElement;
	}
}


function getCharCode(evt){
	var e = evt || window.event;
	if(typeof e.charCode == 'number'){
		return e.charCode;
	}else{
		return e.keyCode;
	}
}