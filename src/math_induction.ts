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

  public static prove_another(n: number): string {
    let r: string = `いまから、P(${n})が成り立つことを証明します。\n`;
    r += this.prove_another_loop(n);
    r += "以上で、証明が終わりました。\n";
    return r;
  }

  private static prove_another_loop(n: number): string {
    let r: string = "";
    if (n === 0) {
      r += `ステップ1により、P(${n})が成り立ちます。\n`;
    } else {
      r += this.prove_another_loop(n - 1);
      r += `ステップ2により、「P(${n -
        1})が成り立つならばP(${n})も成り立つ」といえます。\n`;
      r += `したがって、「P(${n})が成り立つ」といえます。\n`;
    }
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
    if (k === 0) {
      return 1;
    }
    return n * this.permutation(n - 1, k - 1);
  }

  public static permutation_another(n: number, k: number): number {
    return this.factorial(n) / this.factorial(n - k);
  }

  public static combination(n: number, k: number): number {
    return this.permutation(n, k) / this.permutation(k, k);
  }

  public static combination_another(n: number, k: number): number {
    if (n === 0 || k === 0 || n === k) {
      return 1;
    }
    return (
      this.combination_another(n - 1, k - 1) +
      this.combination_another(n - 1, k)
    );
  }

  public static hanoi(
    n: number,
    start: string,
    end: string,
    middle: string
  ): string {
    let r: string = "";
    if (n !== 0) {
      r += this.hanoi(n - 1, start, middle, end);
      r += `${start}->${end}, `;
      r += this.hanoi(n - 1, middle, end, start);
    }
    return r;
  }
}
export default MathInduction;
