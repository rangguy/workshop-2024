import Head from "next/head";
import Navbar from "../../components/Navbar";
import ProductTable from "@/components/ProductTable";
import { useAuth } from "@/auth/AuthProvider";

const products = [
  {
    title: "Product 1",
    description: "This is a great product.",
    price: "$29.99",
    image: "https://via.placeholder.com/50",
    serial: "123456789",
    createdBy: "John Doe",
  },
  {
    title: "Product 2",
    description: "Another amazing product.",
    price: "$39.99",
    image: "https://via.placeholder.com/50",
    serial: "987654321",
    createdBy: "Jane Smith",
  },
];

export default function Produk() {
  const auth = useAuth();

  return (
    <>
      <Head>
        <title>Produk</title>
      </Head>
      <Navbar />
      <div>
        <ProductTable products={products} />
      </div>
    </>
  );
}
