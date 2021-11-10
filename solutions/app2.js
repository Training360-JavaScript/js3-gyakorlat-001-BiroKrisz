const HU = {
	date(date) {
		return new Intl.DateTimeFormat("hu-HU").format(date)
	},

    curreny(currency) {
		return new Intl.NumberFormat("hu-HU", {
			style: 'currency',
			currency: 'HUF'
		}).format(currency)
	},
    list(arr = []) {
        return arr.map((item, i, array) =>
        i === array.length-1 ? ` és ${item}`: `, ${item}`)
        .join('').replace(', ','');
      },

};

export default HU
