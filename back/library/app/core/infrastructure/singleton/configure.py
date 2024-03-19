from sqlalchemy import Engine
from core.application.services.category_service import CategoryServiceImpl
from core.domain.repositories.category_repo import CategoryRepo
from core.domain.services.category_service import CategoryService
from core.infrastructure.mysql.engine import get_mysql_engine
from core.infrastructure.mysql.repositories.mysql_category_repo import MySQLCategoryRepo
from core.infrastructure.singleton.container import SingletonContainer


async def configure_singleton():
    SingletonContainer.register(Engine, get_mysql_engine())
    SingletonContainer.register(
        CategoryRepo, MySQLCategoryRepo(SingletonContainer.resolve(Engine))
    )
    SingletonContainer.register(
        CategoryService, CategoryServiceImpl(SingletonContainer.resolve(CategoryRepo))
    )
    print("Singletons configured")
