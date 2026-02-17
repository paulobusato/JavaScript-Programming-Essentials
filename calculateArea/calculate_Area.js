let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    let area = length * width;
    document.getElementById("result").innerText = `The area of the rectangle is: ${area}`;
}

function groceryTracker() {
    const grocery1 = parseFloat(document.getElementById("grocery1").value);
    const grocery2 = parseFloat(document.getElementById("grocery2").value);
    const grocery3 = parseFloat(document.getElementById("grocery3").value);

    const total = grocery1 + grocery2 + grocery3;

    document.getElementById("groceryResult").innerText = `The total amount is: $${total}`;
}

document.getElementById("grocery1").addEventListener("focusout", function (event) {
    const label = document.createElement("label");
    label.innerText = "Enter Grocery-2 Amount: ";
    label.setAttribute("for", "grocery2");

    const input = document.createElement("input");
    input.setAttribute("type", "number");
    input.setAttribute("id", "grocery2");

    const br1 = document.createElement("br");
    const br2 = document.createElement("br");

    document.body.insertBefore(label, document.getElementById("calculateAmountBtn"));
    document.body.insertBefore(input, document.getElementById("calculateAmountBtn"));
    document.body.insertBefore(br1, document.getElementById("calculateAmountBtn"));
    document.body.insertBefore(br2, document.getElementById("calculateAmountBtn"));
});