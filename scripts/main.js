function Solve(val) {
    var v = document.getElementByClass('display');
    v.value += val;
 }
 function Result() {
    var num1 = document.getElementByClass('display').value;
    var num2 = eval(num1);
    document.getElementById('display').value = num2;
 }
 function Clear() {
    var inp = document.getElementById('Clear1');
    inp.value = '';
 }
 function Back() {
    var ev = document.getElementById('Clear2');
    ev.value = ev.value.slice(0,-1);
 }