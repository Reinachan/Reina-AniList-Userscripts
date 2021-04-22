/** Replaces emoji and other characters that SQL can't process into a unicode string that it can actually understand.
 */
const replaceEmoji = (input: HTMLInputElement): void => {
	let result = '';
	for (let i = 0; i < input.value.length; i += 1) {
		const code = input.value.codePointAt(i) ?? 0;
		if (code > 0xffff) {
			result += ['&#', code, ';'].join('');
			i += 1;
		} else {
			result += String.fromCodePoint(code);
		}
	}
	input.value = result;
};

export default replaceEmoji;
