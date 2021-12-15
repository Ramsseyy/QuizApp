function Submit()
{
   
    var q1=document.quiz.q1.value;
    var q2=document.quiz.q2.value;
    var q3=document.quiz.q3.value;
    var q41=document.quiz.q41.value;
    var q42=document.quiz.q42.value;
    var q43=document.quiz.q43.value;
    var q44=document.quiz.q44.value;
    var q5=document.quiz.q5.value;
    var q63=document.quiz.q63.value; 
    var q64=document.quiz.q64.value; 
    var q7=document.quiz.q7.value;
    var q81=document.quiz.q81.value;
    var q83=document.quiz.q83.value;
    var q91=document.quiz.q91.value;
    var q94=document.quiz.q94.value;
    var q95=document.quiz.q95.value;
    var q101=document.quiz.q101.value; 
    var q104=document.quiz.q104.value; 
    var q105=document.quiz.q105.value; 
    var q106=document.quiz.q106.value; 
    
  var score=0;
    if(q1=="A")
    {score++;
    }
     if(q2=="D"){score++;}
    
     if(q3=="B"){score++;}
   
     if(q41=="A"){
       score=0;
       }
     
    else if (q42=="B" && q44=="D")
     {score++;
    }
     else if(q43=="C"){score=0;}
     else
     {
       score=score+0;
     }

   /*else if(q5=="C"){score++;}
  
    else if(q63=="C" && q64=="D"){score++;}
   
   else if(q7=="A"){score++;}
  
    else if(q81=="A" && q83=="C"){score++;}
    
    else if(q91=="A" && q94=="D" && q95=="E"){score++;}
    
    else if(q101=="A" && q104=="D" && q105=="E" && q106=="F"){score++;}*/

    
    var percent= (score/10)*100;
  
 document.getElementById('result').innerHTML= "Your Score is : " + parseInt(percent)+"%";
}
