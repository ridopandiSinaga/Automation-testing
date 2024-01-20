const FigureCalculator = require("./FigureCalculator");
const MathBasic = require("./MathBasic");

describe("A FigureCalculator", () => {
  it("should contain calculateRectanglePrimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea.", () => {
    const figureCalculator = new FigureCalculator({});

    expect(figureCalculator).toHaveProperty("calculateRectanglePrimeter");
    expect(figureCalculator).toHaveProperty("calculateRectangleArea");
    expect(figureCalculator).toHaveProperty("calculateTrianglePerimeter");
    expect(figureCalculator).toHaveProperty("calculateTriangleArea");
    expect(figureCalculator.calculateRectanglePrimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });

  describe("A calculateRectanglePrimeter function", () => {
    it("should throw error when not given 2 parameters", () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectanglePrimeter()).toThrowError();
      expect(() => figureCalculator.calculateRectanglePrimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateRectanglePrimeter(1, 2, 3)).toThrowError();
    });

    it("should throw error when given with non-number parameters", () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectanglePrimeter("1", "2")).toThrowError();
      expect(() => figureCalculator.calculateRectanglePrimeter({}, true)).toThrowError();
      expect(() => figureCalculator.calculateRectanglePrimeter(null, false)).toThrowError();
    });

    it("should return correct value based on rectangle perimeter formula", () => {
      const length = 20;
      const width = 10;

      const spyAdd = jest.spyOn(MathBasic, "add");
      const spyMultipy = jest.spyOn(MathBasic, "multiply");
      const figureCalculator = new FigureCalculator(MathBasic);

      // actions
      const result = figureCalculator.calculateRectanglePrimeter(length, width);

      // assert
      expect(result).toEqual(60); // 2 * (lenth + width)
      expect(spyAdd).toHaveBeenCalledWith(length, width);
      expect(spyMultipy).toHaveBeenCalledWith(2, 30);
    });
  });

  describe("A calculateRectangleArea function", () => {
    it("should throw error wheb not given 2 parameters", () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectangleArea()).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(1, 2, 3)).toThrowError();
    });

    it("should throw error when given with non-number parameters", () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateRectangleArea("1", "2")).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(true, {})).toThrowError();
      expect(() => figureCalculator.calculateRectangleArea(null, false)).toThrowError();
    });

    it("should return correct value based on rictangle area formula", () => {
      // formula: length * width
      const length = 20;
      const width = 10;

      const spyMultipy = jest.spyOn(MathBasic, "multiply");
      const figureCalculator = new FigureCalculator(MathBasic);

      // actions
      const result = figureCalculator.calculateRectangleArea(length, width);

      // assert
      expect(result).toEqual(200);
      expect(spyMultipy).toHaveBeenCalledWith(20, 10);
    });
  });

  describe("A calculateTrianglePerimeter function", () => {
    it("should throw error when not given 3 parameters", () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTrianglePerimeter()).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(1, 2, 3, 4)).toThrowError();
    });

    it("should throw error when given with non-number parameters", () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTrianglePerimeter("1", "2")).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(true, {})).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter(null, false)).toThrowError();
      expect(() => figureCalculator.calculateTrianglePerimeter([], undefined)).toThrowError();
    });

    it("should return correct value based on triangle perimeter formula", () => {
      const sideA = 5;
      const sideB = 7;
      const base = 10;

      const spyAdd = jest.spyOn(MathBasic, "add");
      const figureCalculator = new FigureCalculator(MathBasic);

      // action
      const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, base);

      expect(result).toEqual(22);
      expect(spyAdd).toBeCalledWith(sideA + sideB, base);
    });
  });

  describe("A calculateTriangleArea function", () => {
    it("should throw error when not given 2 parameters", () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTriangleArea()).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(1)).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(1, 2, 3)).toThrowError();
    });

    it("should throw error when given woth non-number pramaters", () => {
      const figureCalculator = new FigureCalculator({});

      expect(() => figureCalculator.calculateTriangleArea("1", "3")).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(false, {})).toThrowError();
      expect(() => figureCalculator.calculateTriangleArea(null, true)).toThrowError();
    });

    it("should return correct value based on tirangle area formula", () => {
      const base = 10;
      const height = 15;

      const spyMultipy = jest.spyOn(MathBasic, "multiply");
      const spyDivide = jest.spyOn(MathBasic, "divide");
      const figureCalculator = new FigureCalculator(MathBasic);

      // action
      const result = figureCalculator.calculateTriangleArea(base, height);

      // assert
      expect(result).toEqual(75); // (base * height) /2
      expect(spyMultipy).toBeCalledWith(base, height);
      expect(spyDivide).toBeCalledWith(base * height, 2);
    });
  });
});
