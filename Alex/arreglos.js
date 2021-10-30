let country = {
    name: "México",
    language: "Español",
    getPopulation: function(){
      return `En ${this.name}, se hablan más de 67 lenguas además del ${this.language}`
    }
  }
  
 console.log(country)
 console.log(country.name)
 console.log(country.language)
 console.log(country.getPopulation())