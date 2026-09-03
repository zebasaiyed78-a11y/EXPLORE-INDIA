export const slugify = text => text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export const scrollToTop = () => window.scrollTo({top:0, behavior:"smooth"});
