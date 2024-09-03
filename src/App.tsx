import { ShoppingCart } from "lucide-react";

import { Outlet, Link } from "react-router-dom";
import { useCart } from "@/context/CartProvider";
export default function App() {
  const { cart } = useCart();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="font-bold text-lg" to="home">
          <span>Acme Inc</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="cart"
          >
            <span className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1.5 -right-2 text-sm font-bold bg-black text-white rounded-full h-4 w-4 flex items-center justify-center">
                {cart.length}
              </span>
            </span>
          </Link>

          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="about"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="shop"
          >
            Shop
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            to="contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <Outlet />
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2023 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
