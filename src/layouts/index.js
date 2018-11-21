import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  padding: 10px 80px;
`;

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;
    if (location.pathname === "/") {
      header = null;
    } else {
      header = (
        <HeaderWrapper>
          <Link to={"/"}>← back</Link>
        </HeaderWrapper>
      );
    }
    return (
      <div>
        {header}
        {children()}
      </div>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object
};

export default Template;
