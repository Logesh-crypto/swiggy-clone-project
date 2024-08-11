

// Output the array of prices


    const cartArray = JSON.parse(localStorage.getItem('cartArray')) || [];
    console.log(cartArray)
    const cartList = document.getElementById('cart-list');
    
    cartArray.forEach(item => {
        const listItem = document.createElement('li');

        // **Changed this line** to display both image and price
        listItem.innerHTML = `<img src="${item.image}" alt="Item Image"> <br>${item.foodname} <br> $ ${item.price}`;
        
        cartList.appendChild(listItem);
    });

    const pricesArray = cartArray.map(item => item.price || '');

    // Output the new array of prices
    let total = 0;

pricesArray.forEach(ite => {
    total += parseFloat(ite) || 0; // Convert to number and add to total, handle non-numeric values
});

console.log(total);
document.getElementById('total').innerText = `: $${total}`;
const delivery = document.getElementById('delivery').innerHTML;
console.log(delivery)
var totaldelivery;
totaldelivery= Number(delivery) + Number(total);
document.getElementById('totaldeliverycharge').innerText= totaldelivery;




function backToMain() {
         window.location.href = '../index.html';
     }
     document.getElementById('clearCart').addEventListener('click', function() {
            localStorage.removeItem('cart'); // Remove the cart from local storage
            localStorage.removeItem('cartArray')
            localStorage.removeItem('number')
            cartList.innerHTML = ''; // This line clears the list

        });






// move the slide image which is import from localstorage

const slides =document.querySelectorAll(".contain")
var counter=0;
// console.log("the value is ",slides)
slides.forEach(
    (slide, index) => {
        slide.style.left =` ${index *100}%`
        //  console.log(index);

    
    }
)
const left = ()=> {
    counter--
    slideImage()
}
const right = () => {

    if(counter<7){
        counter++
        
        slideImage()
    }
    // if(counter===7){
    //     var btn = document.getElementById("right");
    //     btn.style.cursor="not-allowed"
    // }
    }

const slideImage =() => {

    slides.forEach(
        
        (slide)=> {
            slide.style.transform = `translateX(-${counter * 10}%)`
        }
    
    )
}


// order function execute
// var navbar = document.querySelector('.navbar');
// console.log(navbar)
// function ordernow(){
//     navbar.style.display='block';
//     var c=5
//     setTimeout(function() {
//         for
//         console.log(c)
//         if(c===1){
//         window.location.href = ''; // Replace with your target URL
//     }
//     }, 5000);
// }
var navbar = document.querySelector('.navbar')
var Redirecting = document.querySelector('.Redirecting')
let seconds =5;
function ordernow(){
    navbar.style.display='block';
for (let i = 0; i <= seconds; i++) {

    setTimeout(function() {
        let remaining = seconds - i;
        if (remaining > 0) {

            Redirecting.textContent = ` ${remaining} seconds...`;
        } else {
            window.location.href = '../index.html'; // Replace with your target URL
        }
    }, i * 1000); // Delay each message by i seconds
}
}