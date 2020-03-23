// src/pages/index.js
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import 'minireset.css';

export default ({ data }) => (
  <Layout title={data.site.siteMetadata.title}>
    <p style={{ marginTop: "20px" }}>
      {data.site.siteMetadata.description}
    </p>
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
