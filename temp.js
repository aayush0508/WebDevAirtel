

const data = [{ label: "label1", initialValue: "dummy" }, { label: "label2", initialValue: "dummy2" }, { label: "First Name", initialValue: "Aayush" }, { label: "Last Name", initialValue: "Gupta" }]


function handleclick(id) {
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

const generateStr = (data) => {
    const returnedStr = `<div>
    <label for="label-${data.label}">${data.label}:</label>
    <p onclick = "handleclick('${data.label}')" id="p-${data.label}" >${data.initialValue}</p>
    <input hidden type="text" id="t-${data.label}" name="t-${data.label}"  value="${data.initialValue}">
    <button hidden id="b-${data.label}" type="button" >OK</button>
    <br>
    </div>
    <br>`
    return returnedStr;
}



function render() {

    const formid = "form";
    const formvar = document.getElementById(formid);
    for (let i = 0; i < data.length; i++) {
        formvar.innerHTML = formvar.innerHTML + generateStr(data[i]);

    }
}


document.addEventListener('DOMContentLoaded', render)