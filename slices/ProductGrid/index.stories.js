import SliceZone from 'vue-slicezone'
import model from './model'
import mocks from './mocks.json'
import Slice from './'

export default {
  title: model.name,
}

// TODO: Update to loop over mocks.json
export const DefaultSlice = () => ({
  components: {
    Slice,
    SliceZone,
  },
  data() {
    return {
      mock: (() => {
        const merged = { ...mocks[0] }
        merged.primary.columns = '2'
        return merged
      })(),
      resolver() {
        return Slice
      },
    }
  },
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver" />',
})

DefaultSlice.storyName = 'Two Column'

export const ThreeColumn = () => ({
  components: {
    Slice,
    SliceZone,
  },
  data() {
    return {
      mock: (() => {
        const merged = { ...mocks[0] }
        merged.primary.columns = '3'
        return merged
      })(),
      resolver() {
        return Slice
      },
    }
  },
  template: '<slice-zone :slices="[ mock ]" :resolver="resolver" />',
})

ThreeColumn.storyName = 'Three Column Layout'
