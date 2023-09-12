$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:25,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            400:{
                item:1
            },
            600:{
                items:1
            },
            
            1000:{
                items:5
            }
        }
    });


   
        $('.loading').fadeOut(1500);
        $('.loading-overlay').delay(1500).fadeOut(1500);

})

let product_list = document.querySelector(".product_list");

document.addEventListener("DOMContentLoaded",()=>{
    const note =document.getElementById('translate1');
    const button=document.querySelector('#check');
    if(button.checked){
        note.innerText="ကျွန်ုပ်တို့၏ ပရိဘောဂများကို သင့်အိမ်မက်အတွက် သင့်လျော်သော အရည်အသွေးအကောင်းဆုံးနှင့် ရွေးချယ်ထားသော ပစ္စည်းများဖြင့် ပြုလုပ်ထားပါသည်";  
    }
    button.addEventListener('click',function(){

        if(button.checked){
            note.innerText="ကျွန်ုပ်တို့၏ ပရိဘောဂများကို သင့်အိမ်မက်အတွက် သင့်လျော်သော အရည်အသွေးအကောင်းဆုံးနှင့် ရွေးချယ်ထားသော ပစ္စည်းများဖြင့် ပြုလုပ်ထားပါသည်";

        }else{
            note.innerText="Our furniture is made from selected and best quality materials that are suitable for your dream home.";

        }
      
    });
});
document.addEventListener("DOMContentLoaded",()=>{
    const note =document.getElementById('translate2');
    const button=document.querySelector('#check');
    if(button.checked){
        note.innerText="ကျွန်ုပ်တို့သည် လူနေအိမ်၊ လုပ်ငန်းသုံး၊ ကော်ပိုရိတ်ရုံးခန်းများ၊ လက်လီ၊ အဖွဲ့အစည်းဆိုင်ရာအခန်းတစ်ခန်းအတွက်ပရိဘောဂအပြင်အဆင်မှအစအတွင်းပိုင်း ဒီဇိုင်းတစ်ခုလုံးနှင့်အိမ်ပုံစံဖြေရှင်းနည်းများ၏အတွင်းပိုင်းဒီဇိုင်းများကိုပေးဆောင်ပါသည် ";  
    }
    button.addEventListener('click',function(){

        if(button.checked){
            note.innerText="ကျွန်ုပ်တို့သည် လူနေအိမ်၊ လုပ်ငန်းသုံး၊ ကော်ပိုရိတ်ရုံးခန်းများ၊ လက်လီ၊ အဖွဲ့အစည်းဆိုင်ရာအခန်းတစ်ခန်းအတွက်ပရိဘောဂအပြင်အဆင်မှအစအတွင်းပိုင်း ဒီဇိုင်းတစ်ခုလုံးနှင့်အိမ်ပုံစံဖြေရှင်းနည်းများ၏အတွင်းပိုင်းဒီဇိုင်းများကိုပေးဆောင်ပါသည် ";

        }else{
            note.innerText="  We offers interior designs of residential, commerical, corporate offices, retail, institutional and home styling solutions ranging from furniture layout for one room to entire interior designs.";

        }
      
    });
});



let navRegister = document.querySelector(".nav_register");
let loginUser = document.querySelector('.loginUser');
let loginContent = document.querySelector(".loginUser .content .loginName");
let toggleLogout = document.querySelector('.loginUser .content .selectbox');
let hideshowdiv = document.querySelector('.loginUser .content .hideshowdiv');
let btnlogout = document.querySelector('.loginUser .content .hideshowdiv .btn-logout');


let getUser = JSON.parse(localStorage.getItem("loginUser"));

if(getUser){
    navRegister.style.display = 'none';
    loginUser.style.display = "flex";
    let name = getUser.name;
    loginContent.innerText = name;
}

let toggleBtn = false;
toggleLogout.addEventListener('click',(e)=>{
    toggleBtn = !toggleBtn;

    if(toggleBtn){
        hideshowdiv.style.display = "flex";
    }else{
        hideshowdiv.style.display = 'none';
    }
})


btnlogout.addEventListener('click',(e)=>{
    navRegister.style.display = 'block';
    loginUser.style.display = "none";

    loginContent.innerText = "";
})

const btnTag = document.querySelector(".hamburgerContainer");
const line1Tag = document.querySelector(".line1");
const line2Tag = document.querySelector(".line2");
const line3Tag = document.querySelector(".line3");
const Item = document.querySelector(".showItems");
btnTag.addEventListener("click",()=>{
    if(btnTag.classList.contains("RE")){
        line2Tag.classList.remove("line2CH");
        line1Tag.classList.remove("line1CH");
        line3Tag.classList.remove("line3CH");
        Item.classList.remove("ItemCH");
        btnTag.classList.remove("RE");

    }else{
    line2Tag.classList.add("line2CH");
    line1Tag.classList.add("line1CH");
    line3Tag.classList.add("line3CH");
    Item.classList.add("ItemCH");
    btnTag.classList.add("RE");
    }
});
