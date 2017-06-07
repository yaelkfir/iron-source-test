(function () {

  const queryString = {};

  const abouteMincraft = 'Andy breaks down the barrier between desktop and mobile computing, while keeping a user up to date with the latest Android OS feature upgrades. It also provides users with unlimited storage capacity, PC and Mac compatibility, and the freedom to play the most popular mobile games on a desktop, Yes you can now run Android on windows. With phone as a joystick, you will never have to sacrifice the multi-touch or gyro elements of gaming, and thanks to seamless connection between desktop and mobile, you can receive a SnapChat phone picture on the street and see it on your desktop at home or even a whatsapp message.'

  const textMinecraft = 'Explore randomly generated worlds and build amazing things from the simplest of homes to the grandest of castles. Play in creative mode with unlimited resources or mine deep into the world in survival mode, crafting weapons and armor to fend off the dangerous mobs.';

  function changeImgs(product){

    const logoImg = document.querySelector('.logo-img');
    const mainImg = document.querySelector('.main-img');

    logoImg.src = `assets/logo-${product.split('+').join('-')}.png`;
    mainImg.src = `assets/${product.split('+').join('-')}.png`;

  }

  function changeTextContent() {

    const text1 = document.querySelector('.text1');
    const about = document.querySelector('.p-about');

    text1.textContent = textMinecraft;
    about.textContent = abouteMincraft
  }

  function changeBtn(queryString){
    const downloadBtn = document.querySelectorAll('.main-btn');

    if (queryString.bcolor) {
      downloadBtn.forEach((btn) => {
        btn.style.backgroundColor = `#${queryString.bcolor}`;

      });
    }

    if (queryString.btext) {
      downloadBtn.forEach((btn) => {
        btn.innerHTML = `${queryString.btext} <span class="product-name">Clash of Clans</span>`
      });
    }
  }

  function getParams() {

    const query = window.location.search.substring(1);
    const params = query.split("&");

    for (let i = 0; i < params.length; i++) {
      const pair = params[i].split("=");

      if (typeof queryString[pair[0]] === "undefined") {
        queryString[pair[0]] = decodeURIComponent(pair[1]);

      } else if (typeof queryString[pair[0]] === "string") {
        const arr = [queryString[pair[0]], decodeURIComponent(pair[1])];
        queryString[pair[0]] = arr;

      } else {
        queryString[pair[0]].push(decodeURIComponent(pair[1]));
      }
    }
  }

  function changeElementsByParams() {

    changeBtn(queryString);

    if (queryString.prod) {

      const productSpan = document.querySelectorAll('.product-name');

      for (const span of productSpan) {
        span.textContent =  queryString.prod.split('+').join(' ');
      }

      changeImgs(queryString.prod);

      if (queryString.prod === 'minecraft') {
        changeTextContent();
      }
    }
  }

  getParams();
  changeElementsByParams();
  
})();
