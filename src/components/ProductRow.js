export default function ProductRow({ product }) {
  return (
    <tr className="light:bg-gray-50">
      <td className="py-4 px-6 border-b light:border-gray-200 text-sm">
        {product.title}
      </td>
      <td className="py-4 px-6 border-b light:border-gray-200 text-sm">
        {product.description}
      </td>
      <td className="py-4 px-6 border-b light:border-gray-200 text-sm">
        {product.price}
      </td>
      <td className="py-4 px-6 border-b light:border-gray-200 text-sm">
        <img src={product.image} alt="Product Image" className="w-12 h-12" />
      </td>
      <td className="py-4 px-6 border-b light:border-gray-200 text-sm">
        {product.serial}
      </td>
      <td className="py-4 px-6 border-b light:border-gray-200 text-sm">
        {product.createdBy}
      </td>
    </tr>
  );
}
