// Desafio 10
/* function techList(technologies, name) {
  let technologiesSort = technologies.sort();
  let techObjects = [];
  if (technologies.length !== 0) {
    for (let index = 0; index < technologiesSort.length; index += 1) {
      techObjects[index] = {
        tech: technologiesSort[index],
        name,
      };
    }
    return techObjects;
  }
  return 'Vazio!';
} */

const techList = (arrayTechnologies, name) => {
  if (arrayTechnologies.length === 0) return 'Vazio!';

  const technologyList = arrayTechnologies
    .sort()
    .map((technology) => ({
    tech: technology,
    name,
    }));
  return technologyList;
};

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
module.exports = techList;