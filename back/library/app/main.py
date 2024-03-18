import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, RedirectResponse

from api.exceptions.message_exception import MessageException

# --------------------------- Variables ---------------------------
is_dev = True

# -----------------------------------------------------------------

# --------------------------- Main App ----------------------------

app = FastAPI(title="Authentication Service API")


# -----------------------------------------------------------------


# ------------------------- Middlewares ---------------------------
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------------------------------------------

# ------------------------- Include Routers -----------------------


@app.get("/redirect")
async def redirect():
    return RedirectResponse(url="/api/v1/")


@app.get("/api/v1/")
async def api_v1():
    return {"message": "Welcome to Authentication Service API"}


@app.get("/")
async def root():
    return RedirectResponse(url="/redirect")


# -----------------------------------------------------------------

# ------------------------- Exception Handlers --------------------


@app.exception_handler(MessageException)
async def message_exception_handler(request, exc: MessageException):
    return JSONResponse(
        status_code=exc.code,
        content={"name": exc.name, "message": exc.message},
    )


# -----------------------------------------------------------------


# ------------------------- Run Server ----------------------------
if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=is_dev)
# -----------------------------------------------------------------
