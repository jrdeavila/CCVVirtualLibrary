from core.application.services.cache_service import CacheService

from redis import Redis


class RedisCacheService(CacheService):
    _cache: Redis

    def __init__(self, cache: Redis) -> None:
        self._cache = cache

    async def get_collection_docs(self, collection_name: str, query: str) -> list[dict]:
        data = self._cache.get(f"{collection_name}:{query}")
        data = eval(data) if data else []
        return data

    async def save_collection_docs(
        self, collection_name: str, docs: list[dict], query: str
    ) -> bool:
        str_data = str(docs)
        return self._cache.set(f"{collection_name}:{query}", str_data, ex=86400)
