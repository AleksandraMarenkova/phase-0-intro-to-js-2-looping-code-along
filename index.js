// Code your solutions in this file
function countDown(ten){
    while(ten>=0){
    console.log(ten);
    ten--;

    }

}
function writeCards(arrayname,event){
let brisolt= [];
for (let i =0; i<arrayname.length;i++){
    brisolt[i]=  `Thank you, ${arrayname[i]}, for the wonderful ${event} gift!`;
}
return brisolt;
}
