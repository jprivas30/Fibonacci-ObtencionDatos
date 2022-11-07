
// SECUENCIA FIBONACCI DEL 0 AL 1000

const Fib = (num1,num2) => {
    for (let i=0; i<=100; i++){
        if (num1<=1000){console.log("La secuencia fibonacci del 0 al 1000 es:",num1)};
        num3 = num1+num2;
        num1 = num2;
        num2 = num3; 
    }
}
Fib (0,1)

// SECUENCIA FIBONACCI DE NUMEROS PARES DEL 0 AL 1000

const Fib_par = (num1,num2) => {
    for (let i=0; i<=16; i++){                
        if  (num1%2===0){console.log("Los numeros pares de fibonacci del 0 al 1000 son:",num1)};
        num3 = num1+num2;
        num1 = num2;
        num2 = num3;
    }
}
Fib_par(0,1)

// SECUENCIA FIBONACCI DE NUMEROS IMPARES DEL 0 AL 1000

const Fib_impar = (num1,num2) => {
    for (let i=0; i<=16; i++){                
        if  (num1%2===1){console.log("Los numeros impares de fibonacci del 0 al 1000 son:",num1)};
        num3 = num1+num2;
        num1 = num2;
        num2 = num3;
    }
}
Fib_impar(0,1)

// ARREGLO DEL OBJETOS MARVEL

const personajesdemarvel = [
    {
      name: "Iron Man",
      realName: "Tony Stark",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Captain America",
      realName: "Steve Rogers",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Thor",
      realName: "Thor Odinson",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Hulk",
      realName: "Bruce Banner",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Black Widow",
      realName: "Natasha Romanoff",
      height: 5.11,
      weight: 125,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Hawkeye",
      realName: "Clint Barton",
      height: 5.11,
      weight: 125,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Black Panther",
      realName: "T'Challa",
      height: 6.0,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Wolverine",
      realName: "James Howlett",
      height: 5.3,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Captain Marvel",
      realName: "Carol Danvers",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
    {
      name: "Doctor Strange",
      realName: "Stephen Strange",
      height: 6.2,
      weight: 200,
      power: 100,
      intelligence: 100,
      speed: 100,
      strength: 100,
      agility: 100,
      durability: 100,
      energyProjection: 100,
      fightingSkills: 100,
    },
  ];

  const nomreal= personajesdemarvel.map((nombrerealsuper) => {
    return nombrerealsuper.realName.toUpperCase()
})

const nomSuper= personajesdemarvel.map((nombrerealsuper) => {
    return nombrerealsuper.name.toUpperCase()
})

console.log("MarvelCharacters", personajesdemarvel)
console.log("Sus nombres reales son:", nomreal)  
console.log("Sus nombres de super son:", nomSuper)  

let pokemones = [
    {
    nombre: 'Pikachu',
    tipo: 'Electrico'
    },
    {
    nombre: 'Charmander',
    tipo: 'Fuego',
    },
    {
    nombre: 'Bulbasaur',
    tipo: 'Planta'
    },
    {
    nombre: 'Squirtle',
    tipo: 'Agua'
    },
    {
    nombre: 'Charmeleon',
    tipo: 'Fuego'
    },
    {
    nombre: 'Weedle',
    tipo: 'bicho'
    },
    {
    nombre: 'Charizard',
    tipo: 'Fuego'
    }
   ]   

const pokefuego = pokemones.filter (item => item.tipo ==='Fuego')
console.log("Los pokemones de fuego son:", pokefuego);