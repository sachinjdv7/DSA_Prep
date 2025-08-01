
class Person {
    constructor(fname, lname) {

        this.fname = fname,
            this.lname = lname

        console.log(this.getFullName())


    }

    getFullName() {
        return `${this.fname} ${this.lname}`
    }
}

const p1 = new Person("sachin", "jadhav")
const p2 = new Person("nitin", "jadhav")

// console.log(p1.getFullName())
// console.log(p2.getFullName())