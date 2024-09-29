/*
* This is a program that calculates energy produced.
*
* @author  Ian Beddie
* @version 1.0
* @since 2024-09-24
*/

import { createPrompt } from 'bun-promptx'

const speedOfLight = 2.998 * (10 ** 8)

const objectMassInput = createPrompt(
  'Enter the mass of your object in kilograms: ')

const objectMassString = objectMassInput.value

if (isNaN(parseFloat(objectMassString))) {
  console.log('You did not enter a number.')
} else {
  const objectMass = parseFloat(objectMassString)
  const energyOutput = objectMass * (speedOfLight ** 2)
  console.log(
    `${objectMass}kg of mass would produce ${energyOutput} J of energy. `)
}

console.log('\nDone.')
