// variable 
const a = 10;
let b = 20;
console.log(b);
let c = a + b
console.log(a);
console.log(c);


function getName(){
    console.log("Hello Anjali");
}
getName ();

const getName2 =()=>{
    console.log("Hello anjali from arrow function");
}
getName2();
// create a function to add two numbers 
function add(a,b){
    return a+b;
    }
    const sum = add(10, 20);
console.log(`The sum of two numbers is ${sum}`);





console.log("Start")
setTimeout(() =>{
    console.log("Hello Anjali from setTimeout")
}, 0)

setImmediate(()=>{
    console.log("Hello anjali from setImmediate")
})
process.nextTick(() =>{
    console.log("hello Anjali from process.nextTick")
})
await newPromise(resolve, reject) =>{
    setTimeout (()=>{
        console.log("He;;o anjali from setTimeout")
        resolve()
    },0)
}

console.log("End")


