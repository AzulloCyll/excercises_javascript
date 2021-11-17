let hand = [
    {
        value: 3,
        color: 2,
    },
    {
        value: 12,
        color: 3,
    },
    {
        value: 12,
        color: 1,
    },
    {
        value: 12,
        color: 4,
    },
    {
        value: 1,
        color: 2,
    },
];

function checkPair2(hand) {
    let test = [];
    let occ = {};
    let occMax = 0;
    let max = 0;

    test = hand.map(card => card.value);
    test.sort();

    console.log(test);




}

checkPair2(hand);

