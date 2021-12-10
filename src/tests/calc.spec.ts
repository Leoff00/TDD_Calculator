class Calculator {
    static PI = Math.PI;

    sum(firstOperand: number, secondOperand: number) {
        return firstOperand + secondOperand;
    }

    minus(firstOperand: number, secondOperand: number) {
        return firstOperand - secondOperand;
    }

    multiply(firstOperand: number, secondOperand: number) {
        return firstOperand * secondOperand;
    }

    divide(firstOperand: number, secondOperand: number) {
        return firstOperand / secondOperand;
    }
}

test("adds 1 + 2 to equal 3", () => {
    const calculator = new Calculator();
    expect(calculator.sum(1, 2)).toBe(3);
});

test("adds 3 - 2 to equal 1", () => {
    const calculator = new Calculator();
    expect(calculator.minus(3, 2)).toBe(1);
});

test("adds 2 x 10 to equal 20", () => {
    const calculator = new Calculator();
    expect(calculator.multiply(10, 10)).toBe(100);
});

test("adds 10 / 5 to equal 2", () => {
    const calculator = new Calculator();
    expect(calculator.divide(15, 5)).toBe(3);
});
