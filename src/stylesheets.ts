import { ALWAYS } from 'userscripter/lib/environment';
import { Stylesheets, stylesheet } from 'userscripter/lib/stylesheets';

const STYLESHEETS = {
	main: stylesheet({
		condition: ALWAYS,
		css: `
            .reina-button {
                align-items: center;
                background: rgb(var(--color-blue));
                border-radius: 4px;
                color: rgb(var(--color-text-bright));
                cursor: pointer;
                display: inline-flex;
                font-family: Overpass,-apple-system,BlinkMacSystemFont,Segoe UI,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
                font-size: 1.3rem;
                font-weight: 900;
                margin-left: 18px;
                padding: 10px 15px;
                transition: .2s;
            }

            .reina-button.reina-replace {
                background: rgb(var(--color-green));
            }
        `,
	}),
} as const;

// This trick uncovers type errors in STYLESHEETS while retaining the static knowledge of its properties (so we can still write e.g. STYLESHEETS.foo):
const _: Stylesheets = STYLESHEETS;
void _;

export default STYLESHEETS;
