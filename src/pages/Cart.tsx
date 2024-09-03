import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import placeholder from "/placeholder.svg";
import { useCart } from "@/context/CartProvider";

export default function CartPage() {
  const { cart } = useCart();
  const totalPrice = cart.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
            Your Cart
          </h1>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  image={placeholder}
                  id={item.id}
                />
              ))}
            </div>
            <div className="space-y-6">
              <div className="border p-4 rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>$10.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>${(totalPrice * 0.15).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>
                      $
                      {totalPrice &&
                        (totalPrice + 10.0 + totalPrice * 0.15).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Input placeholder="Enter coupon code" />
                <Button className="w-full">Apply Coupon</Button>
                <Button className="w-full">Proceed to Checkout</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CartItem({ name, price, quantity, image, id }) {
  const { removeFromCart } = useCart();
  return (
    <div className="flex items-center space-x-4 border p-4 rounded-lg">
      <img
        src={image}
        alt={name}
        width={80}
        height={80}
        className="rounded-md object-cover"
      />
      <div className="flex-1">
        <h3 className="font-semibold">{name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Quantity: {quantity}
        </p>
        <p className="font-semibold">${(price * quantity).toFixed(2)}</p>
      </div>
      <Button variant="outline" size="sm" onClick={() => removeFromCart(id)}>
        Remove
      </Button>
    </div>
  );
}
