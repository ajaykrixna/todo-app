from fastapi import FastAPI

from app.database import Base, engine
from app.models import todo
from app.routers.todo import router

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.include_router(router)


@app.get("/")
def root():
    return {"message": "Todo Backend API is running!"}