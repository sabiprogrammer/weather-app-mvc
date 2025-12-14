import * as model from "./model.js";
import getWeatherView from "./views/getWeatherView.js";

const controlGetWeatherInfo = async function(inputtedCity){
    getWeatherView.renderSpinner();
    // await model.fetchWeatherData();
    try{
        await model.fetchWeatherData(inputtedCity);
        getWeatherView.render(model.state.data);
    }catch(err){
        // getWeatherView.renderError(err.message);
        getWeatherView.renderError(err);
        return;
    }

}

const init = function(){
    getWeatherView.handleGetWeatherClick(controlGetWeatherInfo);
}

init();