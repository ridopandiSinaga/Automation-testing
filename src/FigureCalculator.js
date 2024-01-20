class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }

  _verifyArgs(args, expectedArgCount) {
    if (args.length !== expectedArgCount) {
      throw new Error(`fungsi hanya menerima ${expectedArgCount} parameter`);
    }

    args.forEach((arg) => {
      if (typeof arg !== "number") {
        throw new Error("fungsi hanya menerima parameter number");
      }
    });

    return args;
  }

  calculateRectanglePrimeter(...args) {
    const [length, width] = this._verifyArgs(args, 2);

    // formula : 2 * (length + width)
    return this._mathBasic.multiply(2, this._mathBasic.add(length, width));
  }

  calculateRectangleArea(...args) {
    const [length, width] = this._verifyArgs(args, 2);

    // formula: length * width
    return this._mathBasic.multiply(length, width);
  }

  calculateTrianglePerimeter(...arg) {
    const [sideA, sideB, base] = this._verifyArgs(arg, 3);

    // formula: (seidA + sideB) + base
    return this._mathBasic.add(this._mathBasic.add(sideA, sideB), base);
  }

  calculateTriangleArea(...args) {
    const [base, height] = this._verifyArgs(args, 2);

    // formula: (base* height) /2
    return this._mathBasic.divide(this._mathBasic.multiply(base, height), 2);
  }
}

module.exports = FigureCalculator;
