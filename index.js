
    let Time = new Date();
    let h =Time.getHours();
    var m =Time.getMinutes();
    let x = document.getElementById('sun');
    let y =document.getElementById('time');
    let n =document.getElementById('bell');
    let z =document.getElementById('rest');
    let l1 =document.getElementById('lesson1');
    let l2 =document.getElementById('lesson2');
    let l3 =document.getElementById('lesson3');
   let lunch =document.getElementById('lunch');
   let l4 = document.getElementById('lesson4');
    let les = document.getElementById('h2');
    let room =document.getElementById('room');

    console.log(h);
    console.log(m);


function CheckTime(){
    if(h<8){
        y.style.opacity=0;
        n.style.opacity=0;
        z.style.opacity=0;
        x.style.opacity=1;
    }
   
    else if(h<9){
                    y.style.opacity=1;
                     x.style.opacity=0;
                     n.style.opacity=0;
                     z.style.opacity=0;
                     l1.style.opacity=0.2;
                    les.innerHTML ="Art History";
                    room.innerHTML ="8:00-9:31 • Mr. Nessi • Room 25A";

    }
    else if(h<10){
        if(m<31){
            y.style.opacity=1;
            x.style.opacity=0;
            n.style.opacity=0;
            z.style.opacity=0;
            l1.style.opacity=0.2;
           les.innerHTML ="Art History";
           room.innerHTML ="8:00-9:31 • Mr. Nessi • Room 25A";
        }
        else if(m<36){
            n.style.opacity=1;
            x.style.opacity=0;
            y.style.opacity=0;
            z.style.opacity=0;
            l1.style.opacity=0.2;
        } 
        else{
            y.style.opacity=1;
             x.style.opacity=0;
            n.style.opacity=0;
            z.style.opacity=0;
             l1.style.opacity=0.2;
             l2.style.opacity=0.2;
            les.innerHTML ="AP Computer Science";
            room.innerHTML ="9:36-10:43 • Mr. Nessi • Room 25A";
        }
    }
    else if(h<11){
        if(m<43){
            y.style.opacity=1;
            x.style.opacity=0;
           n.style.opacity=0;
           z.style.opacity=0;
            l1.style.opacity=0.2;
            l2.style.opacity=0.2;
           les.innerHTML ="AP Computer Science";
           room.innerHTML ="9:36-10:43 • Mr. Nessi • Room 25A";
        }
        else if(m<48){
                 n.style.opacity=1;
                 x.style.opacity=0;
                 y.style.opacity=0;
                z.style.opacity=0;
        }
        else{
                y.style.opacity=1;
                 x.style.opacity=0;
                n.style.opacity=0;
                z.style.opacity=0;
                 l1.style.opacity=0.2;
                l2.style.opacity=0.2;
                 l3.style.opacity=0.2;
                les.innerHTML ="Philosophy";
                 room.innerHTML ="10:48-11:30 • Mr. Nessi • Room 25A";
        }
    }
    else if(h<12){
        if(m<30){
            y.style.opacity=1;
            x.style.opacity=0;
           n.style.opacity=0;
           z.style.opacity=0;
            l1.style.opacity=0.2;
           l2.style.opacity=0.2;
            l3.style.opacity=0.2;
           les.innerHTML ="Philosophy";
            room.innerHTML ="10:48-11:30 • Mr. Nessi • Room 25A";
        }
        else if(m<35){
            n.style.opacity=1;
             x.style.opacity=0;
             y.style.opacity=0;
             z.style.opacity=0;
        }
        else{
            y.style.opacity=1;
                x.style.opacity=0;
                 n.style.opacity=0;
                z.style.opacity=0;
                l1.style.opacity=0.2;
               l2.style.opacity=0.2;
                 l3.style.opacity=0.2;
                lunch.style.opacity=0.2;
                les.innerHTML ="Lunch";
                 room.innerHTML="11:35-12:30";
        }
        
    }
    else if(h<13){
        if(m<30){
            y.style.opacity=1;
            x.style.opacity=0;
             n.style.opacity=0;
            z.style.opacity=0;
            l1.style.opacity=0.2;
           l2.style.opacity=0.2;
             l3.style.opacity=0.2;
            lunch.style.opacity=0.2;
            les.innerHTML ="Lunch";
             room.innerHTML="11:35-12:30"; 
        }
        else if(m<35){
            n.style.opacity=1;
            x.style.opacity=0;
            y.style.opacity=0;
            z.style.opacity=0;
        }
        else {
            y.style.opacity=1;
        x.style.opacity=0;
         n.style.opacity=0;
         z.style.opacity=0;
        l1.style.opacity=0.2;
        l2.style.opacity=0.2;
         l3.style.opacity=0.2;
         lunch.style.opacity=0.2;
         l4.style.opacity=0.2;
         les.innerHTML ="AP US History";
        room.innerHTML= "12:35-1:45 • Mr. Nessi • Room 25A";
        }
    }
else if(h<14){
    if(m<45){
        y.style.opacity=1;
        x.style.opacity=0;
         n.style.opacity=0;
         z.style.opacity=0;
        l1.style.opacity=0.2;
        l2.style.opacity=0.2;
         l3.style.opacity=0.2;
         lunch.style.opacity=0.2;
         l4.style.opacity=0.2;
         les.innerHTML ="AP US History";
        room.innerHTML= "12:35-1:45 • Mr. Nessi • Room 25A";
    }
    
    else{
        z.style.opacity=1;
             x.style.opacity=0;
            y.style.opacity=0;
             n.style.opacity=0;
    }
}
else{
    z.style.opacity=1;
             x.style.opacity=0;
            y.style.opacity=0;
             n.style.opacity=0;
}
    
    
    
    // else if(h<14){
        
    //         // if(h<10 && m<31){
    //         //     y.style.opacity=1;
    //         //     x.style.opacity=0;
    //         //     n.style.opacity=0;
    //         //     z.style.opacity=0;
    //         //     l1.style.opacity=0.2;
    //         //     les.innerHTML ="Art History";
    //         //     room.innerHTML ="8:00-9:31 • Mr. Nessi • Room 25A";
    //         //     console.log(2)

    //         // }
    //         // else if(h>9 && h<10 && m >=31 && m<36){
    //         //     n.style.opacity=1;
    //         //     x.style.opacity=0;
    //         //     y.style.opacity=0;
    //         //     z.style.opacity=0;

    //         // }
    //         // else if(h<11 && m<43){
    //         //     console.log(22)
    //         //     y.style.opacity=1;
    //         //     x.style.opacity=0;
    //         //     n.style.opacity=0;
    //         //     z.style.opacity=0;
    //         //     l1.style.opacity=0.2;
    //         //     l2.style.opacity=0.2;
    //         //     les.innerHTML ="AP Computer Science";
    //         //     room.innerHTML ="9:36-10:43 • Mr. Nessi • Room 25A";
    //         // }
    //         // else if(h<11 && m>=43 && m<48){
    //         //     n.style.opacity=1;
    //         //     x.style.opacity=0;
    //         //     y.style.opacity=0;
    //         //     z.style.opacity=0;
    //         // }
    //         // else if(h<12 && m<30){
    //         //     y.style.opacity=1;
    //         //     x.style.opacity=0;
    //         //     n.style.opacity=0;
    //         //     z.style.opacity=0;
    //         //     l1.style.opacity=0.2;
    //         //     l2.style.opacity=0.2;
    //         //     l3.style.opacity=0.2;
    //         //     les.innerHTML ="Philosophy";
    //         //     room.innerHTML ="10:48-11:30 • Mr. Nessi • Room 25A";
    //         // }
    //         // else if(h<12 && m>=30 && m<35){
    //         //     n.style.opacity=1;
    //         //     x.style.opacity=0;
    //         //     y.style.opacity=0;
    //         //     z.style.opacity=0;
    //         // }
    //         // else if(h<13 && m<30){
    //         //     y.style.opacity=1;
    //         //     x.style.opacity=0;
    //         //     n.style.opacity=0;
    //         //     z.style.opacity=0;
    //         //     l1.style.opacity=0.2;
    //         //     l2.style.opacity=0.2;
    //         //     l3.style.opacity=0.2;
    //         //     lunch.style.opacity=0.2;
    //         //     les.innerHTML ="Lunch";
    //         //     room.innerHTML="11:35-12:30";
    //         // }
    //         // else if(h<13 &&m>=30 &&m<35){
    //         //     n.style.opacity=1;
    //         //     x.style.opacity=0;
    //         //     y.style.opacity=0;
    //         //     z.style.opacity=0;
    //         // }
    //         // else if(h<13 && m>35){
    //         //     y.style.opacity=1;
    //         //     x.style.opacity=0;
    //         //     n.style.opacity=0;
    //         //     z.style.opacity=0;
    //         //     l1.style.opacity=0.2;
    //         //     l2.style.opacity=0.2;
    //         //     l3.style.opacity=0.2;
    //         //     lunch.style.opacity=0.2;
    //         //     l4.style.opacity=0.2;
    //         //     les.innerHTML ="AP US History";
    //         //     room.innerHTML= "12:35-1:45 • Mr. Nessi • Room 25A";
    //         // }
    //         // else if(h<14 && m<45){
    //         //     y.style.opacity=1;
    //         //     x.style.opacity=0;
    //         //     n.style.opacity=0;
    //         //     z.style.opacity=0;
    //         // }
    //         // else if(h<14 && m>=45){
    //         //     x.style.opacity=0;
    //         // y.style.opacity=0;
    //         // n.style.opacity=0;
    //         // z.style.opacity=1;
    //         // }
        
    // }
    // else {
    //     z.style.opacity=1;
    //     x.style.opacity=0;
    //     y.style.opacity=0;
    //     n.style.opacity=0;
    
}

var clock = setInterval(CheckTime,500);

  