const solarSystem = [
    {
        name: 'Mercury',
        sat: ['space dust','hopes and dreams','severe lacking'],
        fact: ['is named after the Greek god Hermes','orbits the sun in 89.97 Earth days','is the closest planet to the sun']
    },
    {
        name: 'Venus',
        sat: ['emptiness','NOTHING','a ghost named Larry'],
        fact: ['is named after the Roman goddess of love and beauty','has the hottest surface temperature of all the planets in the solar system','has an atmosphere made of 96% carbon dioxide']
    },
    {
        name: 'Earth',
        sat: ['The Moon','various man-made satellites','our impending doom'],
        fact: ['is the 3rd planet from the Sun','is the only astronomical object known to harbor life','orbits the sun in 365 days']
    },
    {
        name: 'Mars',
        sat: ['Phobos','Deimos'],
        fact: ['is named after the Roman god of war','is the site of Olympus Mons, the largest volcano and highest known mountain on any planet in the Solar System','can be seen from Earth with the naked eye']
    },
    {
        name: 'Jupiter',
        sat: ['Io','Europa','Ganymede','Callisto','Amalthea','Himalia','Elara','Pasiphae','Sinope','79 moons in total'],
        fact: ['is the largest planet in the solar system','has a mass that is 2.5 times that of all the other planets in the solar system combined','is primarily composed of hydrogen with a quarter of its mass being helium']
    },
    {
        name: 'Saturn',
        sat: ['Mimas','Enceladus','Tethys','Dione','Rhea','Titan','Hyperion','Iapetus','82 moons in total'],
        fact: ['is named after the Roman god of wealth and agriculture','is the only planet in the solar system that is less dense than water','takes almost 30 years to orbit the Sun']
    },
    {
        name: 'Uranus',
        sat: ['Ariel','Umbriel','Titania','Oberon','Miranda','Cordelia','Ophelia','Bianca','Cressida','27 moons in total'],
        fact: ['is named after the Greek god of the sky','has the coldest planetary atmosphere in the solar system','displays wind speeds up to 560 mph']
    },
    {
        name: 'Neptune',
        sat: ['Triton','Nereid','Naiad','Thalassa','Despina','Galatea','Larissa','Proteus','Halimede','14 moons in total'],
        fact: ['is named after the Roman god of the sea','orbits the sun once every 164.8 years','is 17 times the mass of Earth']
    },
    {
        name: 'Pluto',
        sat: ['Charon','Nix','Hydra','Kerberos','Styx'],
        fact: ['is still a planet in my heart','has been reclassed as a planetoid',"does't care about what you think"]
    }
]

const planetPicker = () => {
    let i = Math.floor(Math.random() * 9);
    return solarSystem[i].name;
}
const planet = planetPicker();


const planetIndexFinder = (plt) => {
    let p;
    switch (plt) {
        case 'Mercury':
            p = 0;
            break;
        case 'Venus':
            p = 1;
            break;
        case 'Earth':
            p = 2;
            break;
        case 'Mars':
            p = 3;
            break;
        case 'Jupiter':
            p = 4;
            break;
        case 'Saturn':
            p = 5;
            break;
        case 'Uranus':
            p = 6;
            break;
        case 'Neptune':
            p = 7;
            break;
        case 'Pluto':
            p = 8;
            break;
    }
    return p;
}
const planetIndex = planetIndexFinder(planet);


const satPicker = (p) => {
    let satLen = solarSystem[p].sat.length;
    let i = Math.floor(Math.random() * satLen);
    return solarSystem[p].sat[i];
}
const sat = satPicker(planetIndex);


const funFact = (p) => {
    let factLen = solarSystem[p].fact.length;
    let i = Math.floor(Math.random() * factLen);
    return solarSystem[p].fact[i];
}
const fact = funFact(planetIndex);

console.log(`The planet ${planet}, which is orbited by ${sat}, ${fact}.`);