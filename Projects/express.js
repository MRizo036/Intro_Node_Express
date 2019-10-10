const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.engine('pug', require('pug').__express);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.render('index',
    {
      title: 'Studio Ghibli', 
      data: main
    });
    
  });

  app.get('/pageOne', (req, res) => {
    res.render('pageOne',
    {
      title: 'Pokemon API', 
      data: main
    });
    
  });

var main = {
      id: "2baf70d1-42bb-4437-b551-e5fed5a87abe",
      title: "Castle in the Sky",
      description: "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world.",
      director: "Hayao Miyazaki",
      producer: "Isao Takahata",
      release_date: "1986",
      rt_score: "95"
    }


const server = app.listen(port, () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });

