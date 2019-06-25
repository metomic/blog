const back = document.getElementById('back')
const title = document.getElementById('title')
const description = document.getElementById('description')

function filter() {
	const hash = decodeURI(location.hash.split('#').join(''))
	document.body.setAttribute('data-current-category', hash)
	if (hash) {
		document.querySelectorAll(`.post-summary:not([data-category="${hash}"])`).forEach(ele => {
			ele.style.display = 'none'
		})
		document.querySelectorAll(`.post-summary[data-category="${hash}"]`).forEach(ele => {
			ele.style.display = 'block'
		})
	} else {
		document.querySelectorAll('.post-summary').forEach(ele => {
			ele.style.display = 'block'
		})
	}

	document.getElementById('category-title').innerText = hash ? `Latest in ${hash}` : 'Latest'

	document.querySelectorAll('.category-nav a.active').forEach(ele => {
		ele.classList.remove('active')
	})
	document.querySelectorAll(`.category-nav a[data-category="${hash}"]`).forEach(ele => {
		ele.classList.add('active')
	})

	if (!hash) {
		title.innerText = 'Incognito'
		description.innerText = 'Demystifying data ethics, privacy, and technology'
		document.querySelectorAll(`.category-nav a:not([data-category])`).forEach(ele => {
			ele.classList.add('active')
		})
	} else {
		title.innerText = hash
		description.innerText = window.categories[hash]
	}

	document.getElementById('responsive-nav').value = '#'+hash
}

document.getElementById('responsive-nav')
	.addEventListener('change', function(){
		if (history.pushState) {
			history.pushState(null, null, this.value)
			filter()
		} else {
			location.hash = this.value
		}
	})

filter()
window.addEventListener('hashchange', filter, false)