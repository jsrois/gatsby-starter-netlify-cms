import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              <div className="tile" style={{marginBottom:'2em'}}>
                    <Link to="/contact"  style={{fontSize: '1.3em'}}>
                      Signa el manifest
                    </Link>
              </div>
              <div className="tile" style={{padding: '1.25em', backgroundColor:'rgb(240, 76, 39)'}}>
                    <p style={{fontSize: '1.3em', color: 'white', textAlign:'center', marginBottom: '1.5em'}}>Ja han signat:</p>
                    <ul style={{color: 'white', marginTop: '2.5em', listStyleType: 'none'}}>
                      <li>Anticapitalistes</li>
                      <li>Arran Fort Pienc</li>
                      <li>Arran Països Catalans</li>
                      <li>Assemblea de la CUP de Terrassa</li>
                      <li>Associació Ateneu Candela</li>
                      <li>Associació Mujeres Pa'lante</li>
                      <li>Ateneu La Base</li>
                      <li>Casa Buenos Aires</li>
                      <li>Casal Popular el Tallaret de la Creu Alta</li>
                      <li>Catalunya En Comú</li>
                      <li>CCOO Barcelonès Nord</li>
                      <li>CGT - Acció Social Metall BCN</li>
                      <li>CGT Catalunya</li>
                      <li>CNT Badalona</li>
                      <li>Col.lectiu Agudells</li>
                      <li>Confederació d'Associacions Veïnals de Catalunya (CONFAVC)</li>
                      <li>CUP - Països Catalans</li>
                      <li>Ecologistes en Acció</li>
                      <li>Espai Antiracista de Salt i Girona</li>
                      <li>Fem Sant Antoni</li>
                      <li>IAC (Intersindical Alternativa de Catalunya)</li>
                      <li>Iaioflautas</li>
                      <li>Joventut Comunista de Catalunya</li>
                      <li>La Bordalla</li>
                      <li>La Caníbal, SCCL</li>
                      <li>La Guerrilla dels Cossos</li>
                      <li>Llibreria Synusia</li>
                      <li>Plataforma Antifeixista de Badalona</li>
                      <li>Podemos Granollers</li>
                      <li>Resistim al Gòtic</li>
                      <li>SEPC - Sindicat d'Estudiants dels Països Catalans</li>
                      <li>Servei Civil Internacional de Catalunya</li>
                      <li>Sindicat d'Habitatge de l'Eixample Dret</li>
                      <li>Sindicat d'Habitatge de Vallcarca</li>
                      <li>Sindicat d'Habitatge del Raval</li>
                      <li>Sindicat de Barri Poble Sec</li>
                      <li>Som VNG</li>
                      <li>Taula de l'Aigua de Terrassa</li>
                    </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
