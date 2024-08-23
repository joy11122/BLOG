
import "./globals.css";
import "/public/bootstrap.min.css";

import Navbar from "@/Component/Navbar";
import Footer from "@/Component/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container-fluid">
          <div className="wrapper">
          <Navbar/>
            {children}
<Footer/>
          </div>
        </div>
      </body>
    </html>
  );
}
