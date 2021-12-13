import _ from 'lodash';

// Divide Items
export const paginate = function (items, pageNumber, pageSize) {
	const startIndex = (pageNumber - 1) * pageSize;
	return _(items).slice(startIndex).take(pageSize).value();
};

// Pages Calculate
export const pageCalc = function (allMovies, pageSize) {
	const pageCount = Math.ceil(allMovies.length / pageSize);
	if (pageCount <= 1) return null;
	const pages = _.range(1, pageCount + 1);
	return [...pages];
};
