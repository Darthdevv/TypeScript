interface Props {
  a?: number;
  b?: string;
}


type UserName = "yousef" | "yasser" | "nahas";

interface UserInfo {
  role: string;
  age: number;
}

const users: Record<UserName, UserInfo> = {
  yousef: { role: "admin", age: 20 },
  yasser: { role: "user", age: 30 },
  nahas: { role: "guest", age: 40 },
}

const userAge: Pick<UserInfo, "age"> = { age: 20 };

console.log(userAge);


const obj: Props = { a: 5 };

const obj2: Partial<Props> = { a: 5 };

const obj3: Required<Props> = { a: 5, b: "10" };
