/*
* @Author: lenovo
* @Date:   2017-09-25 19:09:51
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-26 22:41:48
*/
window.addEventListener('load', function(){
	let textarea=document.querySelector('textarea');
	let submit=document.querySelector('.anniu>.submit');
	let cancle=document.querySelector('.anniu>.cancle');
    let kong=document.querySelector('.kong');
    let num=document.querySelector('.tips>.num');
    let rest=document.querySelector('.tips>.rest');
    let input=document.querySelector('input');
    kong.onmouseover=function(e){
       if(e.target.nodeName=='LI'){
       	e.target.style.background='#fff';
       }
    }
    kong.onmouseout=function(e){
       if(e.target.nodeName=='LI'){
       	e.target.style.background='#00ffa8';
       }
    }
	textarea.onkeyup=function(){
		let value=textarea.value;
        num.innerText=value.length;
        rest.innerText=this.maxLength-value.length;
	}
	submit.addEventListener('click',fn);
    cancle.addEventListener('click',fn1);

	function fn(){
		let div=document.createElement('li');
	    div.className='liuyan';
	    div.innerHTML=` 
	            <img src="u=4936136,412112248&fm=27&gp=0.jpg" alt="">
		    	<div class="middle">
		    		<h3>${input.value}</h3>
		    	    <p>${textarea.value}</p>
		    	</div>`;
		let neirong=textarea.value;
        kong.prependChild(div);

		textarea.value='';
		input.value='';
		num.innerText=0;
		rest.innerText=textarea.maxLength;
	}
	function fn1(){
		textarea.value='';
	}
	HTMLElement.prototype.prependChild=function(element){
		let first=this.firstElementChild;
		if(first){
			this.insertBefore(element,first);
		}else{
			this.appendChild(element);
		}
	}
})