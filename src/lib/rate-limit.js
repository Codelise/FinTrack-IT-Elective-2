import { LRUCache } from "lru-cache";

const rateLimitCache = new LRUCache({
  max: 500,
  ttl: 60 * 100,
});

export function rateLimit(identifier, limit = 10) {
  const current = rateLimitCache.get(identifier) || 0;

  if (current >= limit) {
    throw new Error("Rate limit exceeded");
  }

  rateLimitCache.set(identifier, current + 1);
  return current + 1;
}
