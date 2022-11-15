import uvicorn
from fastapi import FastAPI

app = FastAPI()

d={}

file = open("PLZO_CSV_LV95.csv", encoding="utf-8")
next(file)

for line in file:
    daten = line.strip().split(";")
    ort = daten[0]
    zip = daten[1]
    zusatzziffer = daten[2]
    gmdnamen = daten[3]
    bfs = daten[4]
    kanton = daten[5]
    east = daten[6]
    north = daten[7]

    d[gmdnamen]= {"Ort": ort,
    "PLZ":zip,
    "Zusatzziffer":zusatzziffer,
    "Gemeinde":gmdnamen,
    "BFS-NR": bfs,
    "Kanton":kanton,
    "East": east,
    "North": north,
    }



file.close()

@app.get("/")
async def root(gemeinde: str):
        return d[gemeinde]





uvicorn.run(app, host="127.0.0.1", port=8000)