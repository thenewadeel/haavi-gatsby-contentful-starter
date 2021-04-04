import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import styles from './blog.module.css'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'
import Profile from '../components/profile'
import Skills from '../components/skills'
import Team from '../components/team'

class Services extends React.Component {
  render() {
    // const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    // const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <h2 className="section-headline">Services</h2>
          <h3> Interior Design Services </h3>
          <p>
            Haavi offers customized services in luxurious interiors for home
            living spaces. The many Residential Interior Design services offered
            by Design Arc Interiors include Living Room Designs, Kitchen Design,
            Bathroom Design, Bedroom Design, Dining Room Design, Residential
            Indoor and Outdoor Design, Kids Room Design, Gym Design as well as
            Stairway Design. These design services offered by Design Arc
            Interiors are both inclusive and exclusive in nature. Their services
            are both contemporary as well as traditional in nature and are
            customized to the client's need. Design Arc Interior covers all
            aspects of interior designing of living and commercial spaces.
            Covering all aspects of interior build-in spaces and environments,
            Design Arc Interiors is a revered interior decor and interior
            designing company offering bespoke services to clients in Bangalore
            and other cities. The teams at Design Arc Interior consists of
            highly experienced and knowledgeable interior designing
            professionals who are skilled in designing bespoke living and
            commercial interior spaces. DAI's bespoke services in interior
            designing is dynamic in nature, customized to the specific
            requirements and needs of the client, along with thoughtful
            considerable to their personal choice.
          </p>
          <p>
            Creating highly functional yet beautiful living interiors, Design
            Arc Interiors offer an array of exclusive services to its clients in
            Bangalore and other cities. Their service offering is divided into
            three basic classifications:
          </p>
          <ul>
            <li>RESIDENTIAL INTERIOR DESIGN</li>
            <li>COMMERCIAL INTERIOR DESIGN</li>
            <li>3D VISUALIZATION</li>
          </ul>
          <h3>SERVICES</h3>
          <p>
            Creating impressively designed Commercial Interior Spaces, Design
            Arc Interiors offer various interior-designing services meant for
            commercial use. Some of our specialized offerings include Retail
            Interiors Design, Hospitality and Recreation Interior Design, Office
            or workplace Interior design and Hospital and medical office
            interior design. Design Arc Interiors are a team of highly skilled
            and professional group of Interior design specialist and Interior
            decorators who are well-versed in providing the most function,
            productive and highly impressive interior designs to commercial
            spaces, with offices in Bangalore and other cities.
          </p>
          <p>
            Along with customized Residential and Commercial Interior space
            design for their esteemed clientele, Design Arc Interiors also has a
            prolific team of 3D visualization providers who provide highly
            flexible, accessible and affordable 3D visualization services to
            clients in Bangalore and other cities.
          </p>
          <p>
            Our ethos is always to deliver inspirational interiors for the way
            the client wants to live. Understanding and interpreting our
            clients' aesthetic and lifestyle needs is an essential part of our
            skill set, in order that the design reflects their personality and
            responds to their individual lifestyle, tastes and aspirations. We
            pride ourselves on designing practical solutions for whatever the
            project requires.
          </p>

          {/* <Helmet title={siteTitle} />
          <div className={styles.hero}>Blog</div>
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>
          </div> */}
        </div>
      </Layout>
    )
  }
}

export default Services

// export const pageQuery = graphql`
//   query BlogIndexQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
//       edges {
//         node {
//           title
//           slug
//           publishDate(formatString: "MMMM Do, YYYY")
//           tags
//           heroImage {
//             fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//           description {
//             childMarkdownRemark {
//               html
//             }
//           }
//         }
//       }
//     }
//   }
// `
