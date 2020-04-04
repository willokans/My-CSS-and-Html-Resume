function passwd(){

  var password = prompt('Enter the password to download the file:');
  if(password.toLowerCase() == "resume"){
    window.open("img/Resume.pdf")    
  }else{
    alert("incorrect password!! please try again");
  }
}