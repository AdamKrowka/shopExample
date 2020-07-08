const tepmProduct = {
  id: 1,
  product_name: "Turkey - Breast, Bone - In",
  short_description:
    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  description:
    "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
  image: "http://dummyimage.com/400x500.jpg/cc0000/ffffff",
  price: "$183.20",
  company: "Browseblab",
};

const product = (state = tepmProduct, { type, newProduct }) => {
  switch (type) {
    case "change_product":
      return newProduct;
    default:
      return state;
  }
};

export default product;
