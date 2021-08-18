function updateProductQuantity(product, price, isIncreasing) {
    const productQuantity = document.getElementById(product + '-quantity');
    let unit = productQuantity.value;
    if (isIncreasing) {
        unit = parseInt(unit) + 1;
    } else if (unit > 0) {
        unit = parseInt(unit) - 1;
    }
    productQuantity.value = unit;

    // update total 
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = unit * price;

    calculateTotal()
}


function getInput(product) {
    const productInput = document.getElementById(product + '-quantity');
    const productUnit = parseInt(productInput.value);
    return productUnit;
}

function calculateTotal() {
    const phoneTotal = getInput('phone') * 1219;
    const caseTotal = getInput('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;

    // update the html 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = totalPrice;
}


document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductQuantity('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductQuantity('phone', 1219, false);
})

document.getElementById('case-plus').addEventListener('click', function () {
    updateProductQuantity('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductQuantity('case', 59, false);
})
