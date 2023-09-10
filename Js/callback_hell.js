// Order -> personal details 
// function get_personal_details(callback){
//     setTimeout(()=>{
//         const fname = "Laiba";
//         const lname = "Khalil";
//         callback(fname,lname)
//     },2000)
// }
// function get_order(callback){
//     setTimeout(()=>{
//         const order ="2 burgers";
//         callback(order);
//     },2000)
// }

// get_personal_details((fname,lname)=>{
//     console.log("Personal details are taken");
//     get_order((order)=>{
//         console.log("Order completed :");
//         console.log("name of the customer : " ,fname," ",lname);
//         console.log("Burgers : ",order);
//     });
// })
// setTimeout(()=>{
//     console.log("Hello everyone"),2000
// })

// pizza -> dough -> flour

function get_flour(callback){
    setTimeout(() => {
        const flour = "🥚";
        callback(flour);
    }, 2000);
}

function make_dough(flour,callback){
    setTimeout(() => {
        const dough = flour+"🥔";
        callback(dough);
    }, 3000);
}
function bake_pizza(dough,callback){
    setTimeout(() => {
        const pizza ="🍕";
        callback(pizza);
    }, 4000);
}

get_flour((flour)=>{
    console.log("Here is the flour",flour);
    make_dough(flour,(dough)=>{
        console.log("Dough made successfully...",dough);
        bake_pizza(dough,(pizza)=>{
            console.log("pizza made successfully",pizza);
        })
    })
})