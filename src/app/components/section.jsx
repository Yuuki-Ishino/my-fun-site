import Button from "./Button";
import Image from "next/image";

export default function Section({ title, description, image, link, linkText }) {
  return (
    <div className="max-w-2xl pt-5 mx-auto mb-16">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="mb-8">
          <h2 className="text-3xl text-white font-semibold mb-4">{title}</h2>
          {image && (
            <div className="w-full h-60 rounded-lg overflow-hidden mb-4 relative">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
          )}
          <p className="text-lg text-gray-200 whitespace-pre-line">
            {description}
          </p>
          {link && (
            <div className="flex justify-center py-10">
              <Button href={link} className="mx-auto">
                {linkText}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
