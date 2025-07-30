



//Code basis
const container = document.querySelector('.container');
container.style.gridTemplateColumns = (`repeat(16, 1fr)`);
container.style.gridTemplateRows = (`repeat(16, 1fr)`);
    for (let i = 0; i < 256; i++) {
        var element = document.createElement('div');
        element.classList.add('items');
        container.append(element);
    }


//  Info on grid layout    
 const amount = document.querySelector('.grid-amount');
amount.textContent =(`Grid layout of 16 by 16. Press the button to change to choice layout`);



//Button for changing grid layout
const button = document.querySelector('.btn');
button.addEventListener('click',()=> {
    let num =  prompt("Enter Grid box of your choice",16, ); checkValue();
    const numNotSquared = num;
    if (numNotSquared === null) {
         nom = 16;
         num = 16;
    }



    //Setting element to show the amount in a grid layout
    const amount = document.querySelector('.grid-amount');
    amount.textContent =(`Grid layout of ${numNotSquared} by ${numNotSquared}`);




    //To check whether value is between 3 and 99 
    function checkValue(){
        if (num == undefined) {
            return num = numNotSquared;
        }else if (num < 3) {
            num = prompt("Invalid... value must be between 3 and 99 i.e 16", 16), checkValue();
        }else if (num > 99) {
            num = prompt("Invalid... value must be between 3 and 99 i.e 16", 16), checkValue();
        } 
    }



    //To enable the changing of the grid layout
    container.style.gridTemplateColumns = (`repeat(${numNotSquared}, 1fr)`);
    container.style.gridTemplateRows = (`repeat(${numNotSquared}, 1fr)`);
    amount.style.transform = ('translate(130px)')
    num = num * num;
    for (let i = 0; i < num; i++) {
    var element = document.createElement('div');
    element.classList.add('items');
    container.append(element);
}
})
//Button code ending 

//Testing some variables and called Nodes
console.log(container);
console.log(num);
