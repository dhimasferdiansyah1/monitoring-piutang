import Image from "next/image";
import Login from "./ui/Login/Login";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl md:mt-24 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="md:flex md:flex-row md:item-center">
          <div className="basis-2/3 lg:pr-48 md:pr-20">
            <Image
              src="/img/logo.png"
              alt="LogoPerusahaan"
              width={200}
              height={200}
              className="w-auto h-auto"
            />
            <h1 className="text-3xl font-bold text-gray-800 mt-8">
              SISTEM INFORMASI MONITORING TAGIHAN PIUTANG KE CUSTOMER KEY
              ACCOUNT MODERN
            </h1>
            <p className="text-gray-500 mt-8">
              Dapatkan informasi terkini tentang status piutang, termasuk
              tanggal jatuh tempo, jumlah tagihan, dan status pembayaran
            </p>
          </div>
          <div className="basis-1/3 mt-12 sm:px-36 px-8 md:px-0">
            <div className="text-center mt-4 font-bold text-2xl text-gray-800 lg:hidden">
              Login
            </div>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}
