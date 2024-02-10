let highZ = 1;

class Paper {

    paperholding = false;
    preMouseX = 0;
    preMouseY = 0;
    mouseX = 0;
    mouseY = 0;
    velocityX = 0;
    velocityY = 0;
    currentPaperX = 0;
    currentPaperY = 0;

    init(paper){
        paper.addEventListener('mousedown', (e) =>{

            this.paperholding = true;
            paper.style.zIndex = highZ;
            highZ+=1;
            
            if(e.button === 0){

                this.preMouseX=this.mouseX;
                this.preMouseY=this.mouseY;
            }
        });

        document.addEventListener('mousemove', (e) =>{
            
            this.mouseX=e.clientX;
            this.mouseY=e.clientY;

            this.velocityX = this.mouseX-this.preMouseX;
            this.velocityY = this.mouseY-this.preMouseY;

            if(this.paperholding){
                this.currentPaperX+=this.velocityX;
                this.currentPaperY+=this.velocityY;

                this.preMouseX=this.mouseX;
                this.preMouseY=this.mouseY;
 
                paper.style.transform=`translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px)`;
            }

        })
        
        window.addEventListener('mouseup', (e) =>{
            this.paperholding=false;
        })
    }
}

const papers = Array.from(document.querySelectorAll('.paper'));

papers.forEach(paper => {
    const p = new Paper();
    p.init(paper);
});