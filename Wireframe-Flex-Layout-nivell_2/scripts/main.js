document.querySelector('.show-more-button').addEventListener('click', function() {
	if(this.getAttribute('data-more') == 0) {
		this.setAttribute('data-more', 1);
		this.style.display = 'block';
		this.innerHTML = 'Leer menos';

		this.previousElementSibling.style.display = 'none';
		this.previousElementSibling.previousElementSibling.style.display = 'inline';
	}
	else if(this.getAttribute('data-more') == 1) {
		this.setAttribute('data-more', 0);
		this.style.display = 'inline';
		this.innerHTML = 'Leer mas';

		this.previousElementSibling.style.display = 'inline';
		this.previousElementSibling.previousElementSibling.style.display = 'none';
	}	
});