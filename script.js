/* .js files add interaction to your website */


//content warning//
 function showOverlay() {
  document.getElementById("overlay").style.display= "block";
 }

window.addEventListener("load", showOverlay);

var proceed = document.getElementById("proceed");
proceed.addEventListener("click", closeOverlay);

function closeOverlay() {
   document.getElementById("overlay").style.display="none";
}

//Myth and Fact Generator//

var mythandfactList = [
  "Myth #1:Mental health problems do not affect me.     Fact #1: Actually mental health problems are very common, one in five American adults experienced a mental health issue and one in six young people experienced a major depressive episode, while one in twenty Americans lived with a serious mental illness, such as schizophrenia, bipolar disorder, or major depression.", /*0*/
  
  "Myth #2:Children do not experience mental health problems.                                                   Fact #2: Half of all mental health disorders show their first signs before a person even turns 14 years old. Three-quarters of mental health disorders begin before the person turns 24 years old.", /*1*/

    "Myth #3: If a person has a mental health condition it is a sign that they are weak. If they were stronger than they wouldn't have this condition.                      Fact #3: Having a mental health disorder does not make a person weak. There are several factors that can contribute to meantal health problems that are out of the person's control such as biological factors and life experiences.", /*2*/
    
  "Myth #4: I can't do anything for a person with a mental health problem.                                        Fact #4: There are multiple things you can do for a person with mental health problems. One thing you could do is be there for them and let them know that you are available to help. Another thing you could also provide them access to mental health services."];


var mythandfact = document.getElementById("mythandfact");
var mythandfactButton = document.getElementById("mythandfactButton");
var count = 0;

mythandfactButton.addEventListener("click", displayMythAndFact);

function displayMythAndFact() {
  mythandfact.innerHTML = mythandfactList[count];
  count++;
  if (count == mythandfactList.length){
    count = 0;
  }
  }


