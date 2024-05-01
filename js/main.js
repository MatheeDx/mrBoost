document.addEventListener('DOMContentLoaded', ()=>{
    //это красивый фон хедера
    let header = document.getElementById('header-bg');
    let target = document.getElementById('target');
    
    function elemTranslate(elem, x, xMod){
        elem.style.transform = "rotateZ(" + x*xMod + "deg) scale(1.1)";
    };

    header.addEventListener('mousemove', (event) => {
        
        let headerW = header.offsetWidth;
        let deltaX =  event.clientX / headerW;

        if(isFinite(deltaX)){
            //1 layer
            elemTranslate(target, deltaX, 5);
        }
    });

    document.getElementById('popup-buy').addEventListener("click", () => {
        alert("Buy $MrBoost!");
    })
});