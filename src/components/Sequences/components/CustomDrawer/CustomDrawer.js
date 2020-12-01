import React from "react";

import {
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

function CustomDrawer({
  isOpen,
  placement,
  onClose,
  btnRef,
  size,
  title = "Default title",
  children,
  bg,
  content = { ...children },
}) {
  const color = useColorModeValue("white", "black");
  const NewSequence = children;
  return (
    <Drawer
      isOpen={isOpen}
      placement={placement}
      onClose={onClose}
      finalFocusRef={btnRef}
      size={size}
      color={color}
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader textAlign="center">{title}</DrawerHeader>

          <DrawerBody>{NewSequence}</DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              colorScheme="purple"
              mr={3}
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button colorScheme="purple">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}

export default CustomDrawer;
