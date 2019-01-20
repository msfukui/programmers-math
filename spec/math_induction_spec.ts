import assert = require("assert");
import MathInduction from "../src/math_induction";

describe("MathInduction#prove", () => {
  it("P(0) の証明結果を出力できる", () => {
    const s: string =
      "いまから、P(0)が成り立つことを証明します。\n" +
      "ステップ1により、P(0)が成り立ちます。\n" +
      "以上で、証明が終わりました。\n";
    assert(MathInduction.prove(0) === s);
  });

  it("P(1) の証明結果を出力できる", () => {
    const s: string =
      "いまから、P(1)が成り立つことを証明します。\n" +
      "ステップ1により、P(0)が成り立ちます。\n" +
      "ステップ2により、「P(0)が成り立つならばP(1)も成り立つ」といえます。\n" +
      "したがって、「P(1)が成り立つ」といえます。\n" +
      "以上で、証明が終わりました。\n";
    assert(MathInduction.prove(1) === s);
  });

  it("P(2) の証明結果を出力できる", () => {
    const s: string =
      "いまから、P(2)が成り立つことを証明します。\n" +
      "ステップ1により、P(0)が成り立ちます。\n" +
      "ステップ2により、「P(0)が成り立つならばP(1)も成り立つ」といえます。\n" +
      "したがって、「P(1)が成り立つ」といえます。\n" +
      "ステップ2により、「P(1)が成り立つならばP(2)も成り立つ」といえます。\n" +
      "したがって、「P(2)が成り立つ」といえます。\n" +
      "以上で、証明が終わりました。\n";
    assert(MathInduction.prove(2) === s);
  });
});

describe("MathInduction#sum", () => {
  it("配列の要素の和を返却する", () => {
    assert(MathInduction.sum([1, 2, 3], 2) === 3);
  });
});

describe("MathInduction#factorial", () => {
  it("0! は 1 である", () => {
    assert(MathInduction.factorial(0) === 1);
  });

  it("1! は 1 である", () => {
    assert(MathInduction.factorial(1) === 1);
  });

  it("2! は 2 である", () => {
    assert(MathInduction.factorial(2) === 2);
  });

  it("3! は 6 である", () => {
    assert(MathInduction.factorial(3) === 6);
  });

  it("52! は 80658175170943878571660636856403766975289505440883277824000000000000 である", () => {
    assert(
      MathInduction.factorial(52) ===
        80658175170943878571660636856403766975289505440883277824000000000000
    );
  });
});

describe("MathInduction#permutation", () => {
  it("5P5 は 120 である", () => {
    assert(MathInduction.permutation(5, 5) === 120);
  });

  it("5P4 は 120 である", () => {
    assert(MathInduction.permutation(5, 4) === 120);
  });

  it("5P3 は 60 である", () => {
    assert(MathInduction.permutation(5, 3) === 60);
  });

  it("5P2 は 20 である", () => {
    assert(MathInduction.permutation(5, 2) === 20);
  });

  it("5P1 は 5 である", () => {
    assert(MathInduction.permutation(5, 1) === 5);
  });

  it("5P0 は 1 である", () => {
    assert(MathInduction.permutation(5, 0) === 1);
  });
});

describe("MathInduction#permutation", () => {
  it("5C5 は 1 である", () => {
    assert(MathInduction.combination(5, 5) === 1);
  });

  it("5C4 は 5 である", () => {
    assert(MathInduction.combination(5, 4) === 5);
  });

  it("5C3 は 10 である", () => {
    assert(MathInduction.combination(5, 3) === 10);
  });

  it("5C2 は 10 である", () => {
    assert(MathInduction.combination(5, 2) === 10);
  });

  it("5C1 は 5 である", () => {
    assert(MathInduction.combination(5, 1) === 5);
  });

  it("5C0 は 1 である", () => {
    assert(MathInduction.combination(5, 0) === 1);
  });
});
