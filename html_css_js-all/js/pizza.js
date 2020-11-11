class Pizza{
    constructor(name){
        this.cart = [];
        this.user = name;
        console.log(`Login by ${this.user}\n`);
    }

    // this will take item object and add in a cart array
    add_item(item){
        this.cart.push(item);
    }

    // this will take item name and remove the item from cart
    remove_item(name){
        this.cart = this.cart.filter((value) => {
            return value.name != name;
        });
    }

    // this will print the invoice detail
    get_cart(){
        for(var i in this.cart){
            console.log(`Item added - ${this.cart[i].name} | ${this.cart[i].qty} | ${this.cart[i].price}`);
        }
        console.log("\n");
    }

    invoice(){
        var total_amnt = 0;
        console.log("invoice");
        console.log(`item   |   qty |   price   |   amount`);
        for(var i in this.cart){
            console.log(`${this.cart[i].name} | ${this.cart[i].qty} | ${this.cart[i].price} | ${this.cart[i].qty * this.cart[i].price}`);
            total_amnt += this.cart[i].qty * this.cart[i].price;
        }
        console.log(`total amount = ${total_amnt}`);
        console.log("\n");
    }
}

var p = new Pizza("nazish");
p.add_item({
    name: "margaritha",
    qty: 2,
    price: 100
});
p.add_item({
    name: "corn",
    qty: 1,
    price: 200
});
p.add_item({
    name: "chichen barbeque",
    qty: 3,
    price: 300
});
p.get_cart();
p.invoice();
p.remove_item("margaritha");
p.get_cart();
p.invoice();

// login by nazish

// item added - margaritha | 2 | 100 | 200
// item added - corn | 1 | 200 | 200
// item added - chichen barbeque | 3 | 300 | 900

// invoice
// item | qty | price | amount
// margaritha | 2 | 100 | 200
// corn | 1 | 200 | 200
// chichen barbeque | 3 | 300 | 900
// total amount => 1300

// item removed

// invoice
// item | qty | price | amount
// corn | 1 | 200 | 200
// chichen barbeque | 3 | 300 | 900
// total amount => 1100