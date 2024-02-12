const newYear="1 Jan 2025"

function calculate() {
    const today=new Date();
    const futuredate= new Date(newYear);
    const diff=futuredate-today;
    const days=Math.floor(diff/1000/3600/24);
    const hours=Math.floor((diff/1000/3600)%24);
    const minutes=Math.floor((diff/1000/60)%60);
    const seconds=Math.floor((diff/1000)%60);
   
document.getElementById('day').innerHTML=days;
document.getElementById('hour').innerHTML=formaT(hours);
document.getElementById('min').innerHTML=formaT(minutes);
document.getElementById('second').innerHTML=formaT(seconds);


    
    
    
    // console.log(days,hours,minutes,seconds);
    

}
 function formaT(t){
    if(t<10){
        return `0${t}`;
    }
    else{
        return t;
    }
 }
calculate();


setInterval(calculate,1000);