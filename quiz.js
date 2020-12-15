function check() {
  var sos=1;
  var mda=1;
  var salam=1;
  var wish=1;
  var latet= 1;
  var seeds=1;
  
  var q1=document.quiz.question1.value;
  var q2=document.quiz.question2.value;
  var q3=document.quiz.question3.value;
  var q4=document.quiz.question4.value;
  var q5=document.quiz.question5.value;
  var q6=document.quiz.question6.value;
  var q7=document.quiz.question7.value;
  var q8=document.quiz.question8.value;
  var q9=document.quiz.question9.value;
  var q10=document.quiz.question10.value;
  var q11=document.quiz.question11.value;
  

 
  if (q1=="Yes") {sos++;}
  if (q1=="No") {sos--;}
  if (q2=="Yes") {mda++;}
  if (q2=="No") {mda--;}
  if (q3=="Yes") {wish++; seeds++;}
  if (q3=="No") {wish--;seeds--;}
  if (q4=="Yes") {latet++;}
  if (q4=="No") {latet--;}
  if (q5=="Yes") {mda++; salam++;}
  if (q5=="No") {for (var i=0; i<2; i++){
      wish--;}salam--;}
  if (q6=="No") {for (i=0; i<10; i++){
      mda--;
      latet--;}}
  if (q7=="No") {salam--;for ( i=0; i<10; i++){
      seeds--;}}
  if (q7=="Yes") {salam++; seeds++;}
  if (q8=="Yes") {mda++;}
  if (q8=="No") {for (i=0; i<10; i++){
      mda--;}}
  if (q9=="Alone") {sos++; latet--; salam--;for ( i=0; i<3; i++){seeds--; wish--;mda--;}}
  if (q9=="Others") {mda++;wish++;salam++;seeds++}
  if (q10=="Yes") {mda++;for (i=0; i<2; i++){
      latet--; salam--}}
  if (q11=="Yes") {for ( i=0; i<3; i++){
      seeds++;}}
  if (q11=="No") {for (i=0; i<10; i++){
      seeds--;}}
  
  var bvalue= -1000;
  var bplace= "yo";
  
  if (sos>bvalue){
    bvalue=sos;
    bplace="sos";
  }
  if (mda>bvalue){
    bvalue=mda;
    bplace="mda";
  }
  if (wish>bvalue){
    bvalue=wish;
    bplace="wish";
  }
  if (latet>bvalue){
    bvalue=latet;
    bplace="latet";
  }
  if (salam>bvalue){
    bvalue=salam;
    bplace="salam";
  }
  if (seeds>bvalue){
    bvalue=seeds;
    bplace="seeds";
  }
  
 
  if (bplace=="sos"){
    document.write(".");
    window.location.href = "sos.html";
  }
  if (bplace=="mda"){
    document.write(".");
    window.location.href = "mda.html";
  }
  if (bplace=="wish"){
    document.write(".");
    window.location.href = "wish.html";
  }
  if (bplace=="salam"){
    document.write(".");
    window.location.href = "salametkom.html";
  }
  if (bplace=="latet"){
    document.write(".");
    window.location.href = "latet.html";
  }
  if (bplace=="seeds"){
    document.write(".");
    window.location.href = "seeds.html";
  }
  

}



