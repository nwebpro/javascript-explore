var bookPrice = [120, 200, 300, 420, 150, 180, 79];
 for(var i = 0; i < bookPrice.length; i++){
    var priceList = bookPrice[i];
    if(priceList > 200){
        continue;
    }
    console.log(priceList)
 }