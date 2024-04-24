const images = ['dice-1.svg',
'dice-2.svg',
'dice-3.svg',
'dice-4.svg',
'dice-5.svg',
'dice-6.svg'];



var d = new Date();
d = new Date();
var date_format_str = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";
// console.log(date_format_str);

day = document.querySelector('#day').innerHTML = date_format_str;


// const button = document.querySelector('#btn')
// console.log(firstDice, secDice)
function roll() {

    const firstDice = Math.floor(Math.random()*6)
    const secDice = Math.floor(Math.random()*6)
    // console.log(firstDice, secDice)
    document.querySelector('#die-1').setAttribute('src', images[firstDice])
    document.querySelector('#die-2').setAttribute('src', images[secDice])
    total = document.querySelector('#total').innerHTML = (firstDice + 1) + (secDice + 1)

    if (total > 8) {
        document.querySelector('#result').innerHTML = 'You Win! Try again!'
    } else if (total == 8) {
        document.querySelector('#result').innerHTML = 'You draw! Try again!'
    } else {
        document.querySelector('#result').innerHTML = 'You did not win! Try again!'
    }
}