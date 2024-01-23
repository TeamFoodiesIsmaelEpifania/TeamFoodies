import './style.css'
import { region } from './utils/render'
import { selectedRegion } from './utils/render'

const main = () => {
  region()
  selectedRegion('Mexican')
}

main()