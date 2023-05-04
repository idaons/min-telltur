interface Destination {
  position: [number, number];
  visited: boolean;
  name: string;
  poeng: number;
}

const tiPaToppHamaroy: Destination[] = [
  {
    name: "Hjelsengåsen",
    poeng: 2,
    visited: true,
    position: [68.089869, 15.586681],
  },
  {
    name: "Straumstien på Ness",
    poeng: 2,
    visited: false,
    position: [67.9957829, 15.41211145],
  },
];
