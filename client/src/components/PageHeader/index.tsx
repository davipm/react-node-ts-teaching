import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";
import { Container, TopBarContainer, HeaderContent } from "./styles";

interface PageHeaderProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

function PageHeader({ title, description, children }: PageHeaderProps) {
  return (
    <Container>
      <TopBarContainer>
        <Link to="/">
          <img src={backIcon} alt="Go Back" />
        </Link>
        <img src={logo} alt="Proffy" />
      </TopBarContainer>

      <HeaderContent>
        <strong>{title}</strong>
        {description && <p>{description}</p>}

        {children}
      </HeaderContent>
    </Container>
  );
}

export default PageHeader;
