let stocks = {
    Fruits: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone","cup","stick"],
    toppings: ["chocolate", "peanuts"]
}

let is_shop_open = true;

function time(ms) {
    return new Promise((resolve, reject) => {
    if(is_shop_open) {
        setTimeout(resolve, ms);
    } else {
        reject(console.log("Shop is closed"));
    }
    });
}

async function kitchen () {
    try {
    await time(50);
    console.log(`Step: 1 - ${stocks.Fruits[0]} was selected`)

    //await time(0000);
    console.log("Step: 2 - Start the production")

    //await time(2000);
    console.log("Step: 3 -  Cut the fruit")

    //await time(1000);
    console.log(`Step: 4 - ${stocks.liquid[0]} and ${stocks.liquid[1]} was added`)

    //await time(1000);
    console.log("Step: 5 - Start the machine")

    //await time(2000);
    console.log(`Step: 6 - Ice cream placed on ${stocks.holder[0]} `)

    //await time(3000);
    console.log(`Step: 7 - ${stocks.toppings[0]} was selected`)

    //await time(2000);
    console.log("Step: 8 - Serve ice cream")
    } catch(error) {
        console.log("Customer left", error);
    } finally {
        console.log("Day ended, shop is closed");
    }
}

// calling kitchen function
kitchen();