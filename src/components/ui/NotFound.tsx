import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Box, Typography, Link } from "@mui/material";
import { styled } from "@mui/material/styles";

const Container = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#f3f4f6', // bg-gray-100
}));

const Content = styled(Box)(({ theme }) => ({
  textAlign: 'center',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '36px', // text-4xl
  fontWeight: 'bold',
  marginBottom: '16px', // mb-4
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  fontSize: '20px', // text-xl
  color: '#4b5563', // text-gray-600
  marginBottom: '16px', // mb-4
}));

const StyledLink = styled(Link)(({ theme }) => ({
  color: '#3b82f6', // text-blue-500
  textDecoration: 'underline',
  '&:hover': {
    color: '#1d4ed8', // hover:text-blue-700
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
