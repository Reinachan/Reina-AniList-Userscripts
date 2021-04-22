import create from '~src/helpers/create';
import { fetchElement, fetchElementAll } from '~src/helpers/fetchElement';
import replaceEmoji from '~src/helpers/replaceEmoji';
import _ from 'lodash';

type ElementType = HTMLElement | null | undefined;

// FIXME: If there was cached text, this somehow won't work on that element. createReplaceAction fails.
// TODO: Refactor and improve readability

const createReplaceAction = (i: number): void => {
	// Root element that the other selectors are based on
	const activityEditor = fetchElement(`#reina-activity-editor${i}`);

	// cancel/send/post
	const actionElement = activityEditor?.querySelector(
		'.actions'
	) as ElementType;

	// input textarea
	const textbox = activityEditor?.querySelector(
		'.el-textarea__inner'
	) as HTMLInputElement;

	// send/publish and send private buttons
	const sendBttn: ElementType = actionElement?.querySelector('.button.save');
	const sendPrivateBttn: ElementType = actionElement?.querySelector(
		'.el-tooltip.button.save'
	);

	if (actionElement) {
		// Not running it again if it already exist. No need to rerender just to rerender.
		const alreadyExist = actionElement?.querySelector('.reina-replace');
		if (!alreadyExist) {
			if (sendBttn) {
				sendBttn.style.display = 'none';
			}
			if (sendPrivateBttn) {
				sendPrivateBttn.style.display = 'none';
			}

			const replaceBttn = create({
				type: 'div',
				classPrefix: 'reina',
				classes: ['button', 'replace'],
				before: {},
				childOf: actionElement,
				text: 'Send 📮',
			});

			replaceBttn.addEventListener('click', () => {
				replaceEmoji(textbox);
				textbox.dispatchEvent(new Event('input'));
				_.delay(() => sendBttn?.dispatchEvent(new Event('click')), 100, 'sent');
			});

			if (sendPrivateBttn) {
				const replacePrivateBttn = create({
					type: 'div',
					classPrefix: 'reina',
					classes: ['button', 'replace', 'private'],
					before: {},
					childOf: actionElement,
					text: 'Send Private 🔏',
				});

				replacePrivateBttn.addEventListener('click', () => {
					replaceEmoji(textbox);
					textbox.dispatchEvent(new Event('input'));
					_.delay(
						() => sendPrivateBttn?.dispatchEvent(new Event('click')),
						10,
						'sent'
					);
				});
			}
		}
	}
};

export const unicodifier = (): void => {
	const activityEditors = fetchElementAll('.activity-edit');

	activityEditors?.forEach((editor: HTMLElement, i) => {
		editor.removeAttribute('id');
		editor.setAttribute('id', 'reina-activity-editor' + i);

		createReplaceAction(i);
	});
};

export default unicodifier;
