export let shapes = [
    {
        name: "I",
        color: "red",
        matrix: [
            [1],
            [1],
            [1],
            [1]
        ],
        squares: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 0, y: 3 }
        ]
    }, {
        name: "O",
        color: "blue",
        matrix: [
            [2, 2],
            [2, 2]
        ],
        squares: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 0 },
            { x: 1, y: 1 }
        ]
    }, {
        name: "T",
        color: "brown",
        matrix: [
            [3, 3, 3],
            [0, 3, 0]
        ],
        squares: [
            { x: 0, y: 0 },
            { x: 1, y:  0},
            { x: 2, y: 0 },
            { x: 1, y: 1 }
        ]
    }, {
        name: "S",
        color: "green",
        matrix: [
            [0, 4, 4],
            [4, 4, 0]
        ],
        squares: [
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 1 }
        ]
    }, {
        name: "Z",
        color: "cyan",
        matrix: [
            [5, 5, 0],
            [0, 5, 5]
        ],
        squares: [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 2, y: 1 }
        ]
    }, {
        name: "J",
        color: "white",
        matrix: [
            [0, 6],
            [0, 6],
            [6, 6]
        ],
        squares: [
            { x: 1, y: 0, },
            { x: 1, y: 1, },
            { x: 0, y: 2, },
            { x: 1, y: 2, }
        ]
    }, {
        name: "L",
        color: "magenta",
        matrix: [
            [7, 0],
            [7, 0],
            [7, 7]
        ],
        squares: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 1, y: 2 }
        ]
    }
]
