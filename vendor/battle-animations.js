//component: the hexagon tile component that is animating the action
//type: hit || move || attack || die
//creature: the Creature object that is being animated

//walk_forward,
//number: the number of images that we have for the animation

function animate(component,name,type,number){
  eval("animate" + number)(component,name,type);
}

function animate2(component,name,type){
  var urlHeader = "units/" + name + "/";

  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/1.png")
  }), 500);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/2.png")
  }), 600);
}

function animate3(component,name,type){
  var urlHeader = "units/" + name + "/";

  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/1.png")
  }), 500);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/2.png")
  }), 600);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/3.png")
  }), 700);
}

function animate4(component,name,type){
  var urlHeader = "units/" + name + "/";

  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/1.png")
  }), 500);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/2.png")
  }), 600);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/3.png")
  }), 700);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/4.png")
  }), 800);
}

function animate5(component,name,type){
  var urlHeader = "units/" + name + "/";

  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/1.png")
  }), 500);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/2.png")
  }), 600);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/3.png")
  }), 700);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/4.png")
  }), 800);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/5.png")
  }), 900);
}

function animate6(component,name,type){
  var urlHeader = "units/" + name + "/";

  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/1.png")
  }), 500);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/2.png")
  }), 600);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/3.png")
  }), 700);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/4.png")
  }), 800);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/5.png")
  }), 900);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/6.png")
  }), 1000);
}

function animate7(component,name,type){
  var urlHeader = "units/" + name + "/";

  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/1.png")
  }), 500);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/2.png")
  }), 600);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/3.png")
  }), 700);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/4.png")
  }), 800);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/5.png")
  }), 900);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/6.png")
  }), 1000);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/7.png")
  }), 1100);
}

function animate8(component,name,type){
  var urlHeader = "units/" + name + "/";

  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/1.png")
  }), 500);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/2.png")
  }), 600);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/3.png")
  }), 700);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/4.png")
  }), 800);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/5.png")
  }), 900);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/6.png")
  }), 1000);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/7.png")
  }), 1100);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/8.png")
  }), 1200);
}

function animate9(component,name,type){
  var urlHeader = "units/" + name + "/";

  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/1.png")
  }), 500);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/2.png")
  }), 600);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/3.png")
  }), 700);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/4.png")
  }), 800);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/5.png")
  }), 900);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/6.png")
  }), 1000);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/7.png")
  }), 1100);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/8.png")
  }), 1200);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/9.png")
  }), 1300);
}

function animate10(component,name,type){
  var urlHeader = "units/" + name + "/";

  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/1.png")
  }), 500);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/2.png")
  }), 600);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/3.png")
  }), 700);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/4.png")
  }), 800);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/5.png")
  }), 900);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/6.png")
  }), 1000);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/7.png")
  }), 1100);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/8.png")
  }), 1200);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/9.png")
  }), 1300);
  Ember.run.later((function() {
    component.set('imageUrl',urlHeader + name + "_" + type + "/10.png")
  }), 1400);
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
