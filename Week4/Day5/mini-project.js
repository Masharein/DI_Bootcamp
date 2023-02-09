const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

const mainContainer = document.querySelector(".container");
console.log(mainContainer)

class Robotclass{
    constructor(id, name, username, email, image){
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.image = image;
    }
    display(){ 
        const divRobot = document.createElement("div");
        divRobot.innerHTML = `<img src="${this.image}" alt="Robot Image"><h3>${this.name}</h3><p>Username: ${this.username}</p><p>Email: ${this.email}</p>`;
        divRobot.classList.add("robot")
        mainContainer.appendChild(divRobot)
    }
}
robots.forEach(robot => {const {id, name, username, email, image} = robot
    const newRobot =  new Robotclass(id, name, username, email, image)
    console.log(newRobot.display());
    })

    const form = document.querySelector("#form")
    form.addEventListener("input", searchRobot)

    function searchRobot() {
        const searchValue = form.value.toLowerCase();
        const filteredRobots = robots.filter(robot =>
            robot.name.toLowerCase().includes(searchValue)
        );
        mainContainer.innerHTML = "";
        filteredRobots.forEach(robot => {
            const {id, name, username, email, image} = robot;
            const newRobot = new Robotclass(id, name, username, email, image);
            newRobot.display();
        });
    }

    
    
    
    
    