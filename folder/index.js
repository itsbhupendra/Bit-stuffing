function f1(data){
    var bit = document.getElementById("bit").value;
    // document.write(bit)
    var count = 0;
    var ans = "";
    for (let index = 0; index < bit.length; index++) {
        if(bit.charAt(index) == '0'){
            count = 0;
        }else{
            count++;
        }
        ans = ans+bit.charAt(index);

        if(count == 5){
            ans = ans + '0';
            count = 0;
        }

    }
    // console.log(ans);

    document.getElementById("res").value = ans + " Stuffed ";
    // document.write(ans)
}

function f2(data){
    var bit = document.getElementById("bit").value;
    // document.write(bit)
    // document.getElementById("res").value = bit;
    var count = 0;
    var ans = "";
    for (let index = 0; index < bit.length; index++) {
        if(bit.charAt(index) == '0'){
            if(count==5){
                count = 0;
                continue;
            }
            count = 0;
        }else{
            count++;
        }
        ans = ans+bit.charAt(index);
    }
    console.log(ans);
    document.getElementById("res").value = ans + " Unstuffed ";

}
