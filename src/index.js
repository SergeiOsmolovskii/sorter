class Sorter {
  constructor() {
    // your implementation
    this.massiv=[];

  }

  add(element) {
    // your implementation
    this.massiv.push(element);
  }

  at(index) {
    // your implementation
    return this.massiv[index];
  }

  get length() {
    // your implementation
    return this.massiv.length;
  }

  toArray() {
    // your implementation
    return this.massiv;
  }

  sort(indices) {
    // your implementation
    this.massiv.sort();
  }

  setComparator(compareFunction) {
    // your implementation
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;
