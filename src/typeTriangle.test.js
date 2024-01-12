const typeTriangle = require("./typeTriangle");

describe("Sebuah fungsi typeTriangle", () => {
  it("harus mengembalikan segitiga sama sisi ketika semua nilai sisi sama", () => {
    expect(typeTriangle(4, 4, 4)).toEqual("Segitiga sama sisi");
    expect(typeTriangle(1, 1, 1)).toEqual("Segitiga sama sisi");
    expect(typeTriangle(8, 8, 8)).toEqual("Segitiga sama sisi");
  });

  it("harus mengembalikan segitiga sama kaki ketika ada dua nilai sisi yang sama", () => {
    expect(typeTriangle(2, 2, 1)).toEqual("Segitiga sama kaki");
    expect(typeTriangle(4, 2, 4)).toEqual("Segitiga sama kaki");
    expect(typeTriangle(1, 3, 3)).toEqual("Segitiga sama kaki");
  });

  it("harus mengembalikan segitiga sembarang ketika tidak ada nilai sisi yang sama", () => {
    expect(typeTriangle(4, 2, 1)).toEqual("Segitiga sembarang");
    expect(typeTriangle(2, 3, 5)).toEqual("Segitiga sembarang");
    expect(typeTriangle(8, 2, 1)).toEqual("Segitiga sembarang");
  });
});
