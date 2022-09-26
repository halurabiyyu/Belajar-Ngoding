function minimal(a, b){
    if(a<b){
        console.log(a);
    }else if(a>b){
        console.log(b);
    }else{
        console.log(a);
    }
};
minimal(1, 4);
minimal(3, 2);
minimal(3, 3);

function power(a, b){
    let total;
    total = a**b;
    console.log(total);
}
power(7, 3);
power(3, 3);
power(4, 0.5);