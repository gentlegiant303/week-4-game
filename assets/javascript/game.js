characters = {
  'Rey': {
    name: 'Rey',
    health: 64,
    attack: 10,
    counterAttack: 10
  },
    'Maz': {
      name: 'Maz',
      health: 74,
      attack: 4,
      counterAttack: 1
    },
    'Asajj': {
      name: 'Asajj',
      health: 92,
      attack: 7,
      counterAttack: 10
    },
    'Barriss': {
      name: 'Barriss',
      health: 83,
      attack: 6,
      counterAttack: 8
    }
}

var currCharacter;
var currDefender;
var health;
var enemyHealth = 0;
var charSelected=false;
var enemySelected=false;
var attack= 0;
var enemyAttack = 0;
var enemeiesDefeated = 0;

$('#asajj').on("click", function () {
  if(charSelected) {
    $("#current_enemy").append('<img id="Asajj" src="./assets/images/Asajj_Ventress.jpg" class="image" />')
    currDefender=characters.Asajj
    enemyHealth = currDefender.health
    enemySelected = true;
    $("#enemy_health").append(enemyHealth)
    $("#asajj").remove()
    $("#character_select").html("<h2>Press Attack to Start</h2>")
  }
  else {
    $("#selected_character").append('<img id="Asajj" src="./assets/images/Asajj_Ventress.jpg" class="image" />')
    health=characters.Asajj.health
    currCharacter=characters.Asajj
    $("#health").append(health)
    charSelected=true;
    $("#asajj").remove()
    $("#character_select").html("<h2>Select Your Opponent</h2>")
  }
});

$('#barriss').on("click", function () {
  if(charSelected){
    $("#current_enemy").append('<img id="Barriss" src="./assets/images/Barrisprofile2.jpg" class="image" />')
    currDefender=characters.Barriss
    enemyHealth = currDefender.health
    enemySelected = true;
    $("#enemy_health").append(enemyHealth)
    $("#barriss").remove()
    $("#character_select").html("<h2>Press Attack to Start</h2>")
  }
  else{
    $("#selected_character").append('<img id="Barriss" src="./assets/images/Barrisprofile2.jpg" class="image" />')
    health=characters.Barriss.health
    currCharacter=characters.Barriss
    $("#health").append(health)
    charSelected=true;
    $("#barriss").remove()
    $("#character_select").html("<h2>Select Your Opponent</h2>")
  }
});

$('#maz').on("click", function () {
  if(charSelected) {
    $("#current_enemy").append('<img id="Maz" src="./assets/images/Maz_Kanata.jpg" class="image" />')
    currDefender=characters.Maz
    enemyHealth = currDefender.health
    enemySelected = true;
    $("#enemy_health").append(enemyHealth)
    $("#maz").remove()
    $("#character_select").html("<h2>Press Attack to Start</h2>")
  }
  else{
    $("#selected_character").append('<img id="Maz" src="./assets/images/Maz_Kanata.jpg" class="image" />')
    health=characters.Maz.health
    currCharacter=characters.Maz
    $("#health").append(health)
    charSelected=true;
    $("#maz").remove()
    $("#character_select").html("<h2>Select Your Opponent</h2>")
  }
});

$('#rey').on("click", function () {
  if(charSelected){
    $("#current_enemy").append('<img id="Rey" src="./assets/images/Rey_Star_Wars.png" class="image" />')
    currDefender=characters.Rey
    enemyHealth = currDefender.health
    enemySelected = true;
    $("#enemy_health").append(enemyHealth)
    $("#rey").remove()
    $("#character_select").html("<h2>Press Attack to Start</h2>")
  }
  else{
    $("#selected_character").append('<img id="Rey" src="./assets/images/Rey_Star_Wars.png" class="image" />')
    health=characters.Rey.health
    currCharacter=characters.Rey
    $("#health").append(health)
    charSelected=true;
    $("#rey").remove()
    $("#character_select").html("<h2>Select Your Opponent</h2>")
  }
});

$("#attack").on("click", function() {
if(charSelected===false){
  setTimeout(function(){ alert("Please Select Character"); }, 1000);
  return;
}
else if(enemySelected) {
attack += currCharacter.attack
$("#enemy_health").html("<b>Health: </b>" + (enemyHealth -= attack))
enemyAttack = currDefender.counterAttack
$("#health").html("<b>Health: </b>" + (health -= enemyAttack))
}
else{
  setTimeout(function(){ alert("Please Select Enemy"); }, 1000);
  return;
}

if (health<=0) {
  setTimeout(function(){ alert("You have died"); }, 1000);
}
else if(enemyHealth<=0){
  $("#current_enemy").children('img').remove()
  $("#enemy_health").html("<b>Health: </b>")
  enemeiesDefeated++;
  enemySelected = false;
}

if(enemeiesDefeated===3){
  setTimeout(function(){ alert("You have won"); }, 1000);
}
});
