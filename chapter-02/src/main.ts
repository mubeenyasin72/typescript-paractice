let myName: string = "M Mubeen Yasin";
let meaningOfLife: number;
let isloading: boolean;
let album: any; //this vaiable can contain any type of the value that you want.
let unionVar: string | number; //this type in the typescript is called union type because in this vaiable is may have string value or the number value
let re:RegExp = /\w+/g // this is called the regular expression 

meaningOfLife = 12;
isloading = true;
album = { name: "Yo", artist: "M Mubeen Yasin" };

console.log(myName);
console.log(meaningOfLife);
console.log(isloading);
console.log(album);

const sum = (a: number, b: number) => {
  return a + b;
};
console.log(sum(12, 31))
