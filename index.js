function scuberGreetingForFeet(feet){
  // Write your code here!
  // let feet;
  if (feet <= 400) {
    return 'This one is on me!'

  } else if (feet > 2000 && feet < 2500){
    return 'I will gladly take your thirty bucks.'

  }  else {
    return 'No can do.'
  }

}

function ternaryCheckCity(city){
  // Write your code here!
  if (city === 'NYC') {
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  //let generousity;
  //let a;
  //let b;

  switch (tip) {
    case 'generous':
      return "Thank you so much.";
        break;
    case 'not as generous':
      return "Thank you.";
        break;
    default:
      return  "Bye.";
  }

}

