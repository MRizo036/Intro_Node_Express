const express = require('express');
const path = require('path');
const app = express();
const port = 8080;
const url = "https://ghibliapi.herokuapp.com/vehicles"
const fetch = require('node-fetch');

// 
app.use(express.static("public"));

app.engine('pug', require('pug').__express);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.render('index',
    {
      title: 'Studio Ghibli', 
      data: films
    });
    
  });

  app.get('/pageOne', (req, res) => {
    res.render('pageOne',
    {
      title: 'Studio Ghibli', 
      data: people
    });
    
  });

  app.get('/pageTwo', (req, res) => {
    res.render('pageTwo',
    {
      title: 'Studio Ghibli', 
      data: location
    });
    
  });

  app.get('/pageThree', (req, res) => {
    res.render('pageThree',
    {
      title: 'Studio Ghibli', 
      data: species
    });
    
  });

  app.get('/pageFour', (req, res) => {
    const fech = fetch(url)
    .then(res => res.json())
    .then(
      (json) => {
        console.log(json)
        res.render('pageFour', { 
          vehicles: json
        })
      })
    });


var films = {
      title: "Castle in the Sky",
      description: "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      director: "Hayao Miyazaki",
      producer: "Isao Takahata",
      release_date: "1986",
      rt_score: "95",

      title2: "Grave of the Fireflies",
      description2: "In the latter part of World War II, a boy and his sister, orphaned when their mother is killed in the firebombing of Tokyo, are left to survive on their own in what remains of civilian life in Japan. The plot follows this boy and his sister as they do their best to survive in the Japanese countryside, battling hunger, prejudice, and pride in their own quiet, personal battle.",
      director2: "Isao Takahata",
      producer2: "Toru Hara",
      release_date2: "1988",
      rt_score2: "97"
    }


var people = {
      name: "Ashitaka",
      gender: "male",
      age: "late teens",
      eye_color: "brown",
      hair_color: "brown",

      name2: "Yakul",
      age2: "Unknown",
      gender2: "male",
      eye_color2: "Grey",
      hair_color2: "Brown",
}

var location = {
          name: "Irontown",
          climate: "Continental",
          terrain: "Mountain",
          surface_water: "40",

          name2: "Gutiokipanja",
          climate2: "Continental",
          terrain2: "Hill",
          surface_water2: "50",
}

var species = {
      name: "Spirit",
      classification: "Spirit",
      eye_colors: "Red",
      hair_colors: "Light Orange",
      
      name2: "God",
      classification2: "God",
      eye_colors2: "Brown",
      hair_colors2: "White",
}

var vehichles ={
      id: "4e09b023-f650-4747-9ab9-eacf14540cfb",
      name: "Air Destroyer Goliath",
      description: "A military airship utilized by the government to access Laputa",
      vehicle_class: "Airship",
      length: "1,000"
}
const server = app.listen(port, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });

