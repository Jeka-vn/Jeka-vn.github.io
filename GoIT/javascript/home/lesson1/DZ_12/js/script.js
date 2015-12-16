var app = {
	createElement: function(params) {
		var element = document.createElement(params.tagName);
		if (params.inputType) {
			element.setAttribute('type', params.inputType);
		}
		element.className = params.className;
		element.innerHTML = params.content;
		if (params.parentElement) {
			params.parentElement.appendChild(element);
		}
		return element;
	},
	generateQuestion: function(questionsAmount, answersAmount) {
		for (var i = 0; i < questionsAmount; i++) {
			this.createElement({
				tagName: 'h2',
				content: 'Вопрос №' + (i + 1),
				parentElement: wrapper
			});
			for (var j = 0; j < answersAmount; j++)
				var label = this.createElement({
					tagName: 'label',
					content: '<input type="checkbox" />Вариант ответа №' + (i + 1),
					parentElement: wrapper
				});
		}
	}
}
var body = document.querySelector('body');
app.createElement({
	tagName: 'div',
	className: 'wrapper',
	content: '',
	parentElement: body
});
var wrapper = document.querySelector('.wrapper');
app.createElement({
	tagName: 'h1',
	className: 'title',
	content: 'Тест по програмированю',
	parentElement: wrapper
});
app.generateQuestion(3, 3);
app.createElement({
	tagName: 'input',
	className: 'chec',
	inputType: 'submit',
	inputValue: 'мой текст',
	parentElement: wrapper
});



