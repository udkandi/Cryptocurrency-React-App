import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

// const lightColors = {
//   background : "#F5F5F5",
//   icon : "#969695"
// }

// const darkColors = {
//   background : "#333333",
//   icon : "#969695"
// }

  return (
    <IconButton
      variant="solid"
      color="current"
      // bgColor="whatsapp.600"
      bgColor="#c348f7"
      pos={'fixed'}
      top={'4'}
      right={'4'}
      zIndex={'overlay'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;
