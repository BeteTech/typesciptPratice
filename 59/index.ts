// console.log('hello typescript');

// class Person {
//     name: string
//     age: number
//     constructor(name: string, age: number) {
//         this.name = name
//         this.age = age
//         console.log(name + ':' + age)
//     }

//     run(): void {
//         alert(this.name)
//     }
// }

// let p=new Person('wy',12);
// p.run();

//ts中类的定义
// class Person{
//     name:string
//     constructor(name:string){
//         this.name=name
//     }

//     getName():string{
//         return this.name
//     }

//     setName(name:string):void{
//         this.name=name
//     }
// }

// let p=new Person('wy');
// alert('1:'+p.getName());
// p.setName('wangye');
// alert('2:'+p.getName());


//构造函数允许缺少
//属性需设置默认值
// class Person {
//     name: string = ''
//     age: number = 0
//     // constructor(name: string) { }
//     getName(): string { return this.name }
//     setName(name: string): void { this.name = name }
// }
// let p = new Person()
// p.setName('wangye')
// alert(p.getName())


//ts中的继承

//ts中的public private protected
// enum sex { 'male', 'female' }
// class Person {
//     name: string = ''
//     private age: number = 0
//     protected sex: sex = sex.male
//     constructor(name: string) {
//         this.name = name
//     }
//     hello(): void {
//         alert(this.name)
//     }
//     private work(): void {
//         alert('private work')
//     }

//     protected sleep(): void {
//         alert('protected sleep')
//     }
// }

// class SubPerson extends Person {
//     constructor(name: string) {
//         super(name)
//     }
// }

// let p=new Person('wangye')
// p.hello()

// class SubPerson extends Person{
//     constructor(name:string){
//         super(name)
//     }
// }

// let sp=new SubPerson('okman')
// sp.hello()

// class LittlePerson extends Person{
//     constructor(name:string){
//         super(name)
//     }

//     work():void{
//         alert(this.name+' is working...')
//     }
// //父类中的方法与子类中的方法同名，优先调用子类方法
//     hello():void{
//         alert(this.name+' is sub class methods...')
//     }
// }

// let lp=new LittlePerson('lp demo')
// lp.hello()
// lp.work()

//ts中的静态方法
// class Person{
//     static personName:string='wangye'
//     age:number=0 //这个public的属性在静态方法中调用不到
//     //静态方法只能使用静态属性
//     static hello():void{
//         alert(this.personName)
//     }
// }

// Person.hello()

//ts中的多态
//多态，父类中定义一个方法，子类可以进行不同实现，实现不同子类的同一方法但不同实现
// class Animal{
//     name:string
//     constructor(name:string){this.name=name}
//     eat():void{console.log('Animal eating...')}
// }

// class Dog extends Animal{
//     constructor(name:string){super(name)}
//     eat():void{alert('dog eating...')}
// }

// class Cat extends Animal{
//     constructor(name:string){super(name)}
//     eat():void{alert('cat eating...')}
// }

// let ani=new Animal('Animal')
// ani.eat()

// let dog=new Dog('dog')
// dog.eat()

// let cat=new Cat('cat')
// cat.eat()


// //ts中的抽象类
// abstract class Animal{
//     abstract name:string //抽象类中的属性没有实际意义，但可以定义
//     // constructor(name:string){this.name=name} //抽象类中的构造方法也没有实际意义
//     abstract eat():void
//     //抽象类的抽象方法，以abstract开头，并没有具体实现，只是定义了标准，子类在继承抽象类的时候，就必须实现这个标准
// }

// class Dog extends Animal{
//     name='big dog'
//     eat():void{
//         alert('dog eating ...')
//     }
// }

// let dog=new Dog()
// dog.eat()

//ts中的类
// 类的定义
// 继承
// 修饰符
// 静态属性 静态方法
// 抽象类 父类定义标准，不定义具体实现，由子类负责实现，一个子类只能继承一个抽象类
// 多态 父类定义方法，子类可以不同实现


//ts中的接口
// 属性类接口
// 函数类型接口
// 可索引接口
// 类型接口
// 接口扩展

//
// function printLabel(labelInfo:{label:string}):void{
//     alert(labelInfo.label)
// }

// printLabel({label:'wangye'})

// interface FullName{
//     firstName:string
//     secondName:string
// }

// function printName(name:FullName):void{
//     alert(name.firstName+'---'+name.secondName)
// }

// printName({firstName:'wang',secondName:'ye'})


//ts中的属性接口定义
// interface FullInfo {
//     name: string
//     age: number
//     id: number
// }

// function printInfo(info: FullInfo): void {
//     alert(info.age + ':' + info.id + ':' + info.name)
// }

// printInfo({ age: 33, name: 'wangye', id: 1986 })

// let obj = { age: 100, name: 'okman', id: 2000 }
// printInfo(obj)

//ts中的属性接口定义，加入？，为可选参数
// interface FullInfo{
//     name:string
//     age?:number
// }

// function printInfo(info:FullInfo):void{
//     if(info.age){
//         alert(info.name+" age is "+info.age)
//     }else{
//         alert(info.name)
//     }
// }

// printInfo({name:'wangye'})
// printInfo({name:'wy',age:33})

//接口的一个demo:ajax

// interface Config {
//     type: string
//     url: string
//     data?: string
//     dataType: string
// }

// function ajax(config: Config) {
//     let xhr = new XMLHttpRequest()

//     xhr.open(config.type, config.url, true)
//     xhr.send(config.data)
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             console.log('success xhr req done...')
//             if (config.dataType == 'json') {
//                 console.log(JSON.parse(xhr.responseText))
//             } else {
//                 console.log(xhr.responseText)
//             }
//         }
//     }
// }

// let ajaxConfig = {
//     type: 'get',
//     url: 'http://a.itying.com/api/productlist',
//     data: 'wy',
//     dataType: 'json'
// }

// ajax(ajaxConfig)

//ts中对属性的接口定义
// interface ajaxConfig {
//     type: string
//     url: string
//     data?: string
//     dataType: string
// }

// function ajax(config: ajaxConfig): void {
//     let xhr = new XMLHttpRequest
//     xhr.open(config.type, config.url, true)
//     xhr.send(config.data)
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             console.log('success send and response by ajax')
//             if (config.dataType == 'json') {
//                 console.log(JSON.parse(xhr.responseText))
//             } else {
//                 console.log(xhr.responseText)
//             }
//         }
//     }
// }

// ajax({ type: 'get', url: 'http://a.itying.com/api/productlist', dataType: 'json' })

// interface encrypt {
//     (key: string, value: string): string
// }

// let md5: encrypt = function (key: string, value: string): string {
//     return key + ' md5: ' + value
// }
// //参数不一致，定义的时候不报错，但执行的时候报错
// let md4: encrypt = function (key: string): string {
//     return key
// }


// //返回值不一致，定义的时候即报错
// // var md3:encrypt=function(key:string):number{
// //     return key
// // }

// console.log(md5('wangye', '33'))
// console.log(md4('key'))

//函数接口定义了两个参数，但接口实现传入三个参数，报错
// let md6:encrypt=function(key:string,value:string,node:string):string{

// }


//函数接口类型
// interface SearchFunc {
//     (source: string, substring: string): boolean
// }

// let myFunc: SearchFunc
// //类型推断
// myFunc = function (src, sub) {
//     let result = src.search(sub)
//     return result > -1
// }

// console.log(myFunc('wangye','w'))

//可索引接口类型
// interface StringArray{
//     //索引是数字型，数组的值为字符型
//     [index:number]:string
// }

// let myArr:StringArray=['wangye','wy']
// let myStr=myArr[1]
// alert(myStr)

//readonly只读限制
// interface ReadOnlyStringArray{
//     readonly [index:number]:string
// }
// //readonly标识的，只允许初始化一次，不能再被赋值
// let myArr:ReadOnlyStringArray=['123','wangye']
// myArr[2]='okman' //报错

// //接口是可继承的，可继承多个接口
// interface Animal {
//     eat(): string
// }

// interface Dog extends Animal {
//     bit(): string
// }

// class Taidi implements Dog {
//     name: string = 'Taidi'
//     constructor(name: string) { this.name = name }
//     bit() {
//         return 'Dog bit...class :' + this.name
//     }
//     eat() {
//         return 'Animal eat...class :' + this.name
//     }
// }

// let taidi = new Taidi('FuckTheSkyTaidi')
// console.log(taidi.bit())
// console.log(taidi.eat())


//接口和类混合使用 案例
// interface Animal {
//     eat(): string
// }

// interface Dog extends Animal {
//     bit(): string
// }

// class yellowDog {
//     color: string
//     constructor(color: string) { this.color = color }
//     // private yell(): void { alert('yellowDog...') }
//     protected yell(): void { alert('yellowDog...') }
// }

// class Taidi extends yellowDog implements Dog {
//     name: string = 'Taidi'
//     // constructor(name: string) { this.name = name }
//     constructor(name: string, color: string) {
//         super(color)
//         this.name = name
//     }
//     bit() {
//         return 'Dog bit...class :' + this.name
//     }
//     eat() {
//         return 'Animal eat...class :' + this.name
//     }
//     yell(){
//         alert('from yellowDog...')
//     }
// }

// let taidi = new Taidi('FuckTheSkyTaidi', 'blue')
// console.log(taidi.bit())
// console.log(taidi.eat())
// taidi.yell()

// //接口继承类
// class Control {
//     // private state:any
//     state: any
// }

// interface SelectableControl extends Control {
//     select(): void
// }

// class Button extends Control implements SelectableControl {
//     select() { }
// }

// class Text2 extends Control {
//     select() { }
// }

// //这个语句会报错，因为只实现了接口，但接口继承了Control父类，这个类没有继承父类
// // class Image2 implements SelectableControl{

// // }

// class Location2 {

// }

// let ai = new Text2()

//泛型
// function identity<T>(args: T): T {
//     return args
// }

// //通过<string>的方式显式声明
// // let output = identity<string>('mystring')
// // alert(output)

// //通过编译器类型推断
// let output=identity('mystring')
// alert(output)

// function getValue<T>(value: T): T {
//     return value
// }

// 报错，<number>约束了只能接受number类型的，但传入string类型的
// alert(getValue<number>('this is a string'))


// class MinNum {
//     list: number[] = []
//     add(num: number) {
//         this.list.push(num)
//     }
//     min(): number {
//         let minNum = this.list[0]
//         for (let i = 0; i < this.list.length; i++) {
//             if (minNum > this.list[i]) {
//                 minNum = this.list[i]
//             }
//         }
//         return minNum
//     }
// }

// let myArr=new MinNum()
// myArr.add(1)
// myArr.add(2)
// myArr.add(3)
// myArr.add(-1)
// alert(myArr.min())

// class MinNum <T>{
//     list: T[] = []
//     add(num: T) {
//         this.list.push(num)
//     }
//     min(): T {
//         let minNum = this.list[0]
//         for (let i = 0; i < this.list.length; i++) {
//             if (minNum > this.list[i]) {
//                 minNum = this.list[i]
//             }
//         }
//         return minNum
//     }
// }

// // let myArr=new MinNum<number>()
// // myArr.add('1')
// // myArr.add('2')
// let myArr=new MinNum<string>()
// myArr.add('abstract')
// myArr.add('protected')
// alert(myArr.min())


//泛型接口的第一种写法
// interface ConfigFn {
//     <T>(value: T): T
// }

// let getValue: ConfigFn = function <T>(value: T): T {
//     return value
// }

// //<string>对返回值起到约束的作用
// console.log(getValue<string>('okman'))


//泛型接口的第二种写法
// interface ConfigFn<T> {
//     (value: T): T
// }

// function getData<T>(value: T): T {
//     return value
// }

// let myFn: ConfigFn<string> = getData
// alert(myFn('wangye'))

// class User {
//     username: string | undefined
//     password: string | undefined
// }

// class MysqlDb{
//     add(user:User):boolean{
//         console.log(user)
//         return true
//     }
// }

// let u=new User()
// u.username='wangye'
// u.password='123456'

// let Db=new MysqlDb()
// Db.add(u)


//泛型实现
// class User {
//     username: string | undefined
//     password: string | undefined
// }

// class Article {
//     title: string=''
//     time: string=''
//     public: string=''
// }
// class MysqlDb<T> {
//     add(info: T): boolean {
//         console.log(info)
//         return true
//     }
// }

// let u = new User()
// u.username = 'wangye'
// u.password = '123456'


// let a=new Article()
// a.public='人民网'
// a.time='2019-5-12'
// a.title='母亲节'

// // //使用类型推断
// // let Db = new MysqlDb()
// // Db.add(u)
// // Db.add(a)

// //采用泛型显式声明
// let Dbu=new MysqlDb<User>()
// Dbu.add(u)
// Dbu.add(a) //报错，实例已经约束了传入<User>类，但实际传入的是Article类


// interface DBI<T> {
//     add(inof: T): boolean
//     update(info: T, id: number): boolean
//     delete(id: number): boolean
//     get(id: number): boolean
// }

// class MysqlDB<T> implements DBI<T>{
//     add(inof: T): boolean {
//         throw new Error("Method not implemented.");
//     }
//     update(info: T, id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     delete(id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
//     get(id: number): boolean {
//         throw new Error("Method not implemented.");
//     }
// }

// import * as db from './modules/db'
// import {getData} from './modules/db'
// getData()

// import getData, * as db from './modules/db'
// getData()