import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hi Learn to Design & Code React apps ......!</h1>
    <p>Prototype & Build apps with React & JavaScript</p>
    <p>Now we build something great.</p>
    {/* <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div> */}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout >
)

export default IndexPage
