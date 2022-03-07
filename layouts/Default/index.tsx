import { Footer } from "../../components/Footer"
import { Header } from "../../components/Header"
import * as UI from "./components";

export const DefaultLayout: React.FunctionComponent = (props) => {
  return (
    <UI.Main>
      <Header />
      {props.children}
      <Footer />
    </UI.Main>
  );
}
