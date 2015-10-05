
function hitSixAnimations(component,name){
  Ember.run.later((function() {
    component.set('imageUrl',name + "_hit/1.png")
  }), 500);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_hit/2.png")
  }), 600);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_hit/3.png")
  }), 700);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_hit/4.png")
  }), 800);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_hit/5.png")
  }), 900);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_hit/6.png")
  }), 1000);
}

function moveSixAnimations(component,name,position){
  var one = 8
  var two = 17
  var three = 25
  var four = 34
  var five = 43
  var six = 54
  if(position===1){
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/1.png");
      component.set('animationNumber',one);
    }), 500);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/2.png")
      component.set('animationNumber',two);
    }), 600);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/3.png")
      component.set('animationNumber',three);
    }), 700);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/4.png")
      component.set('animationNumber',four);
    }), 800);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/5.png")
      component.set('animationNumber',five);
    }), 900);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/6.png")
      component.set('animationNumber',six);
    }), 1000);
    Ember.run.later((function() {
      component.set('imageUrl',"blank.png")
    }), 1100);
  }else if(position===2){
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/1.png")
      component.set('animationNumber',one);
    }), 1100);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/2.png")
      component.set('animationNumber',two);
    }), 1200);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/3.png")
      component.set('animationNumber',three);
    }), 1300);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/4.png")
      component.set('animationNumber',four);
    }), 1400);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/5.png")
      component.set('animationNumber',five);
    }), 1500);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/6.png")
      component.set('animationNumber',six);
    }), 1600);
    Ember.run.later((function() {
      component.set('imageUrl',"blank.png")
    }), 1700);
  }else if(position===3){
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/1.png")
      component.set('animationNumber',one);
    }), 1700);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/2.png")
      component.set('animationNumber',two);
    }), 1800);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/3.png")
      component.set('animationNumber',three);
    }), 1900);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/4.png")
      component.set('animationNumber',four);
    }), 2000);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/5.png")
      component.set('animationNumber',five);
    }), 2100);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/6.png")
      component.set('animationNumber',six);
    }), 2200);
    Ember.run.later((function() {
      component.set('imageUrl',"blank.png")
    }), 2300);
  }else if(position===4){
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/1.png")
      component.set('animationNumber',one);
    }), 2300);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/2.png")
      component.set('animationNumber',two);
    }), 2400);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/3.png")
      component.set('animationNumber',three);
    }), 2500);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/4.png")
      component.set('animationNumber',four);
    }), 2600);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/5.png")
      component.set('animationNumber',five);
    }), 2700);
    Ember.run.later((function() {
      component.set('imageUrl',name + "_walk/6.png")
      component.set('animationNumber',six);
    }), 2800);
    Ember.run.later((function() {
      component.set('imageUrl',"blank.png")
    }), 2900);
  }else if(position===5){
    Ember.run.later((function() {
      component.set('imageUrl',"swordsman.png")
      component.set('animationNumber',0)
    }), 2900);
  }

}

function attackSevenAnimations(component,name){
  Ember.run.later((function() {
    component.set('imageUrl',name + "_attack/1.png")
  }), 500);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_attack/2.png")
  }), 600);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_attack/3.png")
  }), 700);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_attack/4.png")
  }), 800);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_attack/5.png")
  }), 900);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_attack/6.png")
  }), 1000);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_attack/7.png")
  }), 1100);
}

function deathEightAnimations(component,name){
  Ember.run.later((function() {
    component.set('imageUrl',name + "_death/1.png")
  }), 500);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_death/2.png")
  }), 600);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_death/3.png")
  }), 700);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_death/4.png")
  }), 800);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_death/5.png")
  }), 900);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_death/6.png")
  }), 1000);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_death/7.png")
  }), 1100);
  Ember.run.later((function() {
    component.set('imageUrl',name + "_death/8.png")
  }), 1200);
}
