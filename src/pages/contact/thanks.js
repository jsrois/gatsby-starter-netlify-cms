import React from "react";
import Layout from "../../components/Layout";

export default () => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <h1>Gràcies!</h1>
          <p>
            Gràcies per signar el manifest. Ens veiem el proper 1 de març al
            carrer!
          </p>
          <p>
            Recorda que la millor manera de defensar els teus drets és{" "}
            <Link to="https://sindicatdellogateres.org">
              unir-te a l'Sindicat de Llogateres!
            </Link>
          </p>
        </div>
      </div>
    </section>
  </Layout>
);
