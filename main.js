function calculateDiscountedAmount(totalPurchaseAmount) {
    let discount = 0;

    if (totalPurchaseAmount >= 50 && totalPurchaseAmount <= 100) {
        discount = totalPurchaseAmount * 0.05;
    } else if (totalPurchaseAmount > 100 && totalPurchaseAmount <= 200) {
        discount = totalPurchaseAmount * 0.1;
    } else if (totalPurchaseAmount > 200) {
        discount = totalPurchaseAmount * 0.15;
    }

    return discount;
}

function main() {
    const totalAmount = parseFloat(prompt("Enter total purchase amount:"));

    if (isNaN(totalAmount) || totalAmount < 0) {
        console.log("Invalid input. Please enter a valid amount.");
        return;
    }

    const discountAmount = calculateDiscountedAmount(totalAmount);
    const discountedTotal = totalAmount - discountAmount;

    console.log(`Discounted Amount: $${discountAmount.toFixed(2)}`);
    console.log(`Total Amount + Discount Amount: $${discountedTotal.toFixed(2)}`);
}

main();


//2. 

function filterEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

const originalArray = [12, 34, 45, 23, 6, 78, 54, 90];
const filteredEvenNumbers = filterEvenNumbers(originalArray);

console.log(`Original Array: [${originalArray.join(', ')}]`);
console.log(`Filtered Even Numbers: [${filteredEvenNumbers.join(', ')}]`);

//3.

function multiplicationTable(num){ 
    for(let i=1; i<=10; i++){
        const product= num * i;
        console.log(`${num} * ${i}` + "=" + `${product}`)
    }
}

// This a way of getting result of this function
multiplicationTable(5);
multiplicationTable(10);


//4. 

function calculateGrade(score) {
    let grade;

    switch (true) {
        case score >= 90:
            grade = 'A';
            break;
        case score >= 80:
            grade = 'B';
            break;
        case score >= 70:
            grade = 'C';
            break;
        case score >= 60:
            grade = 'D';
            break;
        default:
            grade = 'F';
            break;
    }

    return grade;
}

// Test cases
console.log(calculateGrade(95));   // Output: A
console.log(calculateGrade(83));   // Output: B
console.log(calculateGrade(75));   // Output: C
console.log(calculateGrade(62));   // Output: D
console.log(calculateGrade(45));   // Output: F
