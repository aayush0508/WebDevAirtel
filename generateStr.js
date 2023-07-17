export const generateStr = (data) => {
    const returnedStr = `<div>
    <label for="label-${data.label}">${data.label}:</label>
    <p  id="p-${data.label}" >${data.initialValue}</p>
    <input hidden type="text" id="t-${data.label}" name="t-${data.label}"  value="${data.initialValue}">
    <button hidden id="b-${data.label}" type="button" >OK</button>
    <br>
    </div>
    <br>`

    return returnedStr;
}


