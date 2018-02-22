class Sorter {
  constructor(sortMethod) {
    // your implementation
    this.massiv=[];
   this.compareFunction = null;
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

  sort(indices) 
{
    // your implementation
     this.massiv2=[];
      indices = indices.sort(function(a,b){
         return a-b
      });
       for(var i=0; i<indices.length; i++){
         this.massiv2[i]=this.massiv[indices[i]];
      };
       if(this.compareFunction == null){
         this.massiv2.sort(function(a,b){
           return a-b
      });
      }
       else this.massiv2.sort(this.compareFunction);
       for(var i = 0; i <this.massiv2.length; i++ ) {
         this.massiv[indices[i]] = this.massiv2[i];
      };
       return this.massiv;
}

  setComparator(compareFunction) {
    // your implementation
     this.compareFunction = compareFunction;   
  }
}
module.exports = Sorter;
