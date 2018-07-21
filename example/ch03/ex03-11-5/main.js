const kazoo1 = {
  name: 'kazoo',
  age: 4,
};
console.log(kazoo1);

const kazoo2 = { name: 'kazoo', age: 4 }; //1liner ver
console.log(kazoo2);

console.log(kazoo1.name === kazoo2.name);
console.log(kazoo1.age === kazoo2.age);
console.log(kazoo1 === kazoo2);

const kazoo3 = {
  name: 'kazoo',
  classification: {
    kingdom: 'Animalia',
    phylum: 'Chordata',
    class: 'Mamalia',
    order:'Carnivoria',
    family: 'Felidae',
    subfamily: 'Felinae',
    genus: 'Felis',
    species: 'F. catus',
  },
};
console.log(kazoo3);

const つくね = {
  名前:  'つくね',
  分類: {  // プロパティの値がオブジェクト
    界: '動物界',
    門: '脊索動物門',
    綱: '哺乳綱',
    目: 'ネコ目',
    科: 'ネコ科',
    亜科: 'ネコ亜科',
    属: 'ネコ属',
    種: 'ネコ',
  },
};
console.log(つくね);
