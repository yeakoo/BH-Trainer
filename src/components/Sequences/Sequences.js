import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getAllSequences } from "../../api";
import CustomDrawer from "./components/CustomDrawer/CustomDrawer";
import SequencesArray from "./components/SequencesArray/SequencesArray";
import { NewSequence } from "../NewSequence/NewSequence";

import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  Stack,
  Skeleton,
} from "@chakra-ui/react";

import "./Sequences.css";

export const Sequences = () => {
  const [sequencesState, setSequences] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const fetchData = async () => {
    setLoading(true);

    await getAllSequences()
      .then(({ data }) => {
        const sequences = data.data;
        console.log(sequences);
        setSequences(sequences);
        setLoading(false);
      })
      .catch((error) => console.error);
  };

  useEffect(() => {
    fetchData();
  }, []);

  let showTable = true;
  if (!sequencesState.length) {
    showTable = false;
  }

  return (
    <div>
      <CustomDrawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="lg"
        title="Create a new Sequence"
      >
        <NewSequence />
      </CustomDrawer>
      <Button
        ref={btnRef}
        onClick={onOpen}
        size="md"
        variant="outline"
        colorScheme="purple"
        pos="absolute"
        top="20px"
        right="20px"
        p="10px 15px 10px 15px"
        textDecoration="none"
        borderRadius="5px"
      >
        Create new
      </Button>
      {isLoading && (
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          size={"5x"}
          style={{ color: "white" }}
        />
      )}
      {!showTable ? "" : <SequencesArray sequences={sequencesState} />}
    </div>
  );
};

export default Sequences;
