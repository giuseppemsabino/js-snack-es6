// Snack 2
// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const footballTeams= [
    {
        name:"Stark",
        ponits: 0,
        fouls: 0
    },
    {
        name:"Lannister",
        ponits: 0,
        fouls: 0
    },
    {
        name:"Martell",
        ponits: 0,
        fouls: 0
    }];

    footballTeams.forEach(team =>{
        team.ponits = Math.floor(Math.random()*10);
        team.fouls = Math.floor(Math.random()*3);
    });
    console.log(footballTeams)

    const resumeTeams= footballTeams.map(team => {
        return {name:team.name ,fouls: team.fouls}
    });
    console.log(resumeTeams);

    