
function genaretor(){
    const inputValue =  Math.round(Math.random()*10000);
    const inputValueEven = inputValue + '';
    if(inputValueEven.length == 4){
        document.getElementById('genarate-input').value = inputValue;
    }
}
// typing
document.getElementById('typing').addEventListener('click',function(event){
  const events = event.target.innerText;
  const typingInput = document.getElementById('typing-input');
 if(isNaN(events)){
    if(events  == 'C'){
        typingInput.value = '';
      }
 }else{
    typingInput.value =  typingInput.value + events; 
 }
});
function chekCode(){
    const typingInput = document.getElementById('typing-input');
    const genarateInput = document.getElementById('genarate-input');
    // 
    if(typingInput.value == genarateInput.value){
        alert('Your Code Is valid')
        typingInput.value = '';
        genarateInput.value = '';
        document.getElementById('yes').style.display = 'block'
        document.getElementById('not').style.display = 'none'
    }else{
        alert('Wrong Code')
        document.getElementById('not').style.display = 'block'
        document.getElementById('yes').style.display = 'none'
    }
}