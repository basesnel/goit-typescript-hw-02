import { concatenation } from './concatenation';
const button = document.querySelector('button');
const input = document.querySelector('input');
if (button && input) {
    button.addEventListener('click', () => {
        concatenation(input.value, 'hello!');
    });
}
// 1:
// let total: number = 100;
// let name: string = 'Bob';
// let isActive: boolean = false;
// let empty: null = null;
// let undf: undefined = undefined;
// let age = 10;
// age = '12';
// 2:
// const numbers: number[] = [1, 2, 3, 4, 0];
// numbers.push('12');
// 3:
// 3.1:
// const user: { name: string; age: number } = {
//   name: 'Bob',
//   age: 12,
// };
// 3.2
// type User = { name: string; age: number };
// const user: User = {
//   name: 'Bob',
//   age: 12,
// };
// user.age = '15';
// user.name = 1;
// 3.3:
// type eventType = 'lesson' | 'deadline';
// const event: eventType = 'deadline';
// type size = 'small' | 'medium' | 'large';
// type User = { name: string; age: number | string };
// const user: User = {
//   name: 'Bob',
//   age: 12,
// };
// user.age = '15';
// user.name = 'Bobby';
// 4
// let age: any = 12;
// age = 'Bob';
// age = false;
// 5
// let age: unknown = 12;
// age = 'Bob';
// age.toFixed()
// 6
// type size = 'small' | 'medium' | 'large';
// enum Sizes {
//   small = 'small',
//   medium = 'medium',
//   large = 'large',
// }
// const button1: size = 'large';
// const button2: Sizes = Sizes.large;
// 7
// function addNums(num1: number, num2: number): string {
//   return `${num1} + ${num2}`;
// }
// console.log(addNums(2, 3));
// function addNums2(num1: number, num2: number): void {
//   console.log(num1 + num2);
// }
// addNums2(2, 3);
// type User = { name: string };
// function greet(user: User): void {
//   console.log(`Hello, ${user.name}!`);
// }
// type User = { name: string; age: number; hobby: string };
// function userConstructor(name: string, age: number, hobby: string): User {
//   return { name, age, hobby };
// }
//# sourceMappingURL=index.js.map