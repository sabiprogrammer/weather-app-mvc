class GetWeather {
  #data;
  #parentElement = document.querySelector(".app-container");

  render(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this.#data = data;

    const markup = this.#generateMarkup();

    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderError(message = "Something went wrong! Please try again.") {
    const markup = `

        <div class="search-box">
        <input
          type="text"
          id="search-input"
          placeholder="Search for a city..."
        />
        <button id="search-btn">🔍</button>
      </div>

            <div class="error">
                <div>⚠️</div>
                <p>${message}</p>
            </div>
        `;
    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner() {
    const markup = `
                <div class="loader" id="loader">
                    <div class="spinner"></div>
                    <p>Fetching weather data...</p>
                </div>
        `;

    this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  handleGetWeatherClick(handler) {
    this.#parentElement.addEventListener("click", (e) =>
      this.#processSubmit(e, handler)
    );
    this.#parentElement.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.#processSubmit(e, handler);
    });
  }

  #processSubmit(e, handler) {
    let input;

    // Case 1: Click on button
    if (e.type === "click") {
      const btn = e.target.closest("#search-btn");
      if (!btn) return;

      input = btn.closest(".search-box").querySelector("#search-input");
    }

    // Case 2: Enter key inside input
    if (e.type === "keydown" && e.key === "Enter") {
      if (!e.target.matches("#search-input")) return;
      input = e.target;
    }

    if (!input) return;

    const inputtedCity = input.value.trim();
    if (!inputtedCity) {
      alert("Please enter a city name");
      return;
    }

    input.value = "";
    handler(inputtedCity);
  }

  #generateMarkup() {
    const iconURL = `https://openweathermap.org/img/wn/${
      this.#data.icon
    }@2x.png`;

    return `

     <div class="search-box">
        <input
          type="text"
          id="search-input"
          placeholder="Search for a city..."
        />
        <button id="search-btn">🔍</button>
      </div>

        <div class="weather-card" id="weather-card">
            <div class="weather-icon">
                <img src="${iconURL}" alt="${this.#data.description}" />
            </div>

            <div class="temp">${this.#data.temp}°C</div>
            <div class="weather-desc">${this.#data.description}</div>

            <div class="location">
            <span class="city">${this.#data.city}</span>,
            <span class="country">${this.#data.country}</span>
            </div>

            <div class="extra-info">
            <div class="info">
                <span>🌧 Humidity</span>
                <h3 id="humidity">${this.#data.humidity}%</h3>
            </div>
            <div class="info">
                <span>💨 Wind</span>
                <h3 id="wind">${this.#data.wind} km/h</h3>
            </div>
            </div>
        </div>
    `;
  }
}
export default new GetWeather();
