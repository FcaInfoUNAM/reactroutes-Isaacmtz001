export default function Card({ title, paragraph, image, model }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <img src={image} alt={model} className="w-full h-40 object-contain mb-4" />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-sm text-gray-700">{paragraph}</p>
    </div>
  );
}
