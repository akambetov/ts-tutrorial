// Защита типов
type Fish = {swim(): void}
type Bird = {fly: () => void}

// Предикат - защитник типов
function isFish (pet: Fish | Bird): pet is Fish{
  // return pet.hasOwnProperty('swim')
  return (pet as Fish).swim !== undefined
}

function move (animal: Fish | Bird) {
  if(isFish(animal)) {
    return animal.swim()
  }
  
  return animal.fly()
}

const fish: Fish = {swim() {console.log('swim'); return 'fish'}}
const bird: Bird = {fly: () =>  {console.log('fly'); return 'bird'}}

const fishR = move(fish)
const birdR = move(bird)

console.log({fishR, birdR})