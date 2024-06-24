/* 
    ## Constructor function : 
        -> A constructor function is a special function used to create and initialize objects of a specific type. When you create an object using the new keyword, the constructor function gets called, and it sets values for the object’s properties.

        * constructor function always returns new Instances that means new copy retuns. 

 */

        function User(userName, loginCount, isLoggedIn) {
            this.userName = userName;
            this.loginCount = loginCount;
            this.isLoggedIn = isLoggedIn;
        }
        
        const userOne = new User('raftaar', 9, true);
        const userTwo = new User('Prajwal', 4, false);
        
        console.log(userOne);
        console.log(userTwo);
        