from core.application.exceptions.message_exception import ResourceNotFound
from core.domain.entities.category import Category
from core.domain.repositories.category_repo import CategoryRepo
from core.domain.services.category_service import CategoryService


class CategoryServiceImpl(CategoryService):
    _category_repo: CategoryRepo

    def __init__(self, category_repo: CategoryRepo) -> None:
        self._category_repo = category_repo

    async def get_categories(self) -> list[Category]:
        return await self._category_repo.get_categories()

    async def get_category(self, category_id: int) -> Category:
        category = await self._category_repo.get_category(category_id)
        if not category:
            raise ResourceNotFound(message="Category Not Found")

        return category
