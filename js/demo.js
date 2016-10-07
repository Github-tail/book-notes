
/*
 * code write by yt 5/10/2016
 * 
 */
/*
var box = {
	'name':'yt',
	'age':21,
	'height':171,
	'fn':function(){}
};

for (var p in box) {
	alert(p);
}


for (var i=0;i<=10;i++) {
	if(i == 5) continue; //continue 是退出当前循环 
	document.write(i);
	document.write('<br/>');
}

for (var i=0;i<=10;i++) {
	if(i == 5) break; //break到5就退出整个循环
	document.write(i);
	document.write('<br/>');
}

function box(){
	return arguments[4] + '|' +arguments[5];//arguments 可以传递参数
}

alert(box(0,1,2,3,4,5,6));


function box(){
	return arguments.length;//arguments有length属性
}

alert(box(0,1,2,3,4,5,6));

function box(){
	var sum = 0;
	if(arguments.length == 0) return sum;
	for (var i=0;i<arguments.length;i++) {
		sum = sum + arguments[i];
	}
	return sum;
}

alert(box(2,4,5));//11

//函数不重载
function box(num){
	return num +100;
}
function box(num){
	return num +200;
}
alert(box(50));//250，执行第二个box()函数

//给对象创建方法
var box ={
	name:'yt',
	age:18,
	run:function(){
		return '运行';
	}
}
alert(box.run());//运行
delete box.name;//删除box中name属性
alert(box.name);//undefined


function box(obj){//参数是一个对象
	if(obj.name != undefined) alert(obj.name);
	if(obj.age != undefined) alert(obj.age);
}

box({ //调用函数传递一个对象
	name:'yt',
	age:18
});

var box = new Date();
//alert(box);
//alert(Date.parse('5/10/2016'));
//alert(box.getTime());
//alert(box.setTime(100));
alert(box.getMonth());

//var pattern = new RegExp('box','i');
var pattern = /box/i;
var str =' This is a Box!';
alert(pattern.test(str));//返回true	

//var pattern = new RegExp('box','i');
var pattern = /box/i;
var str =' This is a Box!';
alert(pattern.exec(str));//返回Box	

var box = new Function('num1','num2','return num1+num2');
alert(box(1,2));//3
alert(typeof box);// function

var box = function(sum,num){
	return sum(num);
}

function sum(num){
	return num +10;
}
var result = box(sum,10);
alert(result);

//阶乘，递归
function box(num){
	if(num<=1){
		return 1;
	}else{
		return num * box(num -1);
	}
}

alert(box(4));//24
alert(box(1));

//this
//alert( typeof window); //window表示全局
//alert(this); //this表示的是window
alert(typeof this);

var color = 'red';//color为全局变量
//alert(window.color);
alert(this.color);

window.color = "red";//相当于var color = 'red'
//alert(this.color);

var box = {
	color:'blue',
	sayColor:function(){
		alert(this.color);//red
	}
}
alert(this.color);//blue
box.sayColor();

function box(name,age){
	return name + age;
}
alert(box.length);

function box(name,age){
	return name + age;
}
function sum(name,age){
	return box.apply(this,[name,age]);//apply可以冒充另外一个函数
}

function sum2(name,age){
	return box.apply(this,arguments);
}
alert(sum(10,10));
alert(sum2(10,10));

function sum(num1,num2){
	return num1+num2;
}
function sum2(num1,num2){
	return sum.call(this,num1,num2);//call只是传递参数不同，其他的跟apply是一样的
}

alert(sum2(10,10));

var color = 'red'; //全局
var box = {
	color:'blue', //局部
};

function sayColor(){
	alert(this.color); //red
}
sayColor(); //全局
sayColor.call(window); //冒充window，red
sayColor.call(this); //red
sayColor.call(box);//blue call冒充访问到了box作用域

var box = new Object();
box.name ='yt';
alert(box.name);

var box = 'yt';
box.age = 18;
alert(box.age);//undfind

var box = 'yt';
var box2 = box;

//alert(box2);//yt
//alert(box);//yt
box2 = 'kkk'; //基本类型保持独立，box2修改不会影响box
alert(box2);//kkk
alert(box);//yt

var box = new Object();
box.name = 'yt';
var box2 = box;
box2.name = 'kkk'; //因为他们都指向同一个object，同一个name，所以不管改变谁，大家都一起改变
alert(box2.name);//kkk
alert(box.name);//kkk

function box(num){ //按值传递
	num +=10;
	return num;
}
var num =50;
alert(box(num));//60 
alert(num);//50

function box(obj){ //传递一个引用类型的参数，但不是按引用传递，是按值传递
	obj.name = 'yt';
	var obj = new Object();
	obj.name = 'kkk'; //js没有传递引用的功能
}
var obj = new Object();

box(obj);
alert(obj.name);//yt


//instanceof操作符检测是什么类型的对象
var box = [1,2,3,4];
alert(box instanceof Array);//true
var box2 = {};
alert(box2 instanceof Object);//true
var box3 = /g/;
alert(box3 instanceof RegExp);//true

var box = 'yt';
function setBox(){
	function setColor(){
		return 123;
	}
	return setColor(); //将123值调用出去
}
alert(setBox());

var box = 'Mr. Yu';
//alert(box.constructor);
//alert(box.charAt(1));
alert(box.charCodeAt(4));

//返回5~10之间的随机数
function select(start,end){
	var total = end - start +1;
	return Math.floor(Math.random()*total + start);
}

for (var i=0;i<10;i++) {
	document.write(select(5,10));
	document.write('<br/>');
}

var box = new Object();
box.name = 'yt';
box.age = 100;
box.run = function(){
	return this.name + this.age +'运行中..';
};

alert(box.run());
alert(this);//[object window]
alert(this.name);//空

//普通模式
var box = new Object();
box.name = 'yt';
box.age = 100;
box.run = function(){
	return this.name + this.age +'运行中..';
};

var box2 = new Object();
box2.name = 'tt';
box2.age = 200;
box2.run = function(){
	return this.name + this.age +'运行中..';
};
alert(box.run());
alert(box2.run());

//工厂模式
function createObject(name,age){
	var obj = new Object();
	obj.name = name;
	obj.age = age;
	obj.run = function(){
		return this.name + this.age + '运行中..';
	};
	return obj; //最后一定要返回这个obj
}
//他们都是object的实例
var box1 = createObject('yt',100);
var box2 = createObject('tt',200);
//alert(box1.run());
//alert(box2.run());
//alert(typeof box1);//object
//alert(typeof box2);
//alert(box1 instanceof Object);//true
//alert(box2 instanceof Object);//true

//构造函数
function Box(name,age){
	this.name = name;
	this.age = age;
	this.run = function(){
		return this.name + this.age + '运行中..';
	};
}
var box1 = new Box('yt',100);
var box2 = new Box('tt',200);
//alert(box1.run());
//alert(box2.run());
//alert(box1 instanceof Object);
alert(this.name);

//构造函数
function Box(name,age){
	this.name = name; //实例属性
	this.age = age;
	this.run = function(){  //实例方法
		return this.name + this.age + '运行中..';
	};
}
var o = new Object();
Box.call(o,'yt',100); //对象冒充的方法
alert(o.run());

//review构造函数
function Box(name,age){
	this.name = name;
	this.age = age;
	this.run = function(){
		return this.name + this.age + '运行中';
	};
}

//原型
function Box(){};
Box.prototype.name = 'yt'; //原型属性
Box.prototype.age = 100;   //原型属性
Box.prototype.run = function(){   //原型方法
	return this.name + this.age + '运行中';
}

var box1 = new Box();
var box2 = new Box();
//alert(box1.name); //yt
//alert(box1.run());
//alert(box1.prototype); //undefind 这个属性是一个对象，访问不到
//alert(box1.__proto__); //object object 这个属性是一个指针指向prototype原型对象
//alert(box1.constructor); 	//构造属性，可以获取构造函数本身
							//作用是被原型指针定位，然后得到构造函数本身
alert(Box.prototype.isPrototypeOf(box1)); //true

//使用字面量的方式创建原型对象
function Box(){};
Box.prototype = {
	constructor:Box, //强制指向Box
	name:'yt',
	age:100,
	run:function(){
		return this.name + this.age + '运行中';
	}
};
var box = new Box();
//alert(box.run()); // 可以成功执行
alert(box.constructor == Box); //true

//内置引用类型的功能扩展
String.prototype.addstring = function(){
	return this +'，被添加了！';
}
var box = 'yt';
alert(box.addstring());

//组合构造函数+原型模式
function Box(name, age) {  //不共享的使用构造函数
	this.name = name;
	this.age = age;
	this. family = ['父亲', '母亲', '妹妹'];
};
Box.prototype = {	 //共享的使用原型模式
	constructor : Box,
	run : function () {
		return this.name + this.age + this.family;
	}
};
//声明一个对象时，构造函数+原型部分让人感觉又很怪异

//动态原型模式
function Box(name ,age) {	//将所有信息封装到函数体内
	this.name = name;
	this.age = age;
	
	if (typeof this.run != 'function') {	//仅在第一次调用的初始化,判断run方法是否存在
		Box.prototype.run = function () {
			return this.name + this.age + '运行中...';
		};
	}
}

var box1 = new Box('yt', 100);
alert(box1.run());
var box2 = new Box('tt', 100);
alert(box2.run());
//当第一次调用构造函数时，run()方法发现不存在，然后初始化原型。
//当第二次调用，就不会初始化，并且第二次创建新对象，原型也不会再初始化了。这样及得到了封装，又实现了原型方法共享。

//继承
function Box() {	//Box构造 爷爷
	this.name = 'yt';
}

function Desk() {	//Desk构造 父亲
	this.age = 100;
}

Desk.prototype = new Box();	//Desk继承了Box，通过原型，形成链条

var desk = new Desk();
alert(desk.age);
alert(desk.name);	/得到被继承的属性

function Table() {	//Table构造 孙子
this.level = 'tt';
}							

Table.prototype = new Desk();//继续原型链继承

var table = new Table();
alert(table.name);	//继承了Box和Desk

//使用对象冒充继承(借用构造函数)
function Box(name,age){
	this.name = name;
	this.age = age;
}
function Desk(name,age){
	Box.call(this,name,age);  //对象冒充,对象冒充只能继承构造里的信息
}

var desk = new Desk('yt',100);
alert(desk.name); //yt

//把匿名函数赋值给变量
var box = function(){
	return 'yt';
};
alert(box());

//通过自我执行匿名函数
(function(){
	alert('yt');
})();

//将匿名函数自我执行的值赋给变量
var box = (function(){
	return ('yt');
})();
alert(box);

//在函数内部放一个匿名函数
function box(){
	return function(){  //闭包
		return 'yt';
	};
}
alert(box()());

//使用闭包进行累加
function box(){
	var age = 100;
	return function(){
		age++;
		return age;
	};
}

var b = box();
alert(b());//101
alert(b());//102
alert(b());//103
alert(b());//104
b = null; //解除引用，等待垃圾回收
alert(b());//不存在了

function Box(){
	var age = 100;	//私有变量
	function run(){ //私有函数
		return '运行中...';
	}
	this.get = function(){	//对外公共的特权方法
		return age + run();
	};
}

var box = new Box();
alert(box.get());

//通过构造方法传参来访问私有变量
function Person(value){
	var user = value;
	this.getUser = function(){
		return user;
	};
	this.setUser = function(value){
		user = value;
	};
}

(function(){
	var user = '';
	Person = function (value){				
		user = value;
	};
	Person.prototype.getUser = function(){
		return user;
	};
	Person.prototype.setUser = function(value){
		user = value;
	}
})();

var box = function(){
	var age = 100;
	function run(){
		return '运行中..';
	}
	return {
		go:function(){
			return age + run();
		}
	};
}();

confirm('请确定或者取消');			
if (confirm('请确定或者取消')) {			
	alert('您按了确定！');					
} else {
	alert('您按了取消！');			
}

open('http://www.baidu.com','_parent');

//alert(typeof window.screenLeft); //火狐不支持这两个属性
//alert(typeof window.screenTop);
//alert(typeof window.screenX);

//跨浏览器操作
var leftX = typeof window.screenLeft == 'number' ?window.screenLeft : window.screenX;
alert(leftX);

//窗口页面大小
//alert(window.innerWidth);
//alert(window.innerHeight);
alert(window.outerWidth);
alert(window.outerHeight);

alert(document.documentElement.clientHeight);

var num = 0;
var max = 5;
setInterval(function(){
	num++;
	if(num == max){
		clearInterval(this);
		alert('5秒到了');
	}
},1000);

//定时器
var num = 0;
var max = 5;
function box() {
	num++;
	if (num == max) {
		alert('5秒后结束！');
	} else {
		setTimeout(box, 1000);
	}
}
setTimeout(box, 1000);

location.href = 'http://www.baidu.com';

//alert(navigator.appName);

//alert(navigator.userAgent);

alert(navigator.appVersion);

var box = document.getElementById('box');
//alert(box);
//alert(box.tagName);
//alert(box.innerHTML);
//alert(box.className);
alert(box.bbb); //自定义属性，非IE获取不到

var li = document.getElementsByTagName('li');
//alert(li);
//alert(li.length);
alert(li[0].innerHTML);

var body = document.getElementsByTagName('body')[0];
alert(body);

var all = document.getElementsByTagName('*');
//alert(all.length);
alert(all[0].innerHTML);

var box = document.getElementById('box');
//alert(box.nodeName);
//alert(box.nodeType);
alert(box.nodeValue);

var box = document.getElementById('box');
box.className = 'bbb';

//内联模型
<input type="button" value="按钮" onclick="alert('yt');" />
function box(){
	alert('yt');
}

try{
	window.abcedf();
}catch(e){
	alert(e);
}

alert('');

new Array(-5);
console.error('错误！');		//红色带叉
console.info('信息！');		//白色带信息号
console.log('日志！');		//白色
console.warn('警告！');		//黄色带感叹号

//alert(typeof document.cookie); //string
//向本地写入cookie
var date = new Date();
date.setDate(date.getDate() + 7);
document.cookie = 'user ='+ '余涛' + ';expires=' + date;
alert(document.cookie);

//json简单值,都不会报错
10
"json"

var box = {
	name:'yt',
	age:100
}
alert(box.name);

//json对象表示
'{"name":"yt","age":100}'

//最常用的json结构:数组与对象结合
//json其实就是字符串，所以要加双引号
[
	{
		"title":"a",
		"num":1
	},
	{
		"title":"b",
		"num":12
	},
	{
		"title":"c",
		"num":13
	}
]

//将原生值转换成json字符串
var box = [
			{
				title:'a',
				num:1
			},
			{
				title:'b',
				num:2
			},
			{
				title:'c',
				num:3
			}
		];
var json = JSON.stringify(box);
console.log(json);//[{"title":"a","num":1},{"title":"b","num":2},{"title":"c","num":3}]

//stringify()可以传两个参数，第二个参数可以限制你输出的范围
var box = [
			{
				title:'a',
				num:1,
				height:188
			},
			{
				title:'b',
				num:2,
				height:177
			}
		];
var json = JSON.stringify(box,['num','height']);
console.log(json);//[{"num":1,"height":188},{"num":2,"height":177}]，title被参数过滤了

//第二个参数传了一个函数
var box = [
			{
				title:'a',
				num:1,
				height:188
			},
			{
				title:'b',
				num:2,
				height:177
			}
		];
var json = JSON.stringify(box,function(key,value){
	if(key == 'title'){
		return ('Mr.'+value);
	}else{
		return value;
	}
});
alert(json);

//第二个参数可以省略null，第三个参数是缩进文本用的，文本较多的时候用
var box = [
			{
				title:'a',
				num:1,
				height:188,
				toJSON:function(){
					return this.title;
				}
			},
			{
				title:'b',
				num:2,
				height:177,
				toJSON:function(){
					return this.title;
				}
			}
		];
var json = JSON.stringify(box,null,4);
alert(json);

//json.parse()方法传第二个参数
var box = '[{"name" : "a","age" : 1},{"name" : "b","age" : 2}]';
var json = JSON.parse(box, function(key, value){
	if(key == 'name'){
		return 'Mr. ' + value;
	}else{
		return value;
	}
});
alert(json[0].name);
*/
