import Image from "next/image";
import Login from "./ui/Login/Login";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto max-w-7xl md:mt-24">
      <div className="container px-4 mx-auto">
        <div className="md:flex md:flex-row md:item-center">
          <div className="basis-2/3 lg:pr-48 md:pr-20">
            <Image
              src="/img/logo.webp"
              alt="LogoPerusahaan"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
            <h1 className="mt-8 text-3xl font-bold text-gray-800">
              SISTEM INFORMASI MONITORING TAGIHAN PIUTANG KE CUSTOMER KEY
              ACCOUNT MODERN
            </h1>
            <p className="mt-8 text-gray-500">
              Dapatkan informasi terkini tentang status piutang, termasuk
              tanggal jatuh tempo, jumlah tagihan, dan status pembayaran
            </p>
          </div>
          <div className="px-2 mt-12 basis-1/3 sm:px-16 md:px-0">
            <div className="mt-4 text-2xl font-bold text-center text-gray-800 lg:hidden">
              Login
            </div>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
