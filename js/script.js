const api = {
    base: "https://api.openweathermap.org/data/2.5/",
    key: "089b9bed95e00dbc795741f5a3a2e3fa",
    lang: "pt_br",
    units: "metric"
}

function teste(city) {

  fetch(`${api.base}weather?q=${city}&lang=${api.lang}&units=${api.units}&APPID=${api.key}`)

      .then((response) => {
            if (!response.ok) {
              alert("Cidade não encontrada");
              throw new Error("No weather found.");
          }
            return response.json();
          })
          .then(data => {
            test(data)
        });
};

function test(data) {

    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity, feels_like, temp_min, temp_max } = data.main;
    const { speed } = data.wind;
    const { country } = data.sys;

      document.querySelector(".city").innerText =  name + ", " + country;

      document.querySelector(".icon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";

      document.querySelector(".description").innerText = description;

      document.querySelector(".temp").innerText = temp + "°C";

      document.querySelector(".wind-speed").innerText = "Velocidade dos Ventos: " + speed + " km/h";

      document.querySelector(".feels_like").innerText = "Sensação Térmica: " + feels_like + "°C";

      document.querySelector(".country").innerText = " Região: " + country;

      document.querySelector(".humidity").innerText =
        "Umidade: " + humidity + "%";

      document.querySelector(".temp_max").innerText =
        "Temperatura Máxima: " + temp_max;

      document.querySelector(".temp_min").innerText =
        "Temperatura Mínima: " + temp_min;


       switch (icon) {
         case "01d":
              document.querySelector(".card").style.backgroundImage = "url(images/01d.jfif)"
           break;

         case "01n":
            document.querySelector(".card").style.backgroundImage = "url(images/01n.avif)"
          break;

          case "02d":
            document.querySelector(".card").style.backgroundImage = "url(images/02d.avif)"
           break;

          case "02n":
              document.querySelector(".card").style.backgroundImage = "url(images/02n.avif)"
           break;

            case "03d":
              document.querySelector(".card").style.backgroundImage = "url(images/02d.avif)"
           break;

            case "03n":
                document.querySelector(".card").style.backgroundImage = "url(images/02n.avif)"
           break;

              case "04d":
                document.querySelector(".card").style.backgroundImage = "url(images/02d.avif)"
           break;

            case "04n":
                document.querySelector(".card").style.backgroundImage = "url(images/02n.avif)"
           break;

              case "09d":
                  document.querySelector(".card").style.backgroundImage = "url(images/03dn.jpg)"
            break;

              case "09n":
                  document.querySelector(".card").style.backgroundImage = "url(images/03dn.jpg)"
            break;

              case "10d":
                    document.querySelector(".card").style.backgroundImage = "url(images/03dn.jpg)"
            break;

               case "10n":
                    document.querySelector(".card").style.backgroundImage = "url(images/03dn.jpg)"
            break;

                case "11d":
                    document.querySelector(".card").style.backgroundImage = "url(images/04dn.jpeg)"
            break;

                  case "11n":
                    document.querySelector(".card").style.backgroundImage = "url(images/04dn.jpeg)"
            break;

                  case "13d":
                        document.querySelector(".card").style.backgroundImage = "url(images/05dn.avif)"
              break; 

                  case "13n":
                        document.querySelector(".card").style.backgroundImage = "url(images/05dn.jfif)"
              break;

              case "13d":
                        document.querySelector(".card").style.backgroundImage = "url(images/05dn.avif)"
              break; 

                  case "13n":
                        document.querySelector(".card").style.backgroundImage = "url(images/05dn.jfif)"
              break;

            

         default:
           break;
       }
    
    };

    document.querySelector(".search-bar").addEventListener('keypress', function(e){
      if(e.which == 13){
        pesquisar();
      }
    }, false);

    

function pesquisar() {
   this.teste(document.querySelector(".search-bar").value);
};

document.querySelector(".search button").addEventListener("click", function () {
  pesquisar();



});
