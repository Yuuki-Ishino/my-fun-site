import Image from "next/image";

export default function TeamCard({ name, subname, role, image, description }) {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-lg transition">
      <div className="w-full h-60 rounded-lg overflow-hidden  mb-4 relative">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>
      <p className="text-sm text-gray-600">{subname}</p>
      <div className="flex items-center gap-2">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="text-sm pl-4 text-gray-600">{role}</p>
      </div>
      <p className="text-gray-700 mt-4">{description}</p>
    </div>
  );
}
