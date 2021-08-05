let openClose=false;
let navMobileDiv=document.getElementById('navMobileDiv');
let ButtonMobile=document.getElementById('ButtonMobile');
ButtonMobile.addEventListener('click',()=>{
    if(!openClose){
        navMobileDiv.style.display='block';
        openClose=true;
    }else{
        navMobileDiv.style.display='none';
        openClose=false;
    }
})