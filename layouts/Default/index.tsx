import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"

export const DefaultLayout: React.FunctionComponent = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}
