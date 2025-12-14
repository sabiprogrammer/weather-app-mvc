import * as model from "./model.js";
import getWeatherView from "./views/getWeatherView.js";

const getWeatherInfo = async function () {
};

const controlGetWeatherInfo = async function(){
    getWeatherView.renderSpinner();
    await model.fetchWeatherData();

    getWeatherView.render(model.state.data);
}

const init = function(){
    getWeatherView.handleGetWeatherClick(controlGetWeatherInfo);
}

init();