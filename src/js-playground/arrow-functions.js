const user = {
  name: 'Raymi',
  cities: ['Lima', 'Santiago', 'Buenos Aires', 'Mexico DF'],
  placesILivedForEach() {
    this.cities.forEach(city => {
      console.log(`${this.name} has lived in ${city}`);
    });
  }
};

user.placesILivedForEach();
