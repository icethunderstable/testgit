
    
    
    
    //  หัวข่้อหลัก firebase
    const preObject = document.getElementById('object');
    
    // subย่อย (ประกาศแยกกันแต่ละอัน)
    const ulList1 =document.getElementById('list1');
    const ulList11 =document.getElementById('list11');


    const ulList2 =document.getElementById('list2');
    const ulList22 =document.getElementById('list22');
    
    const ulList3 =document.getElementById('list3');
    const ulList33 =document.getElementById('list33');

    const ulList4 =document.getElementById('list4');
    const ulList44 =document.getElementById('list44');

    const ulList5 =document.getElementById('list5');
    const ulList55 =document.getElementById('list55');

    // ตัวลิงค์การทำงานด้านบน
    const dbRefObject = firebase.database().ref().child("object");
    const dbRefList1 =  dbRefObject.child('State1');
    const dbRefList11 =  dbRefObject.child('State1');

    const dbRefList2 =  dbRefObject.child('State2');
    const dbRefList22 =  dbRefObject.child('State2');

    const dbRefList3 =  dbRefObject.child('State3');
    const dbRefList33 =  dbRefObject.child('State3');

    const dbRefList4 =  dbRefObject.child('State4');
    const dbRefList44 =  dbRefObject.child('State4');

    const dbRefList5 =  dbRefObject.child('State5');
    const dbRefList55 =  dbRefObject.child('State5');
    // นำข้อมูลอกกมาแสดง
    dbRefObject.on('value',snap => console.log(snap.val()));

    //แสดงในส่วนปีกกา ใช้จริงนำออก
    dbRefObject.on('value',snap =>
    {preObject.innerText =JSON.stringify(snap.val(),null,3);


        //ใช้จริง
    });


        dbRefList1.on('child_added',snap =>{
           // preObject.innerText =JSON.stringify(snap.val(),null,3);
               const li1 = document.createElement('li1');
               li1.innerText = snap.val();

               if(li1.innerText==1){
                ulList1.appendChild(li1);
                
                //const testshow=document.getElementById('list');
                const textH='<img src="img/AR.png" width="150" height="137" align="center">'
                
               // const textH=' <canvas id="myCanvas" width="10" height="10"style="border:10px solid red;">Your browser does not support the canvas element.</canvas><script>var c=document.getElementById("myCanvas");var ctx=c.getContext("2d");ctx.fillStyle="red";ctx.fillRect(0,0,150,75);</script>'
                //const textH= '<b><FONT COLOR="Red">ทดสอบการใช้งานเปลี่ยนสี</FONT><b>';
                ulList1.innerHTML = textH; 
               }    
        } );
        dbRefList11.on('child_added',snap =>{

            const li11 = document.createElement('li11');
            li11.innerText = snap.val();

            if(li11.innerText==1){
             ulList11.appendChild(li11);
             const textB='<img src="img/AR.png" width="100" height="90" align="center">'
             ulList11.innerHTML = textB; 
         }  
        } );





        dbRefList2.on('child_added',snap =>{
           // preObject.innerText =JSON.stringify(snap.val(),null,3);
            const li2 = document.createElement('li2');
            li2.innerText = snap.val();

            if(li2.innerText==1){
             ulList2.appendChild(li2);
             const textH='<img src="img/BR.png" width="150" height="137" align="center">'
             //const textH=' <canvas id="myCanvas" width="10" height="10"style="border:10px solid red;">Your browser does not support the canvas element.</canvas><script>var c=document.getElementById("myCanvas");var ctx=c.getContext("2d");ctx.fillStyle="red";ctx.fillRect(0,0,150,75);</script>'
             //const textH= '<b><FONT COLOR="Red">ทดสอบการใช้งานเปลี่ยนสี</FONT><b>';
             ulList2.innerHTML = textH; 
            
            }
  
        } );
        dbRefList22.on('child_added',snap =>{

            const li22 = document.createElement('li22');
            li22.innerText = snap.val();

            if(li22.innerText==1){
            ulList22.appendChild(li22);
            const textB='<img src="img/BR.png" width="100" height="90" align="center">'
            ulList22.innerHTML = textB; 
        }  
        } );



        dbRefList3.on('child_added',snap =>{
            // preObject.innerText =JSON.stringify(snap.val(),null,3);
             const li3 = document.createElement('li3');
             li3.innerText = snap.val();
 
             if(li3.innerText==1){
              ulList3.appendChild(li3);
              const textH='<img src="img/CR.png" width="150" height="137" align="center">'
              //const textH=' <canvas id="myCanvas" width="10" height="10"style="border:10px solid red;">Your browser does not support the canvas element.</canvas><script>var c=document.getElementById("myCanvas");var ctx=c.getContext("2d");ctx.fillStyle="red";ctx.fillRect(0,0,150,75);</script>'
              //const textH= '<b><FONT COLOR="Red">ทดสอบการใช้งานเปลี่ยนสี</FONT><b>';
              ulList4.innerHTML = textH; 
             
             }
   
         } );
         dbRefList33.on('child_added',snap =>{
 
             const li33 = document.createElement('li33');
             li33.innerText = snap.val();
 
             if(li33.innerText==1){
             ulList33.appendChild(li33);
             const textB='<img src="img/CR.png" width="100" height="90" align="center">'
             ulList33.innerHTML = textB; 
         }  
         } );


         dbRefList4.on('child_added',snap =>{
            // preObject.innerText =JSON.stringify(snap.val(),null,3);
             const li4 = document.createElement('li4');
             li4.innerText = snap.val();
 
             if(li4.innerText==1){
              ulList4.appendChild(li4);
              const textH='<img src="img/DR.png" width="150" height="137" align="center">'
              //const textH=' <canvas id="myCanvas" width="10" height="10"style="border:10px solid red;">Your browser does not support the canvas element.</canvas><script>var c=document.getElementById("myCanvas");var ctx=c.getContext("2d");ctx.fillStyle="red";ctx.fillRect(0,0,150,75);</script>'
              //const textH= '<b><FONT COLOR="Red">ทดสอบการใช้งานเปลี่ยนสี</FONT><b>';
              ulList4.innerHTML = textH; 
             
             }
   
         } );
         dbRefList44.on('child_added',snap =>{
 
             const li44 = document.createElement('li44');
             li44.innerText = snap.val();
 
             if(li44.innerText==1){
             ulList44.appendChild(li44);
             const textB='<img src="img/DR.png" width="100" height="90" align="center">'
             ulList44.innerHTML = textB; 
         }  
         } );



         dbRefList5.on('child_added',snap =>{
            // preObject.innerText =JSON.stringify(snap.val(),null,3);
             const li5 = document.createElement('li5');
             li5.innerText = snap.val();
 
             if(li5.innerText==1){
              ulList5.appendChild(li5);
              const textH='<img src="img/ER.png" width="150" height="137" align="center">'
              //const textH=' <canvas id="myCanvas" width="10" height="10"style="border:10px solid red;">Your browser does not support the canvas element.</canvas><script>var c=document.getElementById("myCanvas");var ctx=c.getContext("2d");ctx.fillStyle="red";ctx.fillRect(0,0,150,75);</script>'
              //const textH= '<b><FONT COLOR="Red">ทดสอบการใช้งานเปลี่ยนสี</FONT><b>';
              ulList5.innerHTML = textH; 
             
             }
   
         } );
         dbRefList55.on('child_added',snap =>{
 
             const li55 = document.createElement('li55');
             li55.innerText = snap.val();
 
             if(li55.innerText==1){
             ulList55.appendChild(li55);
             const textB='<img src="img/ER.png" width="100" height="90" align="center">'
             ulList55.innerHTML = textB; 
         }  
         } );

