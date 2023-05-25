import { isAsc } from "../../src/lib/helpers";

const testData = {
  unsorted: ({ key = "age" } = {}) => {
    return {
      arr: {
        numbers: [5, 3, -9, 1, 4, 2, -1],
        alphaNumericWithFloats: [
          "m",
          36,
          43,
          68,
          "e",
          34.22720107976321,
          99.7530453945129,
          86.88285233555781,
          24,
          "p",
          "v",
          75.47630878656577,
          47,
          56.77438554068888,
          "h",
        ],
        objects: [
          { name: "John", [key]: 23 },
          { name: "Mike", [key]: 32 },
          { name: "Chris", [key]: -11 },
          { name: "Nick", [key]: 19 },
          { name: "Ariana", [key]: -9 },
          { name: "Will", [key]: 9 },
        ],
        objectWithAlphaNumericWithFloats: [
          { name: "John", [key]: "m" },
          { name: "Mike", [key]: 32 },
          { name: "Chris", [key]: 34.22720107976321 },
          { name: "Nick", [key]: "p" },
          { name: "Ariana", [key]: -9 },
          { name: "Will", [key]: 56.77438554068888 },
        ],
      },
    };
  },
  sorted: ({ key = "age", order = "asc" } = {}) => {
    return {
      arr: {
        numbers: isAsc(order)
          ? [-9, -1, 1, 2, 3, 4, 5]
          : [5, 4, 3, 2, 1, -1, -9],
        alphaNumericWithFloats: isAsc(order)
          ? [
              24,
              34.22720107976321,
              36,
              43,
              47,
              56.77438554068888,
              68,
              75.47630878656577,
              86.88285233555781,
              99.7530453945129,
              "e",
              "h",
              "m",
              "p",
              "v",
            ]
          : [
              99.7530453945129,
              86.88285233555781,
              75.47630878656577,
              68,
              56.77438554068888,
              47,
              43,
              36,
              34.22720107976321,
              24,
              "v",
              "p",
              "m",
              "h",
              "e",
            ],

        objects: isAsc(order)
          ? [
              { name: "Chris", [key]: -11 },
              { name: "Ariana", [key]: -9 },
              { name: "Will", [key]: 9 },
              { name: "Nick", [key]: 19 },
              { name: "John", [key]: 23 },
              { name: "Mike", [key]: 32 },
            ]
          : [
              { name: "Mike", [key]: 32 },
              { name: "John", [key]: 23 },
              { name: "Nick", [key]: 19 },
              { name: "Will", [key]: 9 },
              { name: "Ariana", [key]: -9 },
              { name: "Chris", [key]: -11 },
            ],
        objectWithAlphaNumericWithFloats: isAsc(order)
          ? [
              { name: "John", [key]: "m" },
              { name: "Nick", [key]: "p" },
              { name: "Ariana", [key]: -9 },
              { name: "Mike", [key]: 32 },
              { name: "Chris", [key]: 34.22720107976321 },
              { name: "Will", [key]: 56.77438554068888 },
            ]
          : [
              { name: "Nick", [key]: "p" },
              { name: "John", [key]: "m" },
              { name: "Will", [key]: 56.77438554068888 },
              { name: "Chris", [key]: 34.22720107976321 },
              { name: "Mike", [key]: 32 },
              { name: "Ariana", [key]: -9 },
            ],
      },
    };
  },
};

export { testData };
