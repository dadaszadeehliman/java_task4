const  widtholcu=document.querySelector(".width")
const heightolcu=document.querySelector(".height")
const  radius=document.querySelector(".radius")
const reng=document.querySelector(".reng")
const qutu=document.querySelector(".qutu")
const qur=document.querySelector(".btn1")



qur.addEventListener("click", function(){
    qutu.style.border="1px solid black"
    qutu.style.margin="0 auto"
    qutu.style.width=widtholcu.value
    qutu.style.height=heightolcu.value
    qutu.style.borderRadius=radius.value
    qutu.style.backgroundColor=reng.value
})



