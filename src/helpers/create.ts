interface CreateTypes {
	type: string;
	id?: string;
	classPrefix?: string;
	classes?: string | string[];
	before: {
		node?: HTMLElement;
		referenceNode?: HTMLElement;
	};
	childOf?: HTMLElement | undefined | null;
	text?: string;
	html?: string;
}

/** Creates an HTML element based on destructured parameters.
 *
 * Requires type and must have 'before: {}' (if you're not using it, make it an empty object).
 */
const create = ({
	type,
	id,
	classPrefix,
	classes,
	before: { node, referenceNode },
	childOf,
	text,
	html,
}: CreateTypes): HTMLElement => {
	const element = document.createElement(type);

	if (id) {
		element.id = id;
	}

	if (Array.isArray(classes)) {
		classes.forEach((className: string) => {
			element.classList.add(classPrefix + '-' + className);
		});
	} else if (classes) {
		element.classList.add(classPrefix + '-' + classes);
	}

	if (node) {
		node.insertBefore(element, referenceNode ?? null);
	} else if (childOf) {
		childOf.appendChild(element);
	}

	if (text) {
		element.innerText = text;
	}

	if (html) {
		element.innerHTML = html;
	}

	return element;
};

export default create;
