import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { graphql } from "gatsby"
 
import { useStoryblokState } from "gatsby-source-storyblok"


const IndexPage = ({data}) => {
  console.log(data);
  let story = data.storyblokEntry
  // story = useStoryblokState(story)
  return (<Layout>
    <div>
      Hello
      <h1>{story.name}</h1>
    </div>
  </Layout>)
}

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: { eq: "home" }) {
      content
      name
      full_slug
      uuid
      id
      internalId
    }
  }
`