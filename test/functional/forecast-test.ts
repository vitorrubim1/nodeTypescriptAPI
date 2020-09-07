//entidade mt importante

import supertest from "supertest";

describe("Beach forecast functional tests", () => {//describe(): descrevendo o teste, esse é o mais high level
  
  it("should return a forecast with just a few times", async () => {
    const { body, status } = await supertest(app).get("/forecast"); //pegando o status e o body do app, da rota /forecast
    expect(status).toBe(200); //espero q o status seja 200
    expect(body).toBe([{ //retorna a previsão/forecast pro front
      "time": "2020-04-26T00:00:00+00:00",
      "forecast": [{
        "lat": -33.792726,
        "lng": 151.289824,
        "name": "Manly",
        "position": "E",
        "rating": 2,
        "swellDirection": 64.26,
        "swellHeight": 0.15,
        "swellPeriod": 3.89,
        "time": "2020-04-26T00:00:00+00:00",
        "waveDirection": 231.38,
        "waveHeight": 0.47,
        "windDirection": 299.45
      }]
    }, {
      "time": "2020-04-26T01:00:00+00:00",
      "forecast": [{
        "lat": -33.792726,
        "lng": 151.289824,
        "name": "Manly",
        "position": "E",
        "rating": 2,
        "swellDirection": 123.41,
        "swellHeight": 0.21,
        "swellPeriod": 3.67,
        "time": "2020-04-26T01:00:00+00:00",
        "waveDirection": 232.12,
        "waveHeight": 0.46,
        "windDirection": 310.48
      }] }
    ]);
  });
});