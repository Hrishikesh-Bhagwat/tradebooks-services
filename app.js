const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const { API, and, or, cond } = require("space-api");
const api = new API("tradebooks", "https://tradebooksapp.com");
const db = api.DB("postgres");
const cashDelivery = [
  "400001",
  "400002",
  "400003",
  "400004",
  "400005",
  "400006",
  "400007",
  "400008",
  "400009",
  "400010",
  "400011",
  "400012",
  "400013",
  "400014",
  "400015",
  "400016",
  "400017",
  "400018",
  "400019",
  "400020",
  "400021",
  "400022",
  "400024",
  "400025",
  "400026",
  "400027",
  "400028",
  "400029",
  "400030",
  "400031",
  "400032",
  "400033",
  "400034",
  "400035",
  "400037",
  "400043",
  "400049",
  "400050",
  "400051",
  "400052",
  "400053",
  "400054",
  "400055",
  "400056",
  "400057",
  "400058",
  "400059",
  "400063",
  "400066",
  "400067",
  "400069",
  "400070",
  "400071",
  "400074",
  "400075",
  "400077",
  "400080",
  "400084",
  "400085",
  "400086",
  "400088",
  "400089",
  "400093",
  "400094",
  "400098",
  "400099",
  "400101",
  "400102",
  "400104",
];
const mainDelivery = [
  "400001",
  "400002",
  "400003",
  "400004",
  "400005",
  "400006",
  "400007",
  "400008",
  "400009",
  "400010",
  "400011",
  "400012",
  "400013",
  "400014",
  "400015",
  "400016",
  "400017",
  "400018",
  "400019",
  "400020",
  "400021",
  "400022",
  "400024",
  "400025",
  "400026",
  "400027",
  "400028",
  "400029",
  "400030",
  "400031",
  "400032",
  "400033",
  "400034",
  "400035",
  "400037",
  "400043",
  "400049",
  "400050",
  "400051",
  "400052",
  "400053",
  "400054",
  "400055",
  "400056",
  "400057",
  "400058",
  "400059",
  "400063",
  "400066",
  "400067",
  "400069",
  "400070",
  "400071",
  "400074",
  "400075",
  "400077",
  "400080",
  "400084",
  "400085",
  "400086",
  "400088",
  "400089",
  "400093",
  "400094",
  "400098",
  "400099",
  "400101",
  "400102",
  "400104",
];

app.post("/profile-service", (req, res) => {
  var is_sell = false;
  var is_cash = false;
  if (cashDelivery.includes(req.body.pin)) {
    is_cash = true;
  }
  if (mainDelivery.includes(req.body.pin)) {
    is_sell = true;
  }
  api.setToken(req.body.token);
  db.upsert("users")
    .where(cond("uid", "==", req.body.uid))
    .set({
      uid: req.body.uid,
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      line1: req.body.line1,
      line2: req.body.line2,
      line3: req.body.line3,
      pin: req.body.pin,
      is_sell: is_sell,
      is_cash: is_cash,
    })
    .apply()
    .then((response) => {
      api.setToken(null);
      if (response.status == 200) {
        return res.send({
          status: "success",
          message: "User profile updated!",
        });
      } else {
        return res.send({
          status: "failure",
          message: `User profile update failed ${response.status}`,
        });
      }
    })
    .catch((e) => {
      api.setToken(null);
      return res.send({
        status: "failure",
        message: `User profile update failed ${e}`,
      });
    });
});

app.get("/feedback", (req, res) => {
  return res.send("<h1>Feedback</h1>");
});

app.get("/about", (req, res) => {
  return res.send("<h1>About</h1>");
});

app.post("/make-quote", (req, res) => {
  var type = req.body.type;
  var price = req.body.price;
  var quantity = req.body.quantity;
  var uid = req.body.user_id;
  var product_id = req.body.id;
  try {
  } catch (e) {
    return res.json(
      {
        "status":"failure",
        "message":`An error occurred ${e}`
      }
    )
  }
});

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
});
