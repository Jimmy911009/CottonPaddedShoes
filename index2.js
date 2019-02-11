window.onload=function(){ 
    const getItem = localStorage.getItem("temp");
    localStorage.setItem("temp",'1');
    console.log(getItem)
    var search = window.location.pathname;
    var Price = document.getElementById('Price');
    if(!!getItem){
        window.location = search + '?ran = ' + Math.random();
        localStorage.removeItem("temp");
        console.log('进入')
        Price.innerText = '1234'
    }

}