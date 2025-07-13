import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f3f4f6', 
}));

const Content = styled(Box)(({ theme }) => ({
  textAlign: 'center',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: 'bold',
  marginBottom: '16px',
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  color: '#4b5563',
  marginBottom: '16px',
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: '#3b82f6',
  textDecoration: 'underline',
  '&:hover': {
    color: '#1d4ed8',
  },
}));

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Container>
      <Content>
        <Title variant="h1">404</Title>
        <Subtitle variant="body1">Oops! Page not found</Subtitle>
        <StyledLink href="/">
          Return to Home
        </StyledLink>
      </Content>
    </Container>
  );
};

export default NotFound;
