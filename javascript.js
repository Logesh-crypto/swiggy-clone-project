const slides =document.querySelectorAll(".slide")
var counter=0;
// console.log("the value is ",slides)
slides.forEach(
    (slide, index) => {
        slide.style.left =` ${index *100}%`
        //  console.log(index);
    
    }
)
// console.log("The value is number is ",number)
const goPrev = ()=> {
    counter--
    slideImage()
}
const goNext = () => {

    if(counter<7){
        counter++
        
        slideImage()
    }
    if(counter===7){
        var btn = document.getElementById("right");
        btn.style.cursor="not-allowed"
    }
    }

const slideImage =() => {

    slides.forEach(
        
        (slide)=> {
            slide.style.transform = `translateX(-${counter * 300}%)`
        }
    
    )
}


// query for restaurant image 
const imageslides = document.querySelectorAll(".fig")
var image_count = 0;
imageslides.forEach(
    (slide, index) => {
        slide.style.left =` ${index *100}%`
    
    }
)

const imageleft = ()=> {
    image_count--

    Image()
}
const imageright = () => {

    if(image_count<3){
        image_count++
        Image()
    }
    
    if(image_count===3){
        console.log(image_count===3)
        var btniimage = document.getElementById("btnright");
        btniimage.style.cursor="not-allowed"
    }
    }

const Image =() => {

    imageslides.forEach(
        
        (slide)=> {
            slide.style.transform = `translateX(-${image_count * 340}%)`
        }
    
    )
}

let count = 0;

// Assuming you're targeting a class, use querySelector
document.querySelector('.child-food-order').addEventListener('click', function(event) {
    add_count_value();
});

const add_count_value = () => {
    count++;
    document.getElementById('a').textContent=count;

};


// search filter
function filterItems(){
    let input=document.getElementById('searchinput').value.toLowerCase();
    var items=document.querySelectorAll('#itemlist  .item');
    // console.log(items)

    items.forEach(function(item){
        if(item.innerHTML.toLowerCase().indexOf(input) > -1){
            item.style.display='';
        }
        else{
            item.style.display='none';
        }
       });
    
}






// dynamic for narbar in javascriopt

// Get references to the checkbox and slide-navbar
const menuToggle = document.getElementById('menu-toggle');
const slideNavbar = document.getElementById('slide-navbar');
const header = document.getElementById('header');
const header2 = document.getElementById('header2');
const header3 = document.getElementById('header3');


// Add an event listener to the checkbox
menuToggle.addEventListener('change', function() {
    if (menuToggle.checked) {

        // When checked, move the slide-navbar into vie
        slideNavbar.style.transform = 'translateX(70px)';
        header.style.filter = 'blur(2px)' ;
        header2.style.filter= 'blur(2px)';
        header3.style.filter='blur(2px)';
    } 
    
   
    else {
        // When unchecked, move the slide-navbar out of view
        slideNavbar.style.transform = 'translateX(-450px)'; // Adjust value as needed
        // slideNavbar.style.width = '30%'; // Reset to default width
        header.style.filter = 'none'
        header2.style.filter= 'none'
        header3.style.filter='none'
    }
});



function buttonclicked(){
    let checkbox=document.getElementById('menu-toggle');
    
    slideNavbar.style.transform = 'translateX(-450px)'; // Adjust value as needed
    // slideNavbar.style.width = '30%'; // Reset to default width
    header.style.filter = 'none'
    header2.style.filter= 'none'
    header3.style.filter='none'
    
    checkbox.checked = false;
    
        let inputvalue=document.getElementById("searchinput").value;
        let inputval = document.getElementById('searchinput').value;
        document.getElementById('yourlocation').textContent=inputvalue;
        document.getElementById('location').textContent = inputvalue;
    
    
}











//  dynamic image import and export to second page ....
const cartArray = JSON.parse(localStorage.getItem('cartArray')) || [];

document.querySelectorAll('.addbtn').forEach(button => {
    button.addEventListener('click', function() {
        const itemDiv = this.closest('.item');
        const numberElement = itemDiv.querySelector('p.number');

        const foodnameElement = itemDiv.querySelector('.foodname');
        const foodname = foodnameElement ? foodnameElement.innerText : '';


        const number = numberElement ? numberElement.innerText : '';

        // **Added this line** to get the image from the button's `data-image` attribute
        const image = this.getAttribute('data-image');

        // **Changed this line** to create an object with both image and price
        const cartItem = { image, foodname, price: number };
        console.log(cartItem)

        // **Changed this line** to push the object into the array
        cartArray.push(cartItem);
        localStorage.setItem('cartArray', JSON.stringify(cartArray));

        
    });
});
document.getElementById('viewCart').addEventListener('click', function(){
    window.location.href = 'cartpage/index.html';


});