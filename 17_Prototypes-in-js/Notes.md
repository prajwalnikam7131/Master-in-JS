# differece between functions and Methods:

## function:-
1. A function is a block of code designed to perform a specific task.

2. It can be defined using the function keyword,
followed by name and optional parameters.

3. for e.g.-
<code>

    function addNumbers(a, b) {
        let sum = a + b;
        return sum;
    }

</code>


## Methods:
1. A method is a function that associated with an object.
2. It is a property of an object that contains a function definition

<code>

    let employee = {
        empname: "Rahul",
        department: "sales",

        details: function () {
        return this.empname + " works with Department " + this.department;
        }
    };

</code>

