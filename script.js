console.log('Write your code here!')
console.log('customers and moment are available to you.')

// Consider making a Customer class that takes one customer's data (one element of the `customers` array). Some methods you could implement:

//   * `getName()` - returns the full name, capitalized correctly
//   * `getAddress()` - returns the address, formatted correctly
//   * `makeDOMNode()` - return the entire DOM node, probably a `div`, for displaying the customer

// function titleCase(word) {
//     console.log(word)
//     return word[0].toUpperCase() + word.slice(1)

// }

function capsEachWord (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
};

class Customer {
    constructor(customerInfo) {
        this.info = customerInfo

    }

    getName() {
        return capsEachWord(this.info.name.first) +
            ' ' +
            capsEachWord(this.info.name.last)
    }

    getEmail() {
        return this.info.email
    }

    getLocation() {
        // console.log(this.info.location.street)
        return capsEachWord(this.info.location.street) +
        '\n ' +
        capsEachWord(this.info.location.city) + ', ' + capsEachWord(this.info.location.state) + ' ' + (this.info.location.postcode)
    }
  
   
    getDates() {
        return 'DOB: ' +  moment(this.info.dob).format('MMM Do, YYYY') + '\n' +
        'Customer Since: ' + moment(this.info.registered).format('MMM Do, YYYY')
    }
    generateDom() {
        let div = document.createElement('div')
        div.classList.add('customer')

        let photo = document.createElement('img')
        photo.src = this.info.picture.large
        let nameH2 = document.createElement('h2')
        nameH2.innerText = this.getName()
        let email = document.createElement('p')
        email.innerText = this.getEmail()
        let location = document.createElement('p')
        location.innerText = this.getLocation()
        let dates = document.createElement('p')
        dates.innerText = this.getDates()
        let header = document.createElement('h1')
        
    
        
        div.appendChild(photo)
        div.appendChild(nameH2)
        div.appendChild(email)
        div.appendChild(location)
        div.appendChild(dates)
    

        return div

    }
}

let outputDiv = document.getElementById('container')
for (let customerInfo of customers) {
    let customer = new Customer(customerInfo)
    outputDiv.appendChild(customer.generateDom())
}