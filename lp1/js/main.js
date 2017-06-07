
(function () {

  const queryString = {};

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
    const downloadBtn = document.querySelector('.download-btn');

    if (queryString.bcolor) {
      downloadBtn.style.backgroundColor = `#${queryString.bcolor}`;
    }
    if (queryString.btext) {
      downloadBtn.innerHTML = `<i class="material-icons">file_download</i>${queryString.btext}`
    }

    if (queryString.ctext){
      const title = document.querySelector('h2');
      title.textContent =  `${queryString.ctext}`

    }
  }

  getParams();
  changeElementsByParams();

})();
