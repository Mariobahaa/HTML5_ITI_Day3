   var cnv = document.getElementById('c');
            var ctx = cnv.getContext('2d');
            
            var lg1 = ctx.createLinearGradient(100,100,100,300);
            lg1.addColorStop(0,"blue");
            lg1.addColorStop(1,"white");
            var lg2 = ctx.createLinearGradient(100,300,100,500);
            lg2.addColorStop(0,"green");
            lg2.addColorStop(1,"white");
            //lg.addColorStop(1,"green");
            
            ctx.fillStyle = lg1;
            ctx.fillRect(100,100,400,200);
            ctx.fillStyle = lg2;
            ctx.fillRect(100,300,400,200);
            ctx.beginPath();
            ctx.moveTo(150,350);
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 10;
            ctx.lineJoin = 'round';
            ctx.lineTo(150,180);
            ctx.stroke();
            ctx.lineTo(450,180);
            ctx.stroke();
            ctx.lineTo(450,350);
            ctx.stroke();