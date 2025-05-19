import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';

export default function Layout() {
  useEffect(() => {
    // Initialize Tawk.to chat widget
    var Tawk_API = window.Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function(){
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/YOUR_TAWK_ID/default';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
