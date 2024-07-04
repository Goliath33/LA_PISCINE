const poneys = [{ 
    name: 'Pinky Pie', 
    strength: '50', 
    speed: '65', 
    charisma: '80' 
}, { 
    name: 'Rainbow Dash', 
    strength: '80', 
    speed: '75', 
    charisma: '90' 
}, {
    name: 'Twilight Sparkle',
    strength: '90',
    speed: '45',
    charisma: '70'
}, { 
    name: 'Rarity', 
    strength: '30', 
    speed: '50', 
    charisma: '85' 
}, { 
    name: 'Fluttershy', 
    strength: '67', 
    speed: '64', 
    charisma: '30' 
}]


let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = poneys.length - 1;
    if (numero > poneys.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}
