"use strict";
// //es5中定义函数的方法
// // 函数声明
// function run1() {
//     console.log('run1');
//     return 'run1';
// }
// //匿名函数
// var run2 = function () {
//     console.log('run2');
//     return 'run2';
// }
// //ts中定义函数的方法，与es5类似
// //函数声明
// function run1(): string {
//     return 'string';
// }
// //匿名函数
// let run2 = function (): number {
//     return 123;
// }
// alert(run2());
//ts定义方法传参
// function getInfo(name: string, age: number): string {
//     return `${name},age is ${age}`;
// }
// console.log(getInfo('wy', 33));
// let getInfo = function (name: string, age: number): string {
//     return `${name}...${age}`;
// }
// alert(getInfo('wy', 33));
//ts定义没有返回值的方法
// function run(): void {
//     console.log('this is a void function');
// }
// run();
//ts可选参数 加个问号，说明这个参数是可选的
//可选参数是必须要放在最后面的
// function getInfo(name: string, age?: number): string {
//     if (age) {
//         return `${name} : ${age}`;
//     } else {
//         return `${name} : secret`;
//     }
// }
// alert(getInfo('wy'));
// alert(getInfo('wangye', 33));
//ts默认参数
// function getInfo(name: string, age?: number = 22): string {
//     if (age) {
//         return `${name} : ${age}`;
//     } else {
//         return `${name}===${age}`
//     }
// }
// // alert(getInfo('wangye'));
// alert(getInfo('wangye',33));
//ts 剩余参数 也称为 三点运算符，可传不定数量的形参
// function sum(...arr: number[]): number {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         // const element =arr[i];
//         sum += arr[i];
//     }
//     return sum;
// }
// alert(sum(1,2,3,4,5,6));
// function sum(a: number, b: number,...arr: number[]): number {
//     let sum = a + b;
//     for (let i = 0; i < arr.length; i++) {
//         // const element =arr[i];
//         sum += arr[i];
//     }
//     return sum;
// }
// alert(sum(1,2,3,4,5,6,7,8));
//函数重载
//es5中，如果函数名重名，下面的函数会覆盖上面的函数
//ts中，函数可以重名，支持函数的重载
// function getInfo(name: string): string;
// function getInfo(age: number): string;
// function getInfo(params: any): string {
//     if (params === 'string') {
//         return `my name is :${params}`;
//     } else {
//         return `my age is :${params}`;
//     }
// }
// alert(getInfo('wangye'));
// alert(getInfo(33));
// alert(getInfo(true)); 这个会导致执行错误
//函数重载2
// function getInfo(name: string): string;
// function getInfo(name: string, age: number): string;
// function getInfo(name: any, age?: any): any {
//     if (age) {
//         return `${name} ==== ${age}`;
//     } else {
//         return `${name}`;
//     }
// }
// alert(getInfo('wangye'));
// alert(getInfo('wangye', 33));
// alert(getInfo(12));//编译错误，匹配不到
//箭头函数
// setTimeout(() => {
//     alert('run');
// }, 1000);
