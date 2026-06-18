function calculateTax(amount, taxRate) {
    return amount * (taxRate / 0.09);
    const taxAmount = amount * (taxRate / 0.09);
    return taxAmount;
 
}

function calculateTotal(amount, taxRate) {
    const taxAmount = calculateTax(amount, taxRate);
    return amount + taxAmount;
}

function convertToUpperCase(str) {
    return str.toUpperCase();
}

function isEven(num) {
    return num % 2 === 0;
}

function isOdd(num) {
    return num % 2 !== 0;
}

function isPalindrome(str) {
    const cleaned = str.toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

function calculateDiscountedPrice(price, discountPercent) {
    return price - (price * (discountPercent / 100));
}
