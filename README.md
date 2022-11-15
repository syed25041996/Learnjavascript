<h1> Data Types in JavaScript </h1>

<h2><em> Primitive data types </em></h2>
<table>
    <tr>
        <td>Type </td>
        <td>type of return value  </td>
        <td>Object wrapper </td>
    </tr>
    <tr>
        <td>Null</td>
        <td>"object"</td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>Undefined</td>
        <td>"undefined"</td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>Boolean</td>
        <td>"boolean"</td>
        <td>Boolean</td>
    </tr>
    <tr>
        <td>Number</td>
        <td>"number"</td>
        <td>Number</td>
    </tr>
    <tr>
        <td>String</td>
        <td>"string"</td>
        <td>String</td>
    </tr>

</table>

<em><i> Object and Arrays are non primitive data types </i> </em>
<p> JavaScript is a dynamic and weakly typed language </p>

<pre>
<code>

var num = 42 //It is of a Number type
num = "42" //it is of a String type
num = true //it is of Boolean type

</code>
</pre>

<h2>Scope refers to the availability of variables and functions in certain parts of the code.</h2>
<p>
In JavaScript, a variable has two types of scope:

Global Scope
Local Scope
</p>

<p>
Global Scope
A variable declared at the top of a program or outside of a function is considered a global scope variable.

<pre>
<code>
// program to print a text 
let a = "hello";

function greet () {
    console.log(a);
}
</code>
</pre>

<i>greet(); // hello</i>

In the above program, variable a is declared at the top of a program and is a global variable. It means the variable a can be used anywhere in the program.
</p>

<p>
Local Scope
A variable can also have a local scope, i.e it can only be accessed within a function.

<pre>
<code>
// program showing local scope of a variable
let a = "hello";

function greet() {
    let b = "World"
    console.log(a + b);
}

greet();
console.log(a + b); // error
</code>
</pre>

helloWorld
Uncaught ReferenceError: b is not defined
</p>