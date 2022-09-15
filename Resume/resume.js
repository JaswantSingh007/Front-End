var navMenuAncherTag=document.querySelectorAll(".nav-menu a");

for(var i=0;i<navMenuAncherTag.length;i++){
    navMenuAncherTag[i].addEventListener("click",function(event){
        event.preventDefault();

        // Current Ancher tag to be clicked (target section id).
        var targetSectionID=this.textContent.trim().toLowerCase();
        // Factching the section by id.
        var targetSection=document.getElementById(targetSectionID);

        var interval=setInterval(function(){
            var targetSectionCoordinates=targetSection.getBoundingClientRect(); 
            if(targetSectionCoordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
        },20);
    });
}