function onlyNumbersEnter(evt){
    let theEvent = evt || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    let regex = /^[0-1.]+$/;
    if(!regex.test(key)){
        theEvent.returnValue = false;
        if(theEvent.preventDefault) theEvent.preventDefault();
    }

}

function convert(){
    let inputs = document.getElementsByClassName("group-input");
    let binary = inputs[0].children["bin"].value;
    let decimal = inputs[1].children["dec"];

    if(binary != ""){
        decimal.value = parseInt(binary, 2);
    }else{
        decimal.value = "";
    }

}

