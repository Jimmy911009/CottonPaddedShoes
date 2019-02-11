window.onload=function(){ 
    const getItem = localStorage.getItem("temp");
    localStorage.setItem("temp",'1');
    if(!!getItem){
        window.location = window.location.pathname + '?ran = ' + Math.random();
        localStorage.removeItem("temp");
        return false;
    }
    document.getElementById('commodity').style.display = 'block';
}