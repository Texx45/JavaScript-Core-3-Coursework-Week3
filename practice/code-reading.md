# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
{
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.

x on line 4 is only available inside the function so if you call the function it will give you 2, the console.log on line 7 cannot access inside the function therefore it will log 1 (from line 1)

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

calling the function f1() will return 10 as it has access to the variable on line 1. You will get an error when logging y as it is function scoped and you have no access to it.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

The first console.log produces 9. It will then return 10 as it will add 1 onto it. It will then return the mutated object. {x: 10}
