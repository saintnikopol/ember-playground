import Route from '@ember/routing/route';

// import barn from '../helpers/assets/barn/desc.js'
// import hero from '../app/helpers/assets/hero/desc.js';
// import nature_canada from '../app/helpers/assets/nature_canada/desc.js';
// import prowl from '../app/helpers/assets/prowl/desc.js';
const owls = [
  {
    description: `The barn owl (Tyto alba) is the most widely distributed species of owl and one of the most widespread of all birds. It is also referred to as the common barn owl, to distinguish it from other species in its family, Tytonidae, which forms one of the two main lineages of living owls, the other being the typical owls (Strigidae). The barn owl is found almost everywhere in the world except polar and desert regions, Asia north of the Himalayas, most of Indonesia, and some Pacific islands.[2]`,
    name: 'Barn (Tyto alba)',
    src: '/assets/barn/owl.jpg',
    key: 'barn',
  },
  {
    description: `CLASS: Aves (Birds)ORDER: StrigiformesFAMILIES: Strigidae (typical owls) and Tytonidae (barn owls)GENERA: Typical owls - 25; barn owls - 2SPECIES: Typical owls - 189; barn owls - 16`,
    name: 'Tree owl',
    src: '/assets/hero/owl.jpg',
    key: 'hero',
  },
  {
    description: `Is there an owl in your neighbourhood? Probably. Some can be found almost anywhere with trees, even in the city! Even so, owls are famously mysterious. Many people have never seen one in the wild. Winter is a great time to look because the bare branches help reveal roosts. Some owls such as the Great Horned and Northern Saw-Whet also become more vocal in late winter as breeding season approaches.`,
    name: 'Strigiformes )',
    src: '/assets/nature_canada/owl.jpg',
    key: 'nature_canada',
  },
  {
    description: `Join a naturalist for an evening out with the owls. An interactive program will highlight the habits and adaptations of our nocturnal neighbors. Then we will walk the woodlands of Wehr listening and looking for Great Horned and Eastern Screech Owls.`,

    name: 'Hiring for zoo',
    src: '/assets/prowl/owl.jpg',
    key: 'prowl',
  },
];
// const owl_keys = ['barn', 'hero', 'nature_canada', 'prowl'];

export default Route.extend({
  // model() {
    // return [barn, hero, nature_canada, prowl];
    // return ['barn', 'hero', 'nature_canada', 'prowl'];
  // },
  model() {
    return owls;
  },
  // keys() {
  //   return owl_keys;
  // },
});
