const fs = require("fs");
const { nextTick } = require("process");

class Controllers {
  constructor(name) {
    this.name = name;
  }

  save(obj) {
    try {
      const content = fs.readFileSync(this.name);
      const content_parsed = JSON.parse(content);

      obj["id"] = content_parsed[content_parsed.length - 1].id + 1;
      fs.writeFileSync(
        `${this.name}`,
        JSON.stringify([...content_parsed, obj])
      );
    } catch (err) {
      fs.writeFileSync("../productsData/products.json", JSON.stringify([{ ...obj, id: 0 }]));
    }
  }

  getById(id) {
    try {
      const products = fs.readFileSync("../productsData/products.json");
      return products.find((product) => id === product.id);
    } catch (error) {
      console.log(error);
    }
  }

  getAll() {
    try {
      const content = fs.readFileSync(this.name);
      return JSON.parse(content);
    } catch (error) {
      console.log("No se pudo leer el archivo.");
    }
  }

  update() {
      try {
          const {id}=req.params
          const {title,price,thumbnail}= req.body
        return next()
        } catch(error){ 
      }
     }

  deleteById(id) {
    try {
      const products = this.getAll();
      let index = products.find((product) => id === product.id);
      products.splice(index, 1);
      return products;
    } catch (error) {
      console.log(error);
    }
  }

  deleteAll() {
    fs.writeFileSync("../productsData/products.json", "");
  }
}
module.exports = Controllers;
