'use strict';


function calcAge(birthYear) {
    const age = 2037 - birthYear;

    function printAge() {
        let output = `${firstName} , you are ${age}, born in ${birthYear}`;
        console.log(output);

        if(birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true;
            const firstName = 'Steven';
            const str = `Oh, and you are a millenial, ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a = b;
            }
            // New variable with the same name.
            const output = 'NEW OUTPUT!';
        }
        // console.log(str);
        console.log(millenial);
        // add(2, 3);
    }
    printAge();

    console.log(firstName);

    return age;
}

const firstName = 'Jonas';
calcAge(1992);

