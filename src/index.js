class Sorter {
  constructor(sortMethod) {
    this.massiv=[];
   this.compareFunction = null;
  }

  add(element) {
    this.massiv.push(element);
  }

  at(index) {
    return this.massiv[index];
  }

  get length() {
    return this.massiv.length;
  }
  toArray() {
    return this.massiv;
  }
  sort(indices) 
{
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
     this.compareFunction = compareFunction;   
  }
}
module.exports = Sorter;
