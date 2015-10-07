//component: the hexagon tile component that is animating the action
//type: hit || move || attack || die
//creature: the Creature object that is being animated

//walk_forward,
//number: the number of images that we have for the animation

function animate(component,name,type,number,leftOrRight,startingDelay,movementModifier){
  eval("animatrix")(component,name,type,number,leftOrRight,startingDelay,movementModifier);
}

function animatrix(component,name,type,number,leftOrRight,startingDelay,movementModifier){
  console.log(movementModifier)
  console.log(startingDelay)
  //Step 1 - Create the URL path to the images that will be cycled through to create the animation
  var urlHeader;
  if(leftOrRight==="left"){
    urlHeader = "units/" + name + "/";
  }else{
    urlHeader = "right/units/" + name + "/";
  }

  //Step 2 - For movement animations an incrementing ammount of margin is needed in order to push the image to its starting location on the next hexagon which is 52 pixels wide
  var startingDelayInner;
  if(type == "walk_forward"){
    var arrayOfMovementModifiers = []
    var incrementer = Math.floor(52 / number);
    for(i = 0; i < number - 1; i++){
      arrayOfMovementModifiers.push(incrementer * (i + 1))
    }
    arrayOfMovementModifiers.push(52)
  }


  //Step 3 - The starting delay will be set to 500 which is a good increment for animations to sync up and the starting array is needed in order to access a looping index inside of the Ember.run.later that holds its incremented value at the time of function initiation rather than call

  var startingArray = Array(number).join(0).split(0).map(Number.call, Number);

  //Step 4 - Cycle through the images to create the animation
  startingArray.forEach(function(object,index){
    Ember.run.later((function() {
      var innerNumber = index + 1;
      var insideNumber = innerNumber;
      if(type==="walk_forward" && innerNumber === number && innerNumber !== 1){
        component.set('imageUrl',"blank.png")
      }else{
        component.set('imageUrl',urlHeader + name + "_" + type + "/" + innerNumber +".png");
      }
      if(type==="walk_forward"){
        component.set('animationNumber',movementModifier[index]);
        console.log(component.get('animationNumber'))
      }
    }), startingDelay);
    if(index + 1 === number){
      console.log("foour")
    }else{
      startingDelay += 100;
    }

  })
}

function moveSixAnimations(component,name,position){
  var urlHeader = "units/" + name + "/";
  var one = 8
  var two = 17
  var three = 25
  var four = 34
  var five = 43
  var six = 52
  if(position===1){
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/1.png");
      component.set('animationNumber',one);
    }), 500);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/2.png")
      component.set('animationNumber',two);
    }), 600);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/3.png")
      component.set('animationNumber',three);
    }), 700);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/4.png")
      component.set('animationNumber',four);
    }), 800);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/5.png")
      component.set('animationNumber',five);
    }), 900);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/6.png")
      component.set('animationNumber',six);
    }), 1000);
    Ember.run.later((function() {
      component.set('imageUrl',"blank.png")
    }), 1100);
  }else if(position===2){
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/1.png")
      component.set('animationNumber',one);
    }), 1100);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/2.png")
      component.set('animationNumber',two);
    }), 1200);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/3.png")
      component.set('animationNumber',three);
    }), 1300);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/4.png")
      component.set('animationNumber',four);
    }), 1400);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/5.png")
      component.set('animationNumber',five);
    }), 1500);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/6.png")
      component.set('animationNumber',six);
    }), 1600);
    Ember.run.later((function() {
      component.set('imageUrl',"blank.png")
    }), 1700);
  }else if(position===3){
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/1.png")
      component.set('animationNumber',one);
    }), 1700);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/2.png")
      component.set('animationNumber',two);
    }), 1800);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/3.png")
      component.set('animationNumber',three);
    }), 1900);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/4.png")
      component.set('animationNumber',four);
    }), 2000);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/5.png")
      component.set('animationNumber',five);
    }), 2100);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/6.png")
      component.set('animationNumber',six);
    }), 2200);
    Ember.run.later((function() {
      component.set('imageUrl',"blank.png")
    }), 2300);
  }else if(position===4){
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/1.png")
      component.set('animationNumber',one);
    }), 2300);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/2.png")
      component.set('animationNumber',two);
    }), 2400);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/3.png")
      component.set('animationNumber',three);
    }), 2500);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/4.png")
      component.set('animationNumber',four);
    }), 2600);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/5.png")
      component.set('animationNumber',five);
    }), 2700);
    Ember.run.later((function() {
      component.set('imageUrl',urlHeader + name + "_walk/6.png")
      component.set('animationNumber',six);
    }), 2800);
    Ember.run.later((function() {
      component.set('imageUrl',"blank.png")
    }), 2900);
  }else if(position===5){
    Ember.run.later((function() {
      component.set('imageUrl',"units/swordsman/static/swordsman.png")
      component.set('animationNumber',0)
    }), 2900);
  }

}

function attackSevenAnimations(component,name){
  var urlHeader = "units/" + name + "/";
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_attack/1.png")
  }), 500);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_attack/2.png")
  }), 600);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_attack/3.png")
  }), 700);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_attack/4.png")
  }), 800);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_attack/5.png")
  }), 900);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_attack/6.png")
  }), 1000);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_attack/7.png")
  }), 1100);
}

function deathEightAnimations(component,name){
  var urlHeader = "units/" + name + "/";
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_death/1.png")
  }), 500);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_death/2.png")
  }), 600);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_death/3.png")
  }), 700);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_death/4.png")
  }), 800);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_death/5.png")
  }), 900);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_death/6.png")
  }), 1000);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_death/7.png")
  }), 1100);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_death/8.png")
  }), 1200);
}
