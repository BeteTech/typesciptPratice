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

