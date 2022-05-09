let arr = [
	{
		index: 36,
		value: 33,
	},
	{
		index: 37,
		value: 33,
	},
	{
		index: 53,
		value: 51,
	},
	{
		index: 28,
		value: 24,
	},
	{
		index: 42,
		value: 41,
	},
	{
		index: 3,
		value: 1,
	},
	{
		index: 9,
		value: 4,
	},
	{
		index: 32,
		value: 31,
	},
	{
		index: 26,
		value: 23,
	},
	{
		index: 5,
		value: 2,
	},
	{
		index: 0,
		value: 0,
	},
	{
		index: 1,
		value: 0,
	},
	{
		index: 6,
		value: 3,
	},
	{
		index: 21,
		value: 20,
	},
	{
		index: 15,
		value: 12,
	},
	{
		index: 27,
		value: 23,
	},
];

let getFirstPairOfDuplicates = () => {
	let values = arr.map((item) => item.value);
	let uniqueValues = [...new Set(values)];

	for (let value of uniqueValues) {
		let found = arr.filter((item) => item.value === value);
		if (found.length === 2) {
			return found;
		}
	}
	return false;
};

console.log(getFirstPairOfDuplicates());
