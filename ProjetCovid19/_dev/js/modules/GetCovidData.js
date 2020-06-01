import $ from 'jquery';
import InjectData from './InjectData';
import CountryFlags from './CountryFlags';

class GetCovidData {
    const database=firebase.database();
    const rootRef=database.ref('Statistic of corona for each country');
    const rootRef2=database.ref('Statistic Global ');
  constructor() {
    this.alert = $('.js-alert-text');
    this.events();
  }

  events() {
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(data => {
        let injectData = new InjectData(data, 'Germany');
        let countryFlags = new CountryFlags('Germany');
        
      })
      .catch(err => {
        this.alert.addClass('alert__text--active')
        this.alert.text(err + '. Try refreshing the page!');
      });

  }

}

export default GetCovidData;
