console.log("intersaction");
//여러경우에 모두해당
type Programmer = {favoriteLanguage:string};
const programmer: Programmer = {favoriteLanguage:'TypeScript'};
type DissertLover = {favoriteDissert:string};
const dissertLover:DissertLover={favoriteDissert:'cheeseCake'};

type DissertLoverProgrammer = {favoriteLanguage:string,favoriteDissert:string

}; 
const asdf:DissertLoverProgrammer={
  favoriteLanguage:'TypeScript',
  favoriteDissert:'cheeseCake'
};

type DissertLoverProgrammer2 =Programmer & DissertLover;

type Awsome = Programmer & DissertLover;