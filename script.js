console.log('Write your code here!')
console.log('customers and moment are available to you.')

// Consider making a Customer class that takes one customer's data (one element of the `customers` array). Some methods you could implement:

//   * `getName()` - returns the full name, capitalized correctly
//   * `getAddress()` - returns the address, formatted correctly
//   * `makeDOMNode()` - return the entire DOM node, probably a `div`, for displaying the customer

class Employee {
    constructor(name, startDate, birthDate, address, thumbnailPhoto, email) {
        // this.name = name;
        // this.startDate = startDate;
        // this.address = address;
        // this.birthDate = birthDate;
        // this.thumbnailPhoto = thumbnailPhoto;
    }

    getName() {
        return this.name(" ")[1, 2]
    }

    getAddress(){
    }
    getPhoneNumber() {
    }
    getThumbnailPhoto() {
    }
    getCustomerSince() => {
    return moment(registered).format('MMM Do, YYYY')
    }
    getEmail() {
    }
    getBirthDate() => {
    return moment(dob).format('MMM Do, YYYY')
    }


var phoenix = new Employee("Phoenix Carter",
    new Date())
