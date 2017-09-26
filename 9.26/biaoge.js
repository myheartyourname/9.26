/*
* @Author: lenovo
* @Date:   2017-09-26 16:37:51
* @Last Modified by:   lenovo
* @Last Modified time: 2017-09-26 19:32:46
*/
window.addEventListener('load',function(){
	let table=document.querySelector('tbody');
	let addBtn=document.querySelector('.addBtn');
	console.log(addBtn)
	let students=[
	{name:'张三',age:20,sex:'男',phone:18746352234,address:'山西太原'},
	{name:'张三',age:20,sex:'男',phone:18746352234,address:'山西太原'},
	{name:'张三',age:20,sex:'男',phone:18746352234,address:'山西太原'},
	{name:'张三',age:20,sex:'男',phone:18746352234,address:'山西太原'},
	{name:'张三',age:20,sex:'男',phone:18746352234,address:'山西太原'}
	];
    students.forEach(element=>{
        createTr(element);
    })
    function createTr(obj){
        let trs=document.createElement('tr');
        trs.innerHTML=`
            <td>${obj.name}</td>
			<td>${obj.age}</td>
			<td>${obj.sex}</td>
			<td>${obj.phone}</td>
			<td>${obj.address}</td>
			<td  class='del'><button class='delBtn'>删除</button></td>
        `
        table.appendChild(trs);
    }
	table.ondblclick=function(e){
		let element=e.target;
		if (element.nodeName=='TD'&&element.className!='del'){
		    let oldv=element.innerText;
		    element.innerText='';
			let inputs=document.createElement('input');
		    inputs.value=oldv;
            element.appendChild(inputs);
            
            inputs.onblur=function(){
            	let newv=inputs.value;
                element.removeChild(inputs);
            	element.innerText=newv;
            }
		}else if(element.nodeName=='BUTTON'){
			let trs=element.parentNode.parentNode;
			table.removeChild(trs);
		}
	}
    addBtn.ondblclick=function(){
        let tr1=document.createElement('tr');
        tr1.innerHTML=`
            <td></td>
			<td></td>
			<td</td>
			<td></td>
			<td></td>
			<td class='del'><button class='delBtn'>删除</button></td>
        `
        table.appendChild(tr1);
    }
})