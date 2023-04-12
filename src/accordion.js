import './style.scss'
document.addEventListener('DOMContentLoaded', () => {
	if (window.acf) {
		window.acf.addAction('render_block_preview', accordionsInitEditor)
	} else {
		accordionsInitView()
	}

	function accordionsInitEditor(block) {
		console.log(block)
		if (block) {
			const accordionsEditor = block[0].querySelectorAll('.accordion')
			accordionsEditor.forEach((element) => {
				toggleAccordions(element)
			})
		}
	}

	function accordionsInitView() {
		const accordions = document.querySelectorAll('.accordion')
		accordions.forEach((element) => {
			toggleAccordions(element)
		})
	}

	function toggleAccordions(element) {
		const question = element.querySelector('.question')
		const answer = element.querySelector('.answer')
		if (question && answer) {
			question.addEventListener('click', () => {
				answer.classList.toggle('show')
			})
		}
	}
})
