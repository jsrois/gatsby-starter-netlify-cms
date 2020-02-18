import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              'rgb(240, 76, 39) 0.5rem 0px 0px, rgb(240, 76, 39) -0.5rem 0px 0px',
            backgroundColor: 'rgb(240, 76, 39)',
            color: 'white',
            lineHeight: '1',
            textAlign: 'center',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              'rgb(240, 76, 39) 0.5rem 0px 0px, rgb(240, 76, 39) -0.5rem 0px 0px',
            backgroundColor: 'rgb(240, 76, 39)',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title">{mainpitch.title}</h1>
                  </div>
                  <div className="tile" style={{marginBottom:'2em'}}>
                    <p>{mainpitch.description}</p>
                  </div>
                  <div className="tile" style={{marginBottom:'2em'}}>
                    <Link to="/about"  style={{width:"100%", textAlign:"right", fontSize: '1.3em'}}>
                      Llegeix el manifest
                      </Link>
                  </div>
                  {/* <div className="tile" style={{padding: '1.25em', backgroundColor:'rgb(240, 76, 39)'}}>
                    <h3 style={{color: 'white', textAlign:'center', marginBottom: '1.5em'}}>Ja han signat:</h3>
                    <ul style={{color: 'white', marginTop: '2em', listStyleType: 'none'}}>
                      <li>Associació Mujeres Pa'lante</li>
                      <li>Servei Civil Internacional de Catalunya</li>
                      <li>Ecologistes en Acció de Catalunya</li>
                      <li>CCOO Barcelonès Nord</li>
                      <li>Casal Popular el Tallaretde la Creu Alta</li>
                      <li>Assemblea d la cup d Terrassa </li>
                      <li>La Bordalla</li>
                      <li>Associació Ateneu Candela </li>
                      <li>Iaioflautas</li>
                      <li>Catalunya En Comú</li>
                      <li>Anticapitalistes</li>
                      <li>Casal Popular el Tallaretde la Creu Alta</li>
                    </ul>
                  </div> */}
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
