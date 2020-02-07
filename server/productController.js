const getProducts = (req, res) => {
  const db = req.app.get("db");
  db.getProducts()
    .then(response => {
      res.status(200).json(response);
    })
    .catch(() => {
      res.status(500).json("Error in getting products");
    });
};
const addProduct = (req, res) => {
  const db = req.app.get("db");
  // const {id}= +req.params;
  const { img, name, price } = req.body;
  db.addProduct(name, price, img).then(response => {
    res.status(200).json(response);
  });
};
const deleteProduct = (req, res) => {
  const db = req.app.get("db");
  const id = +req.params.id;
  db.deleteProduct(id)
    .then((response) => res.sendStatus(200).json(response))
    .catch(() => res.status(500).json("Something happened."));
};
const getProduct = (req, res) => {
  const db = req.app.get("db");
  const id = +req.params.id;
  db.getProduct(id)
    .then(product => res.status(200).json(product))
    .catch(() => res.status(500).json("Something happened."));
};
const updateProduct = (req, res) => {
  const db = req.app.get("db");
  const id = +req.params.id;
  const { name, price, img } = req.body;
  db.updateProduct(name, price, img, id)
    .then((response) => res.sendStatus(200).json(response))
    .catch(() => res.sendStatus(500).json("Something happened."));
};

module.exports = {
  getProduct,
  getProducts,
  addProduct,
  deleteProduct,
  updateProduct
};
