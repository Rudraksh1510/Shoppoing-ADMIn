import {
  Container,
  Flex,
  Text,
  Box,
  HStack,

} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react"
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import { LuMoon, LuSun } from "react-icons/lu"
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <Box>
      <Container maxW={"1140px"} px={4}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          flexDir={{
            base: "column",
            sm: "row",
          }}
        >
          <Text
            fontSize={{ base: "22", sm: "28" }}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient={"linear(to-r, #00FFFF, #2196F3)"}
            bgClip={"text"}
            color={"#2196F3"}
          >
            <Link to={"/"}>Product Store 🛒</Link>
          </Text>
          <HStack spacing={2} alignItems={"center"}>
            <Link to={"/create"}>
            <button>
              <CiSquarePlus style={{fontSize:'3rem', base: "22", sm: "28px"}}/>
            </button>
            </Link>
              <ClientOnly fallback={<Skeleton boxSize="5" />} >
                 <IconButton onClick={toggleColorMode} variant="outline" size="sm">
                    {colorMode === "light" ? <LuSun /> : <LuMoon />}
               </IconButton>
             </ClientOnly>

          </HStack>
        </Flex>
      </Container>
      </Box>
  );
};

export default Navbar;
