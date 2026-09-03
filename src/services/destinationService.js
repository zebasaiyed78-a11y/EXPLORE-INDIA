import { destinations } from "../data/destinations";
export async function getDestinations() { return destinations; }
export async function getDestinationBySlug(slug) { return destinations.find(d => d.slug === slug); }
