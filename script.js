function clearResult() {
	document.querySelector('#result').value = '';
}

function deleteNumber() {
	const result = document.querySelector('#result').value;
	document.querySelector('#result').value = result.slice(0, -1);
}

function inputUser(number) {
	document.querySelector('#result').value += number;
}

function calculate() {
	if (document.querySelector('#result').value === '') {
		alert('Masukkan angka terlebih dahulu');
		return;
	}

	try {
		const result = eval(document.querySelector('#result').value);
		document.querySelector('#result').value = result;
	} catch {
		alert('Operator tidak valid');
		document.querySelector('#result').value = '';
	}
}
