const express = require("express");
const mercadopago = require("mercadopago");

const app = express();

app.use("/payment", async (req, res) => {
  mercadopago.configurations.setAccessToken(config.access_token);

  var payment_data = {
    transaction_amount: 169,
    token: "your-token-here",
    description: "Aerodynamic Copper Plate",
    installments: 1,
    payment_method_id: "visa",
    payer: {
      email: "galhardo@teste.com"
    }
  };

  mercadopago.payment
    .save(payment_data)
    .then(data => console.log(data))
    .catch(err => console.log(err));
});

app.listen(3000, () => console.log("running!!!"));
