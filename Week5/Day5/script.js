let button = document.querySelector('#button');
let names = document.querySelector('#name');
let height = document.querySelector('#height');
let gender = document.querySelector('#gender');
let birthYear = document.querySelector('#birth-year');
let homeWorld = document.querySelector('#home-world');

async function getInfo () {
  updateWithLoading();
  let randomNumber = Math.floor((Math.random() * 88) + 1);
  let apiUrl = `https://swapi.dev/api/people/${randomNumber}/`;

  try {
    const response = await fetch(apiUrl);
    if (response.status !== 200) {
      updateInfoWithError();
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    updateInfo(data);
  } catch (error) {
    console.error('There was an error:', error);
    updateInfoWithError();
  }
}

async function updateInfo(resp) {
  try {
    const response = await fetch(resp.homeworld.replace(/^http:\/\//i, 'https://'));
    if (response.status !== 200) {
      throw new Error(`Error`);
    }
    const data = await response.json();
    updateInfo2(data);
  } catch (error) {
    console.log('There was an error:', error);
    homeWorld.innerText = `Home World: N/A`;
  }

  names.innerText = resp.name;
  height.innerText = `Height: ${resp.height}`;
  gender.innerText = `Gender: ${resp.gender}`;
  birthYear.innerText = `Birth Year: ${resp.birth_year}`;
}
function updateInfo2(re) {
  homeWorld.innerText = `Home World: ${re.name}`;
}

//Display when Error
function updateInfoWithError() {
  names.innerText = 'Oh No! That person isn\'t available.';
  height.innerText = '';
  gender.innerText = '';
  birthYear.innerText = '';
  homeWorld.innerText = '';
}

//Display when updating info (pending data)
function updateWithLoading() {
  names.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
  height.innerText = '';
  gender.innerText = '';
  birthYear.innerText = '';
  homeWorld.innerText = '';
}

button.addEventListener('click', getInfo);