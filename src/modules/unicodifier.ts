import create from '~src/helpers/create';
import { fetchElement, fetchElementAll } from '~src/helpers/fetchElement';
import replaceEmoji from '~src/helpers/replaceEmoji';

const createReplaceAction = (
	actionElement: HTMLElement | null,
	textbox: HTMLElement
): void => {
	const publish = actionElement?.children[1];

	if (actionElement) {
		const alreadyExist = actionElement?.querySelector('.reina-replace');

		if (!alreadyExist) {
			const replace = create({
				type: 'div',
				classPrefix: 'reina',
				classes: ['button', 'replace'],
				before: {},
				childOf: actionElement,
				text: 'Replace',
			});
			console.log(publish);

			replace.addEventListener('click', () => {
				textbox.dispatchEvent(new Event('input'));
			});

			/* if (publish) {
				replace.addEventListener('click', function () {
					publish.dispatchEvent(new Event('click'));
				});
			} */
		}
	}
};

export const unicodifier = (): void => {
	const textboxes = fetchElementAll(
		'.activity-edit > .input > textarea'
	) as NodeListOf<HTMLInputElement> | null;
	const activityActions = fetchElementAll('.activity-edit .actions');
	const totalTextboxes = textboxes ? textboxes.length : null;

	if (textboxes && totalTextboxes && activityActions)
		for (let i = 0; i < totalTextboxes; i += 1) {
			const input = textboxes[i];
			const action = activityActions[i];
			createReplaceAction(action, input);
			if (input.value) {
				textboxes[i].value = replaceEmoji(input);
				textboxes[i].dispatchEvent(new Event('input'));
			}
		}
};

export default unicodifier;
