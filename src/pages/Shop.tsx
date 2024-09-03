import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import placeholder from "/placeholder.svg";
import { useState } from "react";
import { products } from "@/constant/constant";
import { useCart } from "@/context/CartProvider";
export default function Shop() {
  const [query, setQuery] = useState("");
  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
            Our Products
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <Input
              className="w-full md:w-64 mb-4 md:mb-0"
              placeholder="Search products..."
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              value={query}
            />
            {/* <Select>
              <SelectTrigger className="w-full md:w-40">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="electronics">Electronics</SelectItem>
                <SelectItem value="clothing">Clothing</SelectItem>
                <SelectItem value="books">Books</SelectItem>
              </SelectContent>
            </Select> */}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products
              .filter((item) => item.name.toLowerCase().includes(query))
              .map((product) =>
                product ? (
                  <ProductCard
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    id={product.id}
                    image={placeholder}
                    key={product.id}
                  />
                ) : (
                  <p>Not found</p>
                )
              )}
          </div>
        </div>
      </section>
    </div>
  );
}

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  id: number;
}

function ProductCard({
  name,
  description,
  price,
  image,
  id,
}: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
      <img
        src={image}
        alt={name}
        width={200}
        height={200}
        className="rounded-lg object-cover"
      />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
        {description}
      </p>
      <p className="text-lg font-semibold">${price.toFixed(2)}</p>
      <Button onClick={() => addToCart({ id, name, price, quantity: 0 })}>
        Add to Cart
      </Button>
    </div>
  );
}
