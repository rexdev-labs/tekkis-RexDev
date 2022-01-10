function doit(x,y){
    while(x != y){
        if(x > y) {
            x -= y;
        }
        else {
            y -= x;
        }
    }
    return x;
}

console.log(`Result is `+doit(1071, 1029));
