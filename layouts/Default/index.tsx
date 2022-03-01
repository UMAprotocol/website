import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import SeoHead from "../../components/SeoHead"

export const DefaultLayout: React.FunctionComponent = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
