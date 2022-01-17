function login() {
	if(document.querySelector('#password').value) {
		document.querySelector('button[type=submit]').click()
	}
}

setTimeout(login, 100)
