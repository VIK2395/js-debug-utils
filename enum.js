class Enum {
  #reversed;

  constructor(enumObj) {
    Object.freeze(Object.assign(this, enumObj));
    this.#reversed = this.#reverse();
  }

  get reversed() {
    return this.#reversed;
  }

  #reverse() {
    return Object.freeze(
      Object.entries(this)
        .reduce((acc, [key, value]) => {
          const numKey = Number(key);
          acc[value] = Number.isNaN(numKey)
            ? key
            : numKey;
          return acc;
        }, {}),
    );
  }
}

const Weekend = new Enum({
    Friday: 1,
    Saturday: 2,
    Sunday: 3,
})

console.log('Weekend ', Weekend);                           // Weekend  Enum { Friday: 1, Saturday: 2, Sunday: 3, Sundayf: '12344d' }
console.log('Weekend.Friday ', Weekend.Friday);             // Weekend.Friday  1
console.log('Weekend.reversed ', Weekend.reversed);         // Weekend.reversed  { '1': 'Friday', '2': 'Saturday', '3': 'Sunday', '12344d': 'Sundayf' }
console.log('Weekend.reversed ', Weekend.reversed[3]);      // Weekend.reversed  Sunday
