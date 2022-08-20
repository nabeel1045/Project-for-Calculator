let screen = document.getElementById('screen');
function button(value){
    screen.value += value;
}
function clearscreen(){
    screen.value ="";
}
function findresult(){
    let result = eval(screen.value)
    screen.value = result;
}