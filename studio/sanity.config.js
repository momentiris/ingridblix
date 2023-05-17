import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import structure from './src/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'ingridblix',

  projectId: 'r641vock',
  dataset: 'ingridblix_dataset',
  plugins: [deskTool(structure), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
