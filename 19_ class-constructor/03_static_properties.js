class User {
    constructor(username) {
        this.username = username;
    }
    logaMe() {
        console.log(`Username: ${this.username}`);
    }

    static createdId() {
        return 123;
    }
}

const prajwal = new User('prajwal')
// console.log(prajwal.createdId());

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher('iphone', 'i@PaymentMethodChangeEvent.com')

iphone.logaMe();