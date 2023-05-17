import imageUrlBuilder from '@sanity/image-url'
import { getGatsbyImageData } from 'gatsby-source-sanity'
import { sanityClient } from './client'

export const getFluidImage = (image, options = {}) =>
  getGatsbyImageData(image, options, sanityClient)

export const urlFor = (source) => imageUrlBuilder(sanityClient).image(source)
