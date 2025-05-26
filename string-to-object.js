const peopleAsString =(input) => {
  return input.split(',').reduce((acc, name)=>{
    acc[name] = name.length;
    return acc
  }, {})
}

console.log(peopleAsString('Shakiba,Pedram,Maryam'));