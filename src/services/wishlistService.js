const KEY = "exploreIndiaWishlist";
export function getWishlist() { return JSON.parse(localStorage.getItem(KEY) || "[]"); }
export function toggleWishlist(id) {
  const current = getWishlist();
  const next = current.includes(id) ? current.filter(x => x !== id) : [...current, id];
  localStorage.setItem(KEY, JSON.stringify(next));
  return next;
}
