import "./App.css";
import Layout from "./components/layout";
import Footer from "./components/footer";
import Content from "./components/content";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Layout>
        <Content />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
