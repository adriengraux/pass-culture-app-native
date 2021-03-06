import React from 'react'
import { QueryClient } from 'react-query'

import { offerResponseSnap } from 'features/offer/api/snaps/offerResponseSnap'
import { reactQueryProviderHOC } from 'tests/reactQueryProviderHOC'
import { act, render } from 'tests/utils'

import { OfferPartialDescription } from '../OfferPartialDescription'

const defaultDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua: https://google.com'
const offerId = 123
type Setup = (queryClient: QueryClient) => void
const defaultSetup: Setup = (queryClient) => {
  queryClient.removeQueries()
  queryClient.setQueryData(['offer', offerId], offerResponseSnap)
}
type Params = {
  description?: string
  setup: Setup
}
const defaultParams: Params = {
  description: defaultDescription,
  setup: defaultSetup,
}

describe('OfferPartialDescription', () => {
  it('centers CTA when provided description is empty', () => {
    const { getByTestId } = renderOfferDescription({
      ...defaultParams,
      description: '',
    })
    const offerSeeMoreContainer = getByTestId('offerSeeMoreContainer')
    expect(offerSeeMoreContainer.props.style[0].alignSelf).toBe('center')
  })
  it('places CTA on flex-end when provided a description', () => {
    const { getByTestId } = renderOfferDescription(defaultParams)
    const offerSeeMoreContainer = getByTestId('offerSeeMoreContainer')
    expect(offerSeeMoreContainer.props.style[0].alignSelf).toBe('flex-end')
  })
  it('renders externalLinks if http(s) url are present in the description', () => {
    const { queryByTestId } = renderOfferDescription(defaultParams)
    expect(queryByTestId('externalSiteIcon')).toBeTruthy()
  })
  it("shouldn't render an empty line and a spacer when description is empty", () => {
    const { queryByTestId } = renderOfferDescription({
      ...defaultParams,
      description: undefined,
    })
    expect(queryByTestId('offerPartialDescriptionBody')).toBeFalsy()
  })
  describe('SeeMore button', () => {
    const setupWithNoDataInDescriptionPage: Setup = (queryClient) => {
      queryClient.setQueryData(['offer', offerId], {
        ...offerResponseSnap,
        image: {},
        extraData: {},
      })
    }
    const setupWithImage = (queryClient: QueryClient): void => {
      queryClient.setQueryData(['offer', offerId], {
        image: offerResponseSnap.image,
        extraData: {},
      })
    }

    it('should be rendered when there is some content on the description page', () => {
      const { queryByTestId } = renderOfferDescription(defaultParams)
      expect(queryByTestId('offerSeeMoreContainer')).toBeTruthy()
    })
    describe('should be rendered', () => {
      it('when the description is ellipsed', () => {
        const lines = [
          { text: "Ce n'est pas le besoin d'argent o?? les " },
          { text: 'vieillards peuvent appr??hender de tomber ' },
          { text: 'un jour qui les rend avares, car il y en a de ' },
          { text: "tels qui ont de si grands fonds, qu'ils ne " },
          { text: 'peuvent gu??re avoir cette inqui??tude : et ' },
          { text: "d'ailleurs comment pourraient-ils craindre " },
          { text: 'de manquer dans leur caducit?? des ' },
          {
            text: "commodit??s de la vie, puisqu'ils s'en privent eux-m??mes volontairement pour satisfaire ?? leur avarice ?",
          },
        ]
        const description = lines.map(({ text }) => text).join(' ')
        const { getByTestId, queryByTestId } = renderOfferDescription({
          ...defaultParams,
          description,
          setup: (queryClient) => {
            queryClient.setQueryData(['offer', offerId], {
              image: {},
              extraData: {},
            })
          },
        })
        const descriptionComponent = getByTestId('offerPartialDescriptionBody')

        act(() => {
          descriptionComponent.props.onTextLayout({ nativeEvent: { lines } })
        })

        expect(queryByTestId('offerSeeMoreContainer')).toBeTruthy()
      })
      it('when there is image on the description page', () => {
        const { queryByTestId } = renderOfferDescription({
          ...defaultParams,
          description: undefined,
          setup: setupWithImage,
        })
        expect(queryByTestId('offerSeeMoreContainer')).toBeTruthy()
      })
      it('when there is extraData on the description page', () => {
        const { queryByTestId } = renderOfferDescription({
          ...defaultParams,
          description: undefined,
          setup: (queryClient) => {
            queryClient.setQueryData(['offer', offerId], {
              image: {},
              extraData: { author: 'John Lang' },
            })
          },
        })
        expect(queryByTestId('offerSeeMoreContainer')).toBeTruthy()
      })
      it('when the description is small enough to be fully readable and there is image on the description page', () => {
        const lines = [
          { text: 'Combattant sans risque, vous devez agir ' },
          { text: 'sans pr??caution. En effet, pour vous autres ' },
          { text: 'hommes, les d??faites ne sont que des ' },
          { text: 'succ??s de moins. Dans cette partie si ' },
          { text: 'in??gale, notre fortune est de ne pas perdre, ' },
          { text: 'et votre malheur de ne pas gagner.' },
        ]
        const description = lines.map(({ text }) => text).join(' ')
        const { getByTestId, queryByTestId } = renderOfferDescription({
          ...defaultParams,
          description,
          setup: setupWithImage,
        })
        const descriptionComponent = getByTestId('offerPartialDescriptionBody')

        act(() => {
          descriptionComponent.props.onTextLayout({ nativeEvent: { lines } })
        })

        expect(queryByTestId('offerSeeMoreContainer')).toBeTruthy()
      })
    })
    describe("shouldn't be rendered", () => {
      it('when there is no content on the description page', () => {
        const { queryByTestId } = renderOfferDescription({
          description: undefined,
          setup: setupWithNoDataInDescriptionPage,
        })
        expect(queryByTestId('offerSeeMoreContainer')).toBeFalsy()
      })
      it('when the description is small enough to be fully readable', () => {
        const lines = [
          { text: 'Combattant sans risque, vous devez agir ' },
          { text: 'sans pr??caution. En effet, pour vous autres ' },
          { text: 'hommes, les d??faites ne sont que des ' },
          { text: 'succ??s de moins. Dans cette partie si ' },
          { text: 'in??gale, notre fortune est de ne pas perdre, ' },
          { text: 'et votre malheur de ne pas gagner.' },
        ]
        const description = lines.map(({ text }) => text).join(' ')
        const { getByTestId, queryByTestId } = renderOfferDescription({
          ...defaultParams,
          description,
          setup: setupWithNoDataInDescriptionPage,
        })
        const descriptionComponent = getByTestId('offerPartialDescriptionBody')

        act(() => {
          descriptionComponent.props.onTextLayout({ nativeEvent: { lines } })
        })

        expect(queryByTestId('offerSeeMoreContainer')).toBeFalsy()
      })
    })
  })
})

const renderOfferDescription = ({ description, setup }: Params) => {
  const wrapper = render(
    // eslint-disable-next-line local-rules/no-react-query-provider-hoc
    reactQueryProviderHOC(<OfferPartialDescription id={offerId} description={description} />, setup)
  )
  return wrapper
}
