function doEven() {
    let num1 = +document.querySelector('#num1').value
    // let num2 = +document.querySelector('#num2').value
    let show = document.querySelector('#show')
    let result = num1%2
    console.log(result);
    // console.log(num1%2);
    if (result) {
        show.innerHTML = num1 + ' is odd number'

    } else {
        show.innerHTML = num1 + ' is Even number'
    }
}