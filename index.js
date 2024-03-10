function RollDice(){
    var x = Math.floor(Math.random()*6+1);
    var img1;
    switch(x){
        case 1:
            img1= document.getElementById("tiya") .src="/images/image(1).png";
            getElementById("tiya") .src=img1;
            break;
         case 2:
            img1= document.getElementById("tiya") .src="/images/images(2).png";
            getElementById("tiya") .src=img1;
            break;   
        case 3:
            img1= document.getElementById("tiya") .src="/images/images (3).png";
            getElementById("tiya") .src=img1;
            break;
        case 4:
            img1= document.getElementById("tiya") .src="/images/image(4).png";
            getElementById("tiya") .src=img1;
            break; 
        case 5:
            img1= document.getElementById("tiya") .src="/images/image(5).png";
            getElementById("tiya") .src=img1;
            break;
       case 6: 
             img1= document.getElementById("tiya") .src="/images/6.png";
             getElementById("tiya") .src=img1;
            break;         
    }
}