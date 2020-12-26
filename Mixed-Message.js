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
        fact: ['is still a planet in my heart','has been reclassed as a planetoid',"doesn't care about what you think"]
    }
]

//will select random components for sentence
const randomizer = (p) => {
    return Math.floor(Math.random() * p);
};

//generates message 
const messageMaker = () => {
    //for consistency across next 3 variables
    const planetIndex = randomizer(solarSystem.length);

    //random planet is selected
    const planet = solarSystem[planetIndex].name;

    //a random satellite orbiting the planet is selected
    const sat = solarSystem[planetIndex].sat[randomizer(solarSystem[planetIndex].sat.length)];

    //and a random fact about the planet is selected
    const fact = solarSystem[planetIndex].fact[randomizer(solarSystem[planetIndex].fact.length)];

    //adds completed "Mixed Message" to html file
    document.getElementById("planetMessage").innerHTML = `The planet ${planet}, which is orbited by ${sat}, ${fact}.`;

    //changes background image to match planet
    switch (planet) {
        case 'Mercury':
            document.getElementById("BG").style.backgroundImage = "url(images/mercury.jpg)";
            break;
        case 'Venus':
            document.getElementById("BG").style.backgroundImage = "url(images/venus.jpg)";
            break;
        case 'Earth':
            document.getElementById("BG").style.backgroundImage = "url(images/earth.jpg)";
            break;
        case 'Mars':
            document.getElementById("BG").style.backgroundImage = "url(images/mars.jpg)";
            break;
        case 'Jupiter':
            document.getElementById("BG").style.backgroundImage = "url(images/jupiter.jpg)";
            break;
        case 'Saturn':
            document.getElementById("BG").style.backgroundImage = "url(images/saturn.jpg)";
            break;
        case 'Uranus':
            document.getElementById("BG").style.backgroundImage = "url(images/uranus.jpg)";
            break;
        case 'Neptune':
            document.getElementById("BG").style.backgroundImage = "url(images/neptune.jpg)";
            break;
        case 'Pluto':
            document.getElementById("BG").style.backgroundImage = "url(images/pluto.jpg)";
            break;
    }
}