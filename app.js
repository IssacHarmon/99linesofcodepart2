let singBtn = document.querySelector('button');

singBtn.addEventListener('click', function () {
	let friends = ['Taylor', 'Kenny', 'Des', 'Abita', 'Brandon'];
	//  for (let i = 0; i < friends.length; i++) {

	for (let i = 0; i < friends.length; i++) {
		let friendDiv = document.createElement('div');
		friendDiv.classList.add('friend');
		let friendH3 = document.createElement('h3');

		friendH3.textContent = friends[i];
		friendDiv.appendChild(friendH3);
		document.body.appendChild(friendDiv);

		for (let j = 99; j >= 1; j--) {
			let newLineParagraph = document.createElement('p');
			friendDiv.appendChild(newLineParagraph);

			if (j > 2)
				newLineParagraph.textContent =
					j +
					' lines of codes in the file, ' +
					j +
					' lines of code; ' +
					friends[i] +
					' strikes one out, clears it all out, ' +
					(j - 1) +
					' lines of code in the file.';
			else if (j === 2)
				newLineParagraph.textContent =
					j +
					' lines of code in the file, ' +
					j +
					' lines of code; ' +
					friends[i] +
					' strikes ones out, clears it all out,  ' +
					(j - 1) +
					' line of code in the file.';
			else if (j === 1)
				newLineParagraph.textContent =
					j +
					' line of code in the file, ' +
					j +
					' line of code; ' +
					friends[i] +
					' strikes ones out, clears it all out,  ' +
					'no more lines of code in the file.';
		}
	}
	//  }
});
