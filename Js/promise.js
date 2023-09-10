function get_flour() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const flour = "🥚";
            resolve(flour);
        }, 2000);
    })
}
function make_dough(flour) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const dough = flour + "🥔";
            resolve(dough);
        }, 3000);
    })
}
function bake_pizza(dough) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const pizza = dough + "🍕";
            reject("Pizza not made");
        }, 4000);
    })
}

// get_flour().then((flour) => {
//     console.log("Flour fetched successfully...", flour);
//     return make_dough(flour);
// })
// .then((dough) => {
//     console.log("dough made successfully...", dough);
//     return bake_pizza(dough);
// })
// .then((pizza) => {
//     console.log("pizza made successfully...", pizza);
// })
// .catch((error)=>{
//     console.log("error occured : ",error);
// })
// .finally(() => {
//     console.log("Process completed...");
// });
//Lets write the above code using async await
async function make_pizza(){
    try{
        const flour = await get_flour();//stores the value passed by the resolve()
        console.log("Flour fetched successfully...", flour);
        const dough = await make_dough(flour);//stores the value passed by the resolve()
        console.log("dough made successfully...", dough);
        const pizza = await bake_pizza(dough);//stores the value passed by the resolve()
        console.log("Flour fetched successfully...", pizza);
    }catch(error){
        console.log("error occured ",error);
    }
    console.log("Process completed");
}
make_pizza();