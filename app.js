// const bClick = document.querySelector('.box');
for(let i=1; i<=9; i++){
    let bClick = document.querySelector('#a'+i);
    bClick.addEventListener('click', function(event){
        console.log("test1");
    })
}