type ElementType = (query: string) => HTMLElement | null;

type ElementAllType = (query: string) => NodeListOf<HTMLElement> | null;

export const fetchElement: ElementType = (query: string) => {
	return document.querySelector(query);
};

export const fetchElementAll: ElementAllType = (query: string) => {
	return document.querySelectorAll(query);
};
