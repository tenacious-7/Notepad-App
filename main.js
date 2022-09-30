document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("menu-button").addEventListener("click",showMenu)
    document.getElementById("close-menu").addEventListener("click",closeMenu)

    function showMenu(){
       const menu= document.querySelector("section.menu");
       menu.style.height= "100%";
    }

    function closeMenu(){
        const menu= document.querySelector("section.menu");
        menu.style.height= "0";
    }

    function addclickToMenuItem(){
        const menuItems = document.querySelectorAll("section.menu nav ul>li")
        for(let menuItem of menuItems){
            menuItem.addEventListener("click",closeMenu);
        }
    }
    addclickToMenuItem();


})
function saveFile(){
    var text=document.getElementById('content').value;
    var data=[];
    data.push(text)
    var data_string= JSON.stringify(data);
    var file =new Blob([data_string],{type:"text"});
    var anchor=document.createElement("a");
    anchor.href=URL.createObjectURL(file);
    anchor.download="save.txt";
    anchor.click();

};
function changeSize(n){
    var s=document.getElementById('content');
    s.style.fontSize=n.value+'px';
  
    }
function Bold(){
    var bol=document.getElementById('content').style.fontWeight;
    if(bol!=='bold'){
        document.getElementById('content').style.fontWeight='bold';
    }
    else{
        document.getElementById('content').style.fontWeight='normal';

    }
    }
function underline(){
    var bol=document.getElementById('content').style.textDecoration;
    if(bol !=='underline'){
        document.getElementById('content').style.textDecoration='underline'
    }
    else{
        document.getElementById('content').style.textDecoration='none';

    }

}
function reset(){
    document.getElementById('content').value='';
 }
function getText(){
 var text=document.getElementById('content');
   navigator.clipboard.writeText(text.value);
    alert("Text is copied to clipboard:");
   }

