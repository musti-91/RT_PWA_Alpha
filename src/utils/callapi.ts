export const callapi = ( url: string, path: string, method: string, data?: any ) => {
	return fetch(url + path, {
		method,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data)
	}).then(res => res.json())
}
