class Product {

    constructor(n, p, d, i) {
        this.name = n;
        this.desc = d;
        this.price = p;
        this.image = i;
    }

    displayProduct() {
        setTimeout(() => {
            console.log("Product details are", this.name, this.desc, this.price, this.image);
        }, 5000);
        console.log("Ending display")
    }
}

const p1 = new Product("Iphone", 100000, "Apple Iphone", "some image");
console.log(p1)
p1.displayProduct();

const p2 = new Product("GalaxyS23", 100000, "Samsung Galaxy S2", "some image");
console.log(p2);
p2.displayProduct()