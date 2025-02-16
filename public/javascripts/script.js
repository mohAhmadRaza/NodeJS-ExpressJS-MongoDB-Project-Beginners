function Increment(index) {
    let quantityElement = document.getElementById(`quantity${index}`);
    let num = parseInt(quantityElement.innerHTML, 10); // Convert string to number
    quantityElement.innerHTML = num + 1;
}
