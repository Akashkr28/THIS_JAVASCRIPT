/**Write a complex number class, with a member function that can add 2 complex number, & multiply two complex numbers. */

class ComplexNumber {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }

    // Method to add two complex numbers
    add(other) {
        const realPart = this.real + other.real;
        const imaginaryPart = this.imaginary + other.imaginary;
        return new ComplexNumber(realPart, imaginaryPart);
    }

    // Method to multiply two complex numbers
    multiply(other) {
        const realPart = this.real * other.real - this.imaginary * other.imaginary;
        const imaginaryPart = this.real * other.imaginary + this.imaginary * other.real;
        return new ComplexNumber(realPart, imaginaryPart);
    }

    // Method to display the complex number as a string
    toString() {
        return `${this.real} + ${this.imaginary}i`;
    }
}

// Example usage:
const num1 = new ComplexNumber(2, 3);
const num2 = new ComplexNumber(4, 5);

const sum = num1.add(num2);
const product = num1.multiply(num2);

console.log(`Sum: ${sum.toString()}`); // Sum: 6 + 8i
console.log(`Product: ${product.toString()}`); // Product: -7 + 22i
