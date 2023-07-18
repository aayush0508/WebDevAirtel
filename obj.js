import { generateStr } from "./generateStr.js";


const ui = {
    handleclick: function handleclick(id) {
        const updateableLabel = document.getElementById("t-" + id);
        const btn = document.getElementById("b-" + id);
        const para = document.getElementById("p-" + id);
        if (updateableLabel.hidden) {
            updateableLabel.hidden = false;
            para.hidden = true;
            btn.hidden = false
        }
        else { updateableLabel.hidden = true; }

        btn.addEventListener('click', () => this.onSave(para, updateableLabel, btn))
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
        console.log(this)
        const formvar = document.getElementById(formid);
        formvar.innerHTML = formvar.innerHTML + generateStr({ label: this.label, initialValue: this.initialValue });
        const para = document.getElementById("p-" + this.label)
        para.addEventListener("click", () => this.handleclick(this.label))

    },

    generateStr: generateStr,
}

function AddLabel(label, initialValue) {
    Object.setPrototypeOf(this, ui);
    this.label = label
    this.initialValue = initialValue

}

const Label = new AddLabel("name", "hunny")
Label.render();
console.log(Label);
const Label2 = new AddLabel("Name", "Aayush")
Label2.render();
