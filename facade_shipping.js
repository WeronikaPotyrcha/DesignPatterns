// Fasada
class ShippingFacade {
    constructor(address) {
      this.shipping = new Shipping();
      this.address = address;
    }
  
    shipProduct(product) {
      if (product.inStock) {
        const shippingCost = this.shipping.calculateCost(this.address);
        console.log(`Shipping product ${product.name} to ${this.address}, cost: ${shippingCost}`);
      } else {
        console.log(`Product ${product.name} is out of stock`);
      }
    }
  }
  
  // Subsystem
  class Shipping {
    calculateCost(address) {
      // some shipping cost calculation logic
      return 10;
    }
  }
  
  // Klient
  const address = '123 Main St, Anytown USA';
  const product = {
    name: 'Widget',
    inStock: true
  };
  
  const shippingFacade = new ShippingFacade(address);
  shippingFacade.shipProduct(product);