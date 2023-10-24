import { Button, Flex, useColorMode, IconButton } from "@chakra-ui/react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex justifyContent={"center"} mt={6} mb="12">
      <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === "dark" ? <MdDarkMode /> : <MdLightMode />}
        onClick={toggleColorMode}
        size="md"
        variant="ghost"
      />
    </Flex>
  );
};

export default Header;
