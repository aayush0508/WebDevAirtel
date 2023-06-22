
	const data = [{label:"label1",initialValue:"dummy"},{label:"label2"}]
	function handleclick(e)
	{
		console.log(e);

		const p=e.target.id;
		const lbl= "u"+p;
		const updateableLabel=document.getElementById(lbl);
		const btn = document.getElementById("btn"+p);
		const para=document.getElementById(p);
		if(updateableLabel.hidden)
 			{updateableLabel.hidden=false;
 			para.hidden=true;
 			btn.hidden=false
 		}
 		else
 			{updateableLabel.hidden=true;}

 		btn.addEventListener('click', ()=>onSave(para,updateableLabel,btn))
 	}

	function onSave(para, updateableLabel, btn)
	{
		const t=updateableLabel.value;
		para.innerText=t;
		updateableLabel.hidden=true;
		para.hidden=false;
		btn.hidden=true;
	}
	p1.addEventListener('click',handleclick)
	p2.addEventListener('click',handleclick)
	

	