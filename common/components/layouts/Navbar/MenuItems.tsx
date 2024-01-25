import Link from "next/link";

export default function MenuItems() {
  return (
    <div className="flex items-center">
      <ul className="flex gap-5 items-center text-white">
        <li>
          <Link href={"#tentang"} aria-label="Tentang">
            Tentang
          </Link>
        </li>
        <li>
          <Link href={"#fasilitas"} aria-label="Fasilitas">
            Fasilitas
          </Link>
        </li>
        <li>
          <Link href={"#pelayanan"} aria-label="Pelayanan">
            Pelayanan
          </Link>
        </li>

        <li>
          <Link href={"#kontak"} aria-label="Kontak">
            Kontak
          </Link>
        </li>
      </ul>
    </div>
  );
}
