import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { topSection } from './top'
import { blogs } from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, topSection, blogs],
}
