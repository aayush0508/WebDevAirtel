import { generateStr } from "./generateStr.js";

const data = [{ label: "label1", initialValue: "dummy" }, { label: "label2", initialValue: "dummy2" }, { label: "First Name", initialValue: "Aayush" }, { label: "Last Name", initialValue: "Gupta" }]


function handleclick(id) {
	console.log(id)
	const updateableLabel = document.getElementById("t-" + id);
	const btn = document.getElementById("b-" + id);
	const para = document.getElementById("p-" + id);
	if (updateableLabel.hidden) {
		updateableLabel.hidden = false;
		para.hidden = true;
		btn.hidden = false
	}
	else { updateableLabel.hidden = true; }

	btn.addEventListener('click', () => onSave(para, updateableLabel, btn))
}

function onSave(para, updateableLabel, btn) {
	const t = updateableLabel.value;
	para.innerText = t;
	updateableLabel.hidden = true;
	para.hidden = false;
	btn.hidden = true;
}


function render() {

	const formid = "form";
	const formvar = document.getElementById(formid);
	for (let i = 0; i < data.length; i++) {
		formvar.innerHTML = formvar.innerHTML + generateStr(data[i]);

		setTimeout(() => {
			const para = document.getElementById("p-" + data[i].label);
			attachedEvent(para, data[i].label)
		})


	}
}
function attachedEvent(para, lbel) {
	para.addEventListener('click', () => handleclick(lbel))
}


document.addEventListener('DOMContentLoaded', render)
