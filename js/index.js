document.getElementById('submit').addEventListener('click', function(){

    const userName = document.getElementById('userName').value;

    const userPassword = document.getElementById('userpassword').value;
    
    const userFName = document.getElementById('userFName').value;
    
    const userMName = document.getElementById('userMName').value;
    

    const localStorageSent = {Name: userName, Password: userPassword, FatherName: userFName, MotherName: userMName};
    

    localStorage.setItem('User',JSON.stringify(localStorageSent))

})


const getData = localStorage.getItem('User')
const convert = JSON.parse(getData)
console.log(convert)



document.getElementById('name').innerText = convert.Name;
document.getElementById('fname').innerText = convert.FatherName;
document.getElementById('mname').innerText = convert.MotherName;

    
