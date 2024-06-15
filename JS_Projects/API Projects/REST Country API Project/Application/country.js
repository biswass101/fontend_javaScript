const countryName = new URLSearchParams(window.location.search).get('name')
const flagImg = document.querySelector(".country-detsils img")
const countryHeading = document.querySelector(".country-detsils h1")
const nativeName = document.querySelector(".native-name")
const population = document.querySelector(".population")
const region = document.querySelector(".region")
const subRegion = document.querySelector(".sub-region")
const capital = document.querySelector(".capital")
const domain = document.querySelector(".top-lvl-domain")
const currencies = document.querySelector(".currencies")
const language = document.querySelector(".lang")
const borderContries = document.querySelector(".border-countries")
const themeChanger = document.querySelector(".theme-changer")
const themeData = JSON.parse(localStorage.getItem("myTheme")) || {}
if(themeData.color) document.body.classList.add(themeData.color)
if(themeData.color) document.body.classList.add(themeData.color)
fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true
`)
    .then(res => res.json())
    .then(([country]) => 
        {
            // console.log(country.borders);
            flagImg.src = country.flags.svg
            countryHeading.innerText = country.name.common
            population.innerText = new Intl.NumberFormat().format(country.population)
            region.innerText = country.region
            
            
            domain.innerText = country.tld
            if(country.capital){
                capital.innerText = country.capital?.[0]
            }  
            if(country.subregion){
                subRegion.innerText = country.subregion
            }
            if(country.name.nativeName){
                nativeName.innerText = Object.values(country.name.nativeName)[0].common
            }
            else
            {
                nativeName = country.name.common
            }
            if(country.currencies)
                currencies.innerText = Object.values(country.currencies).map((currency) => currency.name).join(', ') 
            if(country.languages){
                language.innerText = Object.values(country.languages).join(', ')
            }
            if(country.borders){
                country.borders.forEach((border)=>
                {
                    fetch(`https://restcountries.com/v3.1/alpha/${border}`)
                        .then(res => res.json())
                        .then(([borderCountry]) => {
                            const borderCountryTag = document.createElement('a')
                            borderCountryTag.innerText = borderCountry.name.common
                            borderCountryTag.href = `/Application/country.html?name=${borderCountry.name.common}`
    
                            borderContries.append(borderCountryTag)
                        })
                })
            }
        }
    )

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