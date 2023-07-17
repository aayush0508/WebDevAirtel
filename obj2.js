import { generateStr } from "./generateStr.js";

const ui = {
    handleclick: function handleclick(id) {
        const updateableLabel = document.getElementById("t-" + id);
        const btn = document.getElementById("b-" + id);
        const para = document.getElementById("p-" + id);
        if (updateableLabel.hidden) {
            updateableLabel.hidden = false;
            para.hidden = true;
            btn.hidden = false;
        } else {
            updateableLabel.hidden = true;
        }

        btn.addEventListener('click', this.methods.onSave.bind(this.methods, para, updateableLabel, btn));
        console.log("handleclick called. id:", id);
    },
    onSave: function onSave(para, updateableLabel, btn) {
        const t = updateableLabel.value;
        para.innerText = t;
        updateableLabel.hidden = true;
        para.hidden = false;
        btn.hidden = true;
    },
    render: function render() {
        const formid = "form";
        const formvar = document.getElementById(formid);
        formvar.innerHTML += generateStr({ label: this.label, initialValue: this.initialValue });
        const para = document.getElementById("p-" + this.label);
        para.addEventListener("click", this.methods.handleclick.bind(this, this.label));
    },



    generateStr: generateStr,
};

function AddLabel(label, initialValue) {
    this.label = label;
    this.initialValue = initialValue;
}

AddLabel.prototype.methods = ui;
const Label = new AddLabel("name", "hunny");
Label.methods.render.apply(Label);
const Label2 = new AddLabel("Age", "20")
Label2.methods.render.apply(Label2)

