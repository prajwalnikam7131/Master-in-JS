// JavaScript Set Methods :

const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

// # new Set() method : This method was already learned in the previous chapter.

// # add() Method : This method was already learned in the previous chapter.

// # has() Method : The has() method returns 'true' if a specified value exists in a set.

const iscorrect1 = vowels.has('f');
console.log(iscorrect1); // false

const iscorrect2 = vowels.has('u');
console.log(iscorrect2); // true


// # values() Method : The values() method returns an Iterator object with the values in a Set.

const allValues = vowels.values();
console.log(allValues);


/* 
    Note : 
        * keys() Method :A Set has no keys, so keys() returns the same as values().
        * entries() Method :A Set has no keys, so the entries() method returns [value,value].
        
    This makes Sets compatible with Maps.
*/