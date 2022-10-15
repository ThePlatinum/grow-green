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
      <btn id="back-to-top" class="btn btn-light btn-lg back-to-top" role="button">
        <i class="bi bi-arrow-up"></i>
      </btn>
    </div>
  )
}

export default AppLayout