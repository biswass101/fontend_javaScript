const countriesContainer = document.querySelector(".countries-container");
const filterByRegion = document.querySelector(".filter-by-region");
const serchInput = document.querySelector(".search-container input")
const themeChanger = document.querySelector(".theme-changer")
let allCountriesData
const themeData = JSON.parse(localStorage.getItem("myTheme")) || {}
if(themeData.color) document.body.classList.add(themeData.color)
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    renderCountries(data)
    allCountriesData = data
  });

filterByRegion.addEventListener("change", (e) => {
  fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
    .then((res) => res.json())
    .then((data) => renderCountries(data));
});
function renderCountries(data) {
  countriesContainer.innerHTML = "";
  data.forEach((country) => {
    // console.log(country);
    const countryCard = document.createElement("a");
    countryCard.classList.add("country-card");
    countryCard.href = `/Application/country.html?name=${country.name.common}`; //kown as query string
    countryCard.innerHTML = `
            <img src="${country.flags.svg}" alt="${country.name.common}">
            <div class="card-text">
                <h3 class = "card-title">${country.name.common}</h3>
                <p><b>Population: </b>${new Intl.NumberFormat().format(
                  country.population
                )}</p>
                <p><b>Capital: </b>${country.capital}</p>
                <p><b>Region: </b>${country.region}</p>
            </div>
        `;
    countriesContainer.append(countryCard);
  });
}


serchInput.addEventListener("input", (e) =>
{
  const filteredCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
  renderCountries(filteredCountries)
})

themeChanger.addEventListener("click", ()=>
  {
    const themeText = document.querySelector(".theme-text")
    if([... document.body.classList].includes('dark'))
      {
        document.body.classList.remove('dark')
        localStorage.removeItem('myTheme')
        themeText.innerText = "Dark mode"
        document.querySelector(".theme-changer i").classList.remove("fa-regular", "fa-sun")
        document.querySelector(".theme-changer i").classList.add("fa-regular", "fa-moon")
      }
    else
    {
        themeData.color = 'dark'
        localStorage.setItem("myTheme", JSON.stringify(themeData))
        document.body.classList.add('dark')
        themeText.innerText = "Light mode"
        document.querySelector(".theme-changer i").classList.remove("fa-regular", "fa-moon")
        document.querySelector(".theme-changer i").classList.add("fa-regular", "fa-sun")
      
    }
  }
)


