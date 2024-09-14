import ProductRow from "./ProductRow";

export default function ProductTable({ products }) {
  return (
    <div className="container mx-auto light:bg-gray-100 dark:bg-base-100 p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Product List</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full light:bg-white shadow-md rounded">
          <thead>
            <tr>
              <th className="py-3 px-6 light:bg-gray-200 text-left text-xs font-medium light:text-gray-700 uppercase tracking-wider">
                Title
              </th>
              <th className="py-3 px-6 light:bg-gray-200 text-left text-xs font-medium light:text-gray-700 uppercase tracking-wider">
                Description
              </th>
              <th className="py-3 px-6 light:bg-gray-200 text-left text-xs font-medium light:text-gray-700 uppercase tracking-wider">
                Price
              </th>
              <th className="py-3 px-6 light:bg-gray-200 text-left text-xs font-medium light:text-gray-700 uppercase tracking-wider">
                Image
              </th>
              <th className="py-3 px-6 light:bg-gray-200 text-left text-xs font-medium light:text-gray-700 uppercase tracking-wider">
                Serial
              </th>
              <th className="py-3 px-6 light:bg-gray-200 text-left text-xs font-medium light:text-gray-700 uppercase tracking-wider">
                Created By
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductRow key={product.serial} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
