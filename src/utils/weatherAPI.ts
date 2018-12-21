// https://api.openweathermap.org/data/2.5/forecast?q=kontich,be&mode=json&appid=42712e3ffbeb463082824a09a370bd6c
export let weatherApi = {
	get: (location: string) => {
		let formatLoc= location.toLocaleLowerCase()
		return fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=${formatLoc}&mode=json&appid=5ab1b00241316209e80ff9113c0a49ac`
		)
			.then(res => res.json())
			.then(res => res)
			.catch(error => console.log(error));
	}
};

export let geolocationApi = {
	get: (position: any) => {
		console.log(position);
		return fetch(
			`http://www.mapquestapi.com/geocoding/v1/reverse?key=XKdij5aSPycBZffiTR5DOmyRnXoaAmdg&location=${
				position.lat
			},${position.lng}`
		)
			.then(res => res.json())
			.then(res => res)
			.catch(error => console.log(error));
	},
	getLocationName: async (res: any) => {
		let locationName = await res.results[0].locations[0].adminArea5;
		let locationCountry = await res.results[0].locations[0].adminArea1;
		return `${locationName},${locationCountry}`;
	}
};
