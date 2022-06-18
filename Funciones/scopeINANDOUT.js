function getTotalGoals(goals) {
    let sum = 0;
    for (let i = 0; i < goals.length; i++) {
      sum = sum + goals[i];
  }
  return sum;
  }
  
 // let goalsEachGame = [0, 1, 3, 0, 5, 4, 2, 0, 1];
  //let totalX = getTotalGoals(goalsEachGame);
  //console.log("The team scored " + totalX + " goals this season.");
  console.log("The team scored " + getTotalGoals([1,2,3]) + " goals this season.");


 
 
  function countdown(count){
    for(let i = count; i>0; i--){
      console.log(i);
    }
    console.log("Blast off!");
  }
  
  countdown(3);

  
  
  
  function increaseCount() {
    let count = 0;  
    count = count + 1
    return count
  }
console.log(increaseCount(4));  

let count = 4;  

function increaseCount2() {
  count = count + 1;
  return count;
}
console.log(increaseCount2());