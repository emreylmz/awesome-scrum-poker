import React from 'react'

interface Props {

}

interface State {

}

class Header extends React.PureComponent<Props, State> {
  render() {
    return (
      <h1></h1>
    );
  }
}

export type HeaderProps = Props;
export type HeaderState = State;
export default Header;
