type Username = { username: string };
type Email = { email: string };
type Password = { password: string };


type UserDetails = Username & Email & Password; 


const user : UserDetails = { username: "yousef", email: "yousef@example.com", password: "asd@ASD123" };

console.log(user);