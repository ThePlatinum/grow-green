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
    </div>
  )
}

export default AppLayout