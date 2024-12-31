interface Props {
  a?: number;
  b?: string;
}

const obj: Props = { a: 5 };

const obj2: Partial<Props> = { a: 5 };
console.log(obj2);

const obj3: Required<Props> = { a: 5, b: "10" };
console.log(obj3);