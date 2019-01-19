export class MathInduction {
  public static prove(n: number): string {
    let r: string = `いまから、P(${n})が成り立つことを証明します。\n`;
    let k: number = 0;
    r += `ステップ1により、P(${k})が成り立ちます。\n`;
    while (k < n) {
      r += `ステップ2により、「P(${k})が成り立つならばP(${k +
        1})も成り立つ」といえます。\n`;
      r += `したがって、「P(${k + 1})が成り立つ」といえます。\n`;
      k += 1;
    }
    r += "以上で、証明が終わりました。\n";
    return r;
  }

  public static sum(array: number[], size: number): number {
    let k: number = 0;
    let s: number = 0;
    while (k < size) {
      s += array[k];
      k += 1;
    }
    return s;
  }

  public static factorial(n: number): number {
    if (n === 0) {
      return 1;
    }
    return n * this.factorial(n - 1);
  }

  public static permutation(n: number, k: number): number {
    //if (k === 0) {
    //  return 1;
    //}
    //return n * this.permutation(n - 1, k - 1);
    return this.factorial(n) / this.factorial(n - k);
  }
}
export default MathInduction;
