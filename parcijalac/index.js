let searchField, loader, resultsElement;
let timeout;

const search = (event) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => dohvatiPodatke(event), 1000);
};

const dohvatiPodatke = async (event) => {
  loader.classList.toggle("hidden");
  let termin = event.target.value;

  let endpoint = `https://api.themoviedb.org/3/search/movie?api_key=ab8596081145bffa991ffe5317e1d3c4&language=en-US&page=1&include_adult=false&query=${termin}`;
  let response = await fetch(endpoint);
  let data = await response.json();

  let pripremaHTMLa = "";
  if (data.results.length > 0) {
    data.results.forEach((element) => {
      pripremaHTMLa += `<li>${element.original_title}</li>`;
    });
  } else {
    pripremaHTMLa = "Ne postoje rezultati za traženi termin pretrage!";
  }
  loader.classList.toggle("hidden");
  resultsElement.innerHTML = pripremaHTMLa;
};

const init = () => {
  searchField = document.getElementById("search");
  loader = document.getElementById("loader");
  resultsElement = document.getElementById("results");

  searchField.addEventListener("keyup", (event) => search(event));
};

init();
