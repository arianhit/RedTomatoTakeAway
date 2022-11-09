var imageAr = ['images/shop/1.jpg', 'images/shop/4.jpg', 'images/shop/5.jpg', 
'images/shop/10.jpg', 'images/shop/9.jpg', 'images/shop/11.jpg'];
var imgCounter = 0;
setInterval(chgImage, 4000);
function chgImage(){
    
        document.getElementById('myImages').setAttribute('src', imageAr[imgCounter]);
        imgCounter++;
        if(imgCounter==imageAr.length-1){
            imgCounter = 0;
        }
        console.info("called");
}
chgImage();


