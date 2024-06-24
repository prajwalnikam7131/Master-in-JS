const user = {
    name: 'chai',
    email: 'chai@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeacherSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,

    // to link two properties in object OR prototype reference.
    __proto__: TeacherSupport
}


//  you can access out side
Teacher.__proto__ = user



// ## In new moder javaScript we can use moder syntax:

Object.setPrototypeOf(TeacherSupport, Teacher);



// # Example for better understanding :

let anotherUsernName = 'chaiAurCode      ';

String.prototype.trueLength = function () {
    console.log(this);
    console.log(`true length is: ${this.trim().length}`);
}

anotherUsernName.trueLength();
'prajwal'.trueLength();
'prajwal Nikam  '.trueLength();