import React from "react"
import { graphql } from "gatsby"
import { Cards, Hero, SiteMetadata } from "../components"
import { Layout } from "../layouts/Layout"

export default ({ data }) => {
  return (
    <Layout>
      <SiteMetadata
        title="Frikshop"
        description="Productos anunciados en TikTok, instagram | Productos WoW."
        image={data.hero.url}
      />

      <Hero
        image={data.hero}
        tag="#ShoppingFrikShop.com"
        title="FrikShop"
        description="Productos anunciados en TikTok, instagram | Productos WoW."
      />

      <Cards nodes={data.items.nodes} />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery($tableName: String!) {
    hero: file(relativePath: { eq: "hero-travel.jpg" }) {
      ...HeroImageFragment
    }
    items: allAirtable(filter: { table: { eq: $tableName } }) {
      nodes {
        data {
          country
          image {
            ...CardImageFragment
          }
          name
          slug
          summary
        }
      }
    }
  }
`
