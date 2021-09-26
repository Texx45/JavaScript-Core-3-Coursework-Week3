let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function createOrder(array) {
  console.log("QTY  ITEM   TOTAL");
  total = 0;

  array.map((item) => {
    let { itemName, quantity, unitPrice } = item;
    console.log(
      quantity,
      itemName,
      Number(totalItems(quantity, unitPrice).toFixed(2))
    );
    total += Number(totalItems(quantity, unitPrice).toFixed(2));
  });
  console.log(total);
}

createOrder(order);

function totalItems(amount, costPerItem) {
  return amount * costPerItem;
}
