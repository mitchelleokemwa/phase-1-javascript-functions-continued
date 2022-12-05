// code your solution here
  function saturdayFun(activity = 'roller-skate'){
    return(`This Saturday, I want to ${activity}!`);
  }

  saturdayFun('roller-skate');

  function mondayWork(activity = 'go to the office'){
    return(`This Monday, I will ${activity}.`);
  }

  mondayWork('go to the office');

  function wrapAdjective(wrapper = "*"){
    function desplay(compliment = 'special'){ 
    return(`You are ${wrapper}${compliment}${wrapper}!`);
  };
  return desplay;
  }
  wrapAdjective("||");
  

