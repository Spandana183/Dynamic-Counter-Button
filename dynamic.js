let count=0;
function increment(){
    count++;
    document.getElementById("data").innerText=count;
}

function decrement(){
    if(count>0) {
    count--;
    document.getElementById("data").innerText=count;
}
}