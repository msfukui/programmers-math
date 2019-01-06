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
