const bootcampform=document.getElementById("signin-form")

const paswrd=document.getElementById("paswrd")
const cnformpaswrd=document.getElementById("cnformpswrd")
bootcampform.addEventListener("submit", (e) =>{
    validateform()
} );


const validateform = () => {
    let codewrd=paswrd.value
    let recode=cnformpaswrd.value

    if(codewrd.length<8){
        alert("Hey! paswrd must be 8 characters")

    }
    if(codewrd!==recode){
        alert("Hey! paswrd should be match")
    }
        if(codewrd===recode){
            alert("Signed up")
    
        }
    }

