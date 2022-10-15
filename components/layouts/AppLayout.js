import Head from "next/head";
import Footer from "../footer.jsx";
import Header from "../header.jsx";

const AppLayout = ({ children, title }) => {
  return (
    <div>
      <Head> <title>{title ?? 'Grow Green'}</title> </Head>
      <Header />
      {children}
      <Footer />
      <button id="back-to-top" className="btn btn-light btn-lg back-to-top" role="button">
        <i className="bi bi-arrow-up"></i>
      </button>
    </div>
  )
}

export default AppLayout