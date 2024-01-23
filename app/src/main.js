import './style.css'
import { region } from './utils/render'
import { selectedRegion } from './utils/render'

const main = () => {
  console.log('Testing')
  console.log('Testing branch')
  console.log('test #2')
  region()
  selectedRegion('Mexican')
}

main()