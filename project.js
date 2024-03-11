const allBtn=document.getElementsByClassName('button');
console.log(allBtn)
let count=0
for(btn of allBtn){
  btn.addEventListener('click',function(){
    count=count+1
    console.log('select korsi')
    document.getElementById('seat-count').innerText=count;
    console.log(count)
  })
  
}