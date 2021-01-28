 var cnv = document.getElementById('c');
            var ctx = cnv.getContext('2d');
            
            var meme = new Image();
            meme.src = "./assets/Shiraz.jpg";
            
            meme.onload = function(){
                ctx.drawImage(meme, 0,0, 500,300);
                ctx.fillStyle = "white";
                ctx.font = "bold 30px sans-serif";
                ctx.shadowColor = "white";
                ctx.shadowOffsetX = 1;
                ctx.shadowOffsetY = 1;
            
                ctx.fillText("ITI Be Like:", 170,50);
                ctx.strokeText("ITI Be Like:", 170,50);
                
            }
            