// TaskT structure in JavaScript
export const TaskT = {
	id: '', // String
	title: '', // String
	description: '', // String
	priority: '', // String
	deadline: 0, // Number
	image: undefined, // Optional String
	alt: undefined, // Optional String
	tags: [
		{
			title: '', // String
			bg: '', // String (background color)
			text: '' // String (text color)
		}
	]
};

// Column structure in JavaScript
export const Column = {
	name: '', // String
	items: [] // Array of TaskT objects
};

// Columns structure in JavaScript
export const Columns = {
	key: Column // The key here will be a dynamic string, each representing a column
};
