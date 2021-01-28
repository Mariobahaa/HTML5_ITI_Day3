var cnv = document.getElementById('c');
            var ctx = cnv.getContext('2d');
            
            var meme = new Image();
            meme.src = "./assets/1.jpg";
            
            meme.onload = function(){
                ctx.drawImage(meme, 0,0, 500,300);
                ctx.fillStyle = "white";
                ctx.font = "bold 30px sans-serif";
                ctx.shadowColor = "white";
                ctx.shadowOffsetX = 1;
                ctx.shadowOffsetY = 1;
            
                ctx.fillText("It's gonna be ok sweatheart", 20, 285);
                ctx.strokeText("It's gonna be ok sweatheart", 20, 285);
                
            }