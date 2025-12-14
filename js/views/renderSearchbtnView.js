class RenderSearchBtn {
  #parentElement = document.querySelector(".app-container");

  render() {
    const markup = this.#generateMarkup();

    // this.#parentElement.innerHTML = "";
    this.#parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  #generateMarkup() {
    return `
         <div class="search-box">
        <input
          type="text"
          id="search-input"
          placeholder="Search for a city..."
        />
        <button id="search-btn">🔍</button>
      </div>
    `;
  }
}
export default new RenderSearchBtn();
