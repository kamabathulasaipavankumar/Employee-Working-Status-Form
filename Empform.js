let nameele=document.getElementById("Nameid")
let nameErrorMsg=document.getElementById("Errormsgid")
let Emailele=document.getElementById("Emailid")
let emailErrorMsg=document.getElementById("emailErrormsgid")
let password=document.getElementById("passwordid")
let EmpWorkingStatusEle=document.getElementById("statusid")
let DateTimeEle=document.getElementById("dateTimeid")


let submitBtnEle=document.getElementById("sumbitBtnid")
let ClearBtnEle=document.getElementById("clearBtnid")
let tableBody=document.getElementById("tableid")
let array=[];
let index;


let myformele=document.getElementById("formid")
myformele.addEventListener("submit",function(event){
    event.preventDefault();
})

submitBtnEle.onclick=()=>{
    if(submitBtnEle.textContent === "Submit"){
        submitBtnEle.textContent ="Update";
        console.log(index);

        let EmployeeDetails={
            nameele:nameele.value,
            Emailele:Emailele.value,
            password:password.value,
            EmpWorkingStatusEle:EmpWorkingStatusEle.value,
            DateTimeEle:DateTimeEle.value,
          
        }
        array[index] = EmployeeDetails;
                localStorage.setItem("user",JSON.stringify(array));
    }else{
        let EmployeeDetails={
            nameele:nameele.value,
            Emailele:Emailele.value,
            password:password.value,
            EmpWorkingStatusEle:EmpWorkingStatusEle.value,
            DateTimeEle:DateTimeEle.value,
         

    }

    array.push(EmployeeDetails)
    console.log(EmployeeDetails);

    localStorage.setItem("user",JSON.stringify(array))
}
clearForm()
createTable() 
}

function clearForm(){
    nameele.value=""
    Emailele.value=""
    password.value=""
    EmpWorkingStatusEle.value=""
    DateTimeEle.value=""
   
}


ClearBtnEle.onclick=()=>{
    localStorage.clear();
    createTable()
}


// showing Required message on not filling name and email

nameele.addEventListener("blur",function(event){
    
if(event.target.value === ""){
    nameErrorMsg.textContent="Required*"
}else{
    nameErrorMsg.textContent=""
}
})

Emailele.addEventListener("blur",function(event){
if(event.target.value === ""){
    emailErrorMsg.textContent="Required*"
}else{
    emailErrorMsg.textContent=""
}
})




//  show password function
function toggle(){
    let password=document.getElementById("passwordid");
    let iconPass=document.getElementById("passwordIcon");
 if( password.type === "password"){
       password.type = "text";
       iconPass.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
</svg>`; 
}else{  
     password.type = "password";
   
     iconPass.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                        <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                      </svg>`;
    }
}

// Create Table
 function createTable(){
    tableBody.innerHTML = "";
    let localData =JSON.parse(localStorage.getItem("user"));
    (localData)? array = localData: array=[];
    if(array !=null){
        for(let i=0;i < array.length; i++ ){
   
            const data = array[i];
            let rowele=document.createElement("tr")

            let SNoEle=document.createElement("td")
            SNoEle.textContent= i+1;
            rowele.appendChild(SNoEle)

            let Empnameele=document.createElement("td")
            Empnameele.textContent= data.nameele
            rowele.appendChild(Empnameele)

            let EmpEmailEle=document.createElement("td")
            EmpEmailEle.textContent= data.Emailele
            rowele.appendChild(EmpEmailEle)

            let EmpPass=document.createElement("td")
            EmpPass.textContent= data.password
            rowele.appendChild(EmpPass)

            let EmpWorkStatus=document.createElement("td")
            EmpWorkStatus.textContent= data.EmpWorkingStatusEle
            rowele.appendChild(EmpWorkStatus)

            let Date_Time=document.createElement("td")
            Date_Time.textContent= data.DateTimeEle
            rowele.appendChild(Date_Time)

           

            let action = document.createElement('td');
         let deleteBtn = document.createElement('button');
         deleteBtn.innerHTML = "Delete";
         deleteBtn.className="btn btn-outline-danger"
         deleteBtn.onclick=()=>{
            console.log("del",i);
            array.splice(i,1);
            localStorage.setItem("user",JSON.stringify(array));
            createTable();
         }
         action.appendChild(deleteBtn);
        rowele.appendChild(action);



        let EditBtn=document.createElement("button")
        EditBtn.textContent = "Edit";
        EditBtn.className="btn btn-outline-success"
        EditBtn.onclick = ()=>{
            submitBtnEle.textContent ="Submit";
        index = i;
        nameele.value=array[i].nameele;
        Emailele.value=array[i].Emailele;
        password.value=array[i].password;
        EmpWorkingStatusEle.value=array[i].EmpWorkingStatusEle;
        DateTimeEle.value=array[i].DateTimeEle;
        
    
        }
        action.appendChild(EditBtn);
        rowele.appendChild(action);



            tableBody.appendChild(rowele)
    }
 }
}
createTable()