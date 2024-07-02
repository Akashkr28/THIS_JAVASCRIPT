function Product(n, p,  d, i){
    this.name = n;
    this.price = p;
    this.desc = d;
    this.image = i;

    // when we add return function
    // return 10;

    // when we return as
    // return {x: 88}          //Output: {x: 88};

    this.display = function () {
        console.log("Name: ", this.name, "Price", this.price);
    }
}

const p1 = new Product("Iphone", 100000, "Apple Iphone", "image");
console.log(p1);
p1.display()

// In first normal case or use "return 10", the Output will be:
// Product {
//   name: 'Iphone',
//   price: 100000,
//   desc: 'Apple Iphone',
//   image: 'image'
// }