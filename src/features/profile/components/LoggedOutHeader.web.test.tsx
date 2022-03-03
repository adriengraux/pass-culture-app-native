import React from 'react'

import { navigate } from '__mocks__/@react-navigation/native'
import { analytics } from 'libs/analytics'
import { render, fireEvent } from 'tests/utils/web'

import { LoggedOutHeader } from './LoggedOutHeader'

describe('LoggedOutHeader', () => {
  it('should navigate to the SignupForm page', () => {
    const { getByTestId } = render(<LoggedOutHeader />)

    const signupButton = getByTestId("S'inscrire")

    fireEvent.click(signupButton)

    expect(analytics.logProfilSignUp).toBeCalled()
    expect(navigate).toBeCalledWith('SignupForm', { preventCancellation: true })
  })
  it('should navigate to the login page', () => {
    const { getByTestId } = render(<LoggedOutHeader />)

    const connectButton = getByTestId('Connecte-toi')
    fireEvent.click(connectButton)

    expect(navigate).toBeCalledWith('Login', { preventCancellation: true })
  })
})
