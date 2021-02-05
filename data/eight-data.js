const eightData = [
    {
        id: 1,
        position: 1,
    },
    {
        id: 2,
        position: 2,
    },
    {
        id: 3,
        position: 3,
    },
    {
        id: 4,
        position: 4,
    },
    {
        id: 5,
        position: 5,
    },
    {
        id: 6,
        position: 6,
    },
    {
        id: 7,
        position: 7,
    },
    {
        id: 8,
        position: 8,
    },
    {
        id: 9,
        isEmpty: true,
        position: 9,
    }
];

export const movementMap = {
    9: [6, 8],
    8: [5, 7, 9],
    7: [4, 8],
    6: [3, 5, 9],
    5: [2, 4, 6, 8],
    4: [1, 5, 7],
    3: [2, 6],
    2: [1, 3, 5],
    1: [2, 4],
};

export default eightData;
