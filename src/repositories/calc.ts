export class Calc {
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
