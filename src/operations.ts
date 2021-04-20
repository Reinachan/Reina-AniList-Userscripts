import { log } from 'userscripter';
import { ALWAYS, DOMCONTENTLOADED } from 'userscripter/lib/environment';
import { Operation, operation } from 'userscripter/lib/operations';
import * as SITE from '~src/site';
import { fetchElement } from './helpers/fetchElement';
import unicodifier from './modules/unicodifier';

const OPERATIONS: ReadonlyArray<Operation<any>> = [
	operation({
		description: 'Test',
		condition: ALWAYS,
		/* dependencies: { activityActions: SITE.SELECTOR_ACTIVITY_ACTIONS }, */
		action: () => {
			document.body.addEventListener('click', function () {
				if (fetchElement('.activity-edit .actions')) {
					unicodifier();
					log.log('fired');
				}
			});
		},
		deferUntil: DOMCONTENTLOADED,
	}),
];

export default OPERATIONS;
