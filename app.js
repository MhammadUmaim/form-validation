function inputValid(e) {
    if(e.target.value.length < 9){
        console.log(e.target.nextElementSibling);
    e.target.nextElementSibling.innerText = 'Enter at least 8 char'
    e.target.nextElementSibling.style.display = "block";    
    e.target.nextElementSibling.style.color = "red";    
 return;  
}     
 e.target.nextElementSibling.style.display = "none";    
}
function userValid(e) {
    if(e.target.value.length < 3){
        console.log(e.target.nextElementSibling);
    e.target.nextElementSibling.innerText = 'Enter at least 3 char'
    e.target.nextElementSibling.style.display = "block";    
    e.target.nextElementSibling.style.color = "red";    
 return;  
}     
 e.target.nextElementSibling.style.display = "none";    
}
function emailValid(e) {
    if(e.target.value.indexOf("@") === -1){
        e.target.nextElementSibling.innerText = 'Enter at least 3 char'
        e.target.nextElementSibling.style.display = "block";    
        e.target.nextElementSibling.style.color = "red";    
     return;  
    }     
     e.target.nextElementSibling.style.display = "none";  
    
  }