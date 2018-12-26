export let api = {
	get: () =>
		fetch('https://jsonplaceholder.typicode.com/posts/')
			.then(res => res.json())
			.then(res => res)
			.catch(error => console.log(error)),
	post: (post: object) =>
		fetch('https://jsonplaceholder.typicode.com/posts/', {
			method: 'POST',
			body: JSON.stringify(post),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => res.json())
			.then(res => res)
			.catch(error => console.log(error)),
	delete: (id: number | any) =>
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: 'DELETE'
		})
			.then(res => res.json())
			.then(res => res)
			.catch(error => console.log(error)),
	put: (id: string | number, newPost: object) =>
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: 'PUT',
			body: JSON.stringify(newPost),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(res => res.json())
			.then(post => post)
			.catch(error => console.log(error))
};
