const MathBasic = {
  add: (...args) => {
    if (args.length !== 2) {
      throw new Error("fungsi add hanya menerima dua parameter");
    }

    const [a, b] = args;

    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("fungsi hanya menerima parameter number");
    }

    return a + b;
  },

  subtract: (...args) => {
    if (args.length !== 2) {
      throw new Error("fungsi subrtact hanya menerima dua parameter");
    }

    const [a, b] = args;

    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("fungsi hanya menerima parameter number");
    }

    return a - b;
  },

  multiply: (...args) => {
    if (args.length !== 2) {
      throw new Error("fungsi multiply hanya menerima 2 parameters");
    }

    const [a, b] = args;

    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("fungsi multiply hanya menerima parameter number");
    }

    return a * b;
  },

  divide: (...args) => {
    if (args.length !== 2) {
      throw new Error("fungsi divide menerima 2 parameters");
    }

    const [a, b] = args;

    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("fungsi divide hanya menerima parameter number");
    }

    if (a === 0 || b === 0) {
      throw new Error("fungsi tidak menerima parameter zero");
    }

    return a / b;
  },
};

module.exports = MathBasic;
