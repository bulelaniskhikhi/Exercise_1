// function myFunction() {
//     alert("Hello! My name is (Xena)!!");
//     }

// const btndisplay = document.getElementById('btnMadeBY');

// btndisplay.addEventListener('click', ()=>{
//     alert('Hello world!')
// })

const btndisplay = document.getElementById('display');

btndisplay.addEventListener('click', ()=>{
    document.getElementById('content'). 
    innerText = 'hello my name is xena';
})

function testVariable() {
    var strText = document.getElementById("name").value;          
    var strText1 = document.getElementById("surname").value;
    var result = strText + ' ' + strText1;
    document.getElementById('spanResult').textContent = result;
     
}