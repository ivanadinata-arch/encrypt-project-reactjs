import React from "react";

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center mt-32 space-y-4'>
      {/* <img alt="error-state" className="w-32 h-32" /> */}
      <p className='text-2xl font-bold'>ERROR CODE 404</p>
      <p className='text-xl font-semibold'>
        Maaf, Halaman tidak dapat kami temukan !
      </p>
      <p className=''>
        Silahkan hubungi adminsitrator pada kontak yang tersedia atau buka
        halaman lainnya
      </p>
    </div>
  );
};
export default NotFound;
