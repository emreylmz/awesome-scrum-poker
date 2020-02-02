import { shallow, ShallowWrapper } from 'enzyme'
import React from 'react'
import '../../testUtils/setupTests'
import InviteLink, { InviteLinkProps } from './InviteLink'

type DoneCallback = jest.DoneCallback

const defaultLink = '/default-lint'
const getWrapper = (props?: InviteLinkProps): ShallowWrapper => {
  return shallow(<InviteLink link={defaultLink} {...props} />)
}
describe('Invite Link UI', (): void => {
  it('should render correctly', (done: DoneCallback): void => {
    const wrapper = getWrapper()
    expect(wrapper).toMatchSnapshot()
    done()
  })

  it('should show invite link', (done: DoneCallback): void => {
    const testUrl = `${window.location.origin}${defaultLink}`
    const wrapper = getWrapper()
    const linkWrapper = wrapper.find('.invite-link__url')
    expect(linkWrapper.text()).toEqual(testUrl)
    done()
  })
})
