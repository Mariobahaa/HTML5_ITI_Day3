var cnv = document.getElementById('c');
            var ctx = cnv.getContext('2d');
            
           
            
            var rg2 = ctx.createRadialGradient(750, 300,10,600, 300, 600);
            rg2.addColorStop(0,"white");
            rg2.addColorStop(1,"blue");
            
            ctx.fillStyle= rg2;
            
            //arc(x, y, radius, startAngle, endAngle, antiClockwise );
            ctx.arc(300,300,250,0,2*Math.PI);
            ctx.fill();
            
            ctx.beginPath();
            var rg1 = ctx.createRadialGradient(430, 420, 10,300, 300, 200);
            rg1.addColorStop(0,"white");
            rg1.addColorStop(1,"blue");
            
            ctx.fillStyle= rg1;
            
            //arc(x, y, radius, startAngle, endAngle, antiClockwise );
            ctx.arc(300,300,200,0,2*Math.PI);
            ctx.fill();
            
            
            ctx.beginPath();
            ctx.moveTo(200,400);
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 30;
            ctx.lineJoin = 'blevel';
            
            ctx.lineTo(200,220);
            ctx.stroke();
            ctx.lineTo(300,300);
            ctx.stroke();
            ctx.lineTo(400,220);
            ctx.stroke();
            ctx.lineTo(400,400);
            ctx.stroke();