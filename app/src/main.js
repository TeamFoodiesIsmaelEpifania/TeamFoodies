import './style.css';
import { region } from './utils/render';
import { selectedRegion } from './utils/render';
import { randomMeals } from './utils/render';

const main = (e) => {
  if (e) {
    e.preventDefault();
  }

  region();
  randomMeals(3);
<<<<<<< HEAD
  selectedRegion(region)
}
=======
  selectedRegion('American');
};
>>>>>>> 4addbbde8e82e048686ae2c6aaf2936d15b26228

main();
