let textc=['rgb(255, 62, 62)','rgb(106, 156, 25)','rgb(55, 110, 18)','rgb(30, 168, 113)','rgb(50, 87, 255)','rgb(12, 23, 180)','rgb(91, 37, 161)','rgb(189, 24, 153)','rgb(175, 34, 53)','rgb(0, 0, 0)']
let c_indx=9;
function decrease(){
    let number=document.getElementById('number');
    let main_number=Number(number.innerHTML);
    main_number--;
    number.innerHTML=main_number;
    c_indx--
    color();
}

function reset(){
    let number=document.getElementById('number');
    number.innerHTML=0;
    c_indx=9;
    color()
}

function increase(){
    let number=document.getElementById('number');
    let main_number=Number(number.innerHTML);
    main_number++;
    number.innerHTML=main_number;
    c_indx++
    color()
}

function color(){
    if(c_indx==-1){
        c_indx=9;
    }
    if(c_indx==10){
        c_indx=0;
    }
    let number=document.getElementById('number');
    number.style.color= textc[c_indx]
}