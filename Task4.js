 var cnv = document.getElementById('c');
            var ctx = cnv.getContext('2d');
            
            ctx.beginPath();
            ctx.fillStyle =  "#33D8FF";
            ctx.save();
            ctx.translate(300,300);
            
         
            
            var cnt=0;
            var sign = 1;
            
            var intrv = setInterval(function(){
                ctx.fillRect(20,20,50,100);
                ctx.rotate(sign*40*(Math.PI/180));
                
                cnt++;
                if(cnt==10 ){ 
                    ctx.restore();
                    ctx.save();
                    ctx.clearRect(0,0,600,600);
                    ctx.translate(300,300);
                    sign*=-1; cnt=0;}
            },500);
            