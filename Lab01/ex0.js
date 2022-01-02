const test = ["spring", "home", "city", "to", "newstring"]


function newString(){
    for(let i = 0; i < test.length; i++){
        if(test[i].length > 2){
            test[i] = test[i].substring(0,2) + test[i].substring(test[i].length - 2)
        }else {
            test[i] = ""
        }
    }

    console.log(test)
}

newString()