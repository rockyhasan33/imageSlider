let currentCount = 0;
let slide = document.querySelectorAll('.slide');


function myFunc(num) {
    currentCount += num;
    Display(currentCount);
    console.log(currentCount)
    // console.log(currentCount)
 
}

// myFunc();



Display(0)

function Display(arr) {

    

    for (let i of slide) {
        i.style.display = 'none'
    }
    

    if(arr < 0) {
        console.log('inside first if condition.')
        currentCount = 3;
        arr = 3

    }

    if(arr == slide.length) {
        console.log('inside second if condition.')
        currentCount = 0;
        arr = 0;
    }  

    
    slide[arr].style.display = 'block';
    console.log('inside display functiion' ,arr);
}

