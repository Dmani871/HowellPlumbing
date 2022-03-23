import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useTheme } from '@chakra-ui/react';
const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  const theme = useTheme();
  return (
    <Link
      style={{ color: match ? theme.colors.main.primary : theme.colors.main.secondary }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
