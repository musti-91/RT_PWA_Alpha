export let data = {
	get: () =>
		fetch('http://localhost:2000/posts/')
			.then(res => res.json())
			.then(res => res)
			.catch(error => console.log(error)),
	post: (post: object) =>
		fetch('http://localhost:2000/posts/', {
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
		fetch(`http://localhost:2000/posts/${id}`, { method: 'DELETE' })
			.then(res => res.json())
			.then(res => res)
			.catch(error => console.log(error)),
	put: (id: string | number, newPost: object) =>
		fetch(`http://localhost:2000/posts/${id}`, {
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
