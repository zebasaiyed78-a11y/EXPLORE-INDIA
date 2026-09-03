import {useState} from "react";
import {getWishlist, toggleWishlist} from "../services/wishlistService";
export function useWishlist() {
  const [wishlist, setWishlist] = useState(getWishlist());
  const toggle = id => setWishlist(toggleWishlist(id));
  return {wishlist, toggle};
}
