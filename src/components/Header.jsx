// import { Button, HStack } from "@chakra-ui/react";
// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <HStack p={"4"} shadow={"base"} bgColor={"White"}>
//       <Button variant={"unstyled"} color={"#969695"}>
//         <Link to="/">Home</Link>
//       </Button>
//       <Button variant={"unstyled"} color={"#969695"}>
//         <Link to="/exchanges">Exchanges</Link>
//       </Button>
//       <Button variant={"unstyled"} color={"#969695"}>
//         <Link to="/coins">Coins</Link>
//       </Button>
//     </HStack>
//   );
// };

// export default Header;


import { Button, HStack, Box } from "@chakra-ui/react";
import React from "react";
// import { Link } from "react-router-dom";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

// const Header = () => {
//   return (
//     <HStack p={"4"} shadow={"base"} bgColor={"#238df7"}>
//       <Button variant={"unstyled"} color={"#333333"}>
//         <Link to="/">
//           <Box
//             border="1px solid #c348f7"
//             bgColor={"#c348f7"}
//             borderRadius="10%" // To make it round, adjust the border radius accordingly
//             p="2"
//           >
//             Home
//           </Box>
//         </Link>
//       </Button>
//       <Button variant={"unstyled"} color={"#333333"}>
//         <Link to="/exchanges">
//           <Box
//             border="1px solid #c348f7"
//             bgColor={"#c348f7"}
//             borderRadius="10%" // To make it round, adjust the border radius accordingly
//             p="2"
//           >
//             Exchanges
//           </Box>
//         </Link>
//       </Button>
//       <Button variant={"unstyled"} color={"#333333"}>
//         <Link to="/coins">
//           <Box
//             border="1px solid #c348f7"
//             bgColor={"#c348f7"}
//             borderRadius="10%" // To make it round, adjust the border radius accordingly
//             p="2"
//           >
//             Coins
//           </Box>
//         </Link>
//       </Button>
//     </HStack>
//   );
// };
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}

const Header = () => {
  return (
    <HStack>
      <nav className="nav">
        <Link to="/" className="site-title">
          Crypto World
        </Link>
        <ul>
          <CustomLink to="/coins">Coins</CustomLink>
          <CustomLink to="/exchanges">Exchanges</CustomLink>
        </ul>
      </nav>
    // </HStack>
  );
};

export default Header;
