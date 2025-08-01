
const obj1 = {

    fname: "sachin",
    lanme: "jadhav",
    getFullName: function () {
        return `${this.fname} ${this.lanme}`
    }
}

const obj2 = {


    fname: "nitin",
    lanme: "kk",
    // getFullName: function () {
    //     return `${this.fname} ${this.lanme}`
    // }

}

obj2.__proto__ = obj1   // here now obj2 has the access to the getFullName

// violet dry principle => use classes

console.log(obj1.getFullName())
console.log(obj2.getFullName())


