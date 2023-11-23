import React from "react";

const page = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex min-h-screen justify-center">
        <div className="flex flex-col">
          <div className="text-center text-3xl font-bold text-gray-800">
            About Page
          </div>
          <div>
            <h1>Tentang Website Monitoring Piutang</h1>
            <p>
              Website ini adalah sebuah sistem informasi yang dikembangkan untuk
              PT Tigaraksa Satria cabang Medan, sebuah perusahaan distribusi
              penyedia perlengkapan rumah tangga di Indonesia[^1^][1]. Website
              ini dirancang untuk membantu perusahaan dalam mengelola dan
              memantau piutang nasabah secara efektif dan efisien.
            </p>
            <p>Website ini memiliki beberapa fitur utama, yaitu:</p>
            <ul>
              <li>
                Input data piutang nasabah, termasuk jumlah, jatuh tempo, dan
                status pembayaran.
              </li>
              <li>
                Lihat data piutang nasabah, termasuk filter, sortir, dan
                pencarian berdasarkan kriteria tertentu.
              </li>
              <li>
                Kirim email penagihan ke nasabah yang memiliki piutang yang
                belum lunas atau mendekati jatuh tempo.
              </li>
              <li>
                Generate laporan piutang nasabah, termasuk grafik, tabel, dan
                statistik.
              </li>
              <li>
                Notifikasi piutang nasabah, termasuk alert, reminder, dan
                warning.
              </li>
            </ul>
            <p>
              Website ini dibangun dengan menggunakan framework Laravel dan
              bahasa pemrograman PHP dan JavaScript. Website ini juga
              menggunakan database MySQL untuk menyimpan data piutang nasabah.
            </p>
            <p>
              Website ini diharapkan dapat memberikan manfaat bagi perusahaan
              dalam meningkatkan kinerja dan efisiensi dalam mengelola piutang
              nasabah, serta mengurangi risiko piutang macet atau tidak
              tertagih.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
