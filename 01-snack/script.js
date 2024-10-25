// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bicycles= [
    {
        name:"Kawasaki",
        mass: 10
    },
    {
        name: "Trek",
        mass: 11
    },
    {
        name:"Scott",
        mass: 9
    }];

    // console.log(bicycles[0].name)

    let lightBike = bicycles[0];

    for(let i = 0; i < bicycles.length; i++){
        if(bicycles[i].mass < lightBike.mass){
            lightBike = bicycles[i]
        }
    }
   console.log(`la bici piu leggera delinventario e ${lightBike.name} ha un peso di ${lightBike.mass}Km`)