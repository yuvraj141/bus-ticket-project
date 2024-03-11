function showDetails(){
    const main=document.getElementById('main').classList.remove('hidden')
}
const allBtn=document.getElementsByClassName('button');
let seatCount=0;
for(btn of allBtn){
    btn.addEventListener('click',function(e){
        console.log('you clicked me')
       
        const seat=e.target.innerText
e.target.style.backgroundColor='green'
// button cant be pressed twice
e.target.setAttribute('disaSponsbled','true')
console.log(seatCount)
if(seatCount>3){
    alert('you cant select more then 4 Tickets');
    e.target.style.backgroundColor=''
    return;
}

     const selectedSeatContainer=document.getElementById('selected-seat-container')
     const li =document.createElement('li');
     const li2 =document.createElement('li');
     const li3 =document.createElement('li');
     
     li.innerText=seat;
     li2.innerText='Economy';
     li3.innerText=550;                 
     selectedSeatContainer.appendChild(li)
     selectedSeatContainer.appendChild(li2)
     selectedSeatContainer.appendChild(li3)
     const totalPrice=document.getElementById('total-price').innerText;
     const convertedTotalPrice=parseInt(totalPrice);
     document.getElementById('total-price').innerText=convertedTotalPrice+parseInt(li3.innerText);
     //grand-total
     const grandTotal=convertedTotalPrice+parseInt(li3.innerText);
     setInnerText('grand-total',grandTotal)

        seatCount=seatCount+1;
        const seatLeft=40-seatCount;
        setInnerText('seat-left',seatLeft);
        setInnerText('seat-count',seatCount);
    

    })
}
// function for setInnerText
function setInnerText(id,value){
    document.getElementById(id).innerText=value
}
//grand total CUPON APPLY
function grandTotal(){
    const total=document.getElementById('total-price').innerText
    const totalPrice=parseFloat(total)
const coupon=document.getElementById('coupon-input').value;
if(coupon==='NEW15' && seatCount==4){
   const grandTotal =totalPrice-totalPrice*0.15;
   document.getElementById('grand-total').innerText=grandTotal
}
else if(coupon==='COUPLE20' && seatCount==4){
    const grandTotal =totalPrice-totalPrice*0.20;
    document.getElementById('grand-total').innerText=grandTotal
}

}