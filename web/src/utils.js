import imageUrlBuilder from '@sanity/image-url'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import { sanityClient } from './client'

export const getFluidImage = (image, options = {}) =>
  getFluidGatsbyImage(image, options, sanityClient)

export const urlFor = (source) => imageUrlBuilder(sanityClient).image(source)
