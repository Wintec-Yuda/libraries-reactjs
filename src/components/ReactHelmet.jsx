import React from 'react';
import { Helmet } from 'react-helmet';

const ReactHelmet = () => {
  return (
    <div className="container mx-auto p-6">
      {/* Menambahkan tag head menggunakan React Helmet */}
      <Helmet>
        <title>Halaman Login - My Application</title>
        <meta name="description" content="Halaman login untuk mengakses aplikasi My Application." />
        <meta name="keywords" content="login, authentication, aplikasi, React" />
        <meta property="og:title" content="Halaman Login - My Application" />
        <meta property="og:description" content="Halaman login untuk mengakses aplikasi My Application." />
      </Helmet>

      <h1 className="text-3xl font-semibold text-center mb-6">Selamat datang di Aplikasi Kami!</h1>
      <p className="text-lg text-center">Silakan login untuk melanjutkan.</p>
    </div>
  );
};

export default ReactHelmet;
