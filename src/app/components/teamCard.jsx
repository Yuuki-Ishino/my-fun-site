import Image from "next/image";
import Link from "next/link";

export default function TeamCard({ name, subname, color, birth, brood, favo, nfavo, image, description, }) {
  return (
    <Link href={`/members/${subname}`}>
      <div className="transition cursor-pointer">
        <div className="w-full aspect-[3/4.5] overflow-hidden mb-2 relative">
          <Image src={image} alt={name} fill className="object-contain"/>
        </div>
      </div>
    </Link>
  );
}
