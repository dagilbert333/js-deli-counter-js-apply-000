function takeANumber(katzDeliLine, name){
  
  katzDeliLine.push(name);
  
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine){
   var i = 0;
   while (i < katzDeli.length) {
    i++;
  }
  
   if (katzDeli.length === 0) {
    return "There is nobody waiting to be served!";
  } else 
  return (`Currently serving ${katzDeli.shift()}.`);
   
   katzDeliLine.shift();
}