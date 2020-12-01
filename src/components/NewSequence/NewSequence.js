import React, { useState } from "react";

import "./NewSequence.css";

import { Button, Container, Center, VStack } from "@chakra-ui/react";

import { Formik, Form } from "formik";

import * as yup from "yup";

import SequenceInput from "./components/SequenceInput.js";
import LegendInput from "./components/LegendInput.js";
import WeaponInput from "./components/WeaponInput.js";

import legends from "../../data/legends.json";

//  {
//     legend: { type: String, required: true },
//     weapon: { type: String, required: true },
//     sequence: { type: String, required: true },
//     notes: { type: String },
//     options_before: {
//       dodge: { type: Boolean, required: true },
//       jumps: { type: Number, required: true },
//       recovery: { type: Boolean, required: true },
//     },
//     reaction: {
//       dodge: { type: String },
//       wakeup: { type: String },
//       direction: { type: String },
//     },
//   }

const validationSchema = yup.object({
  sequence: yup.string("Enter the sequence").required("Sequence is required"),
  legend: yup.string("Enter a legend").required("A legend is required"),
  weapon: yup.string("Enter a weapon").required("A weapon is required"),
});

export const NewSequence = ({ onClose }) => {
  const [currentLegend, setCurrentLegend] = useState("asuri");

  const handleLegendChange = (legend) => {
    console.log("handle legend", legend);
    // setCurrentLegend(legend);
  };

  return (
    <Container w="100%" maxWidth="100%" h="100%" maxHeight="100%">
      <Formik
        initialValues={{}}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
            onClose();
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            <Center>
              <VStack w="100%">
                <SequenceInput
                  {...props}
                  styles={{
                    input: {
                      borderColor: "purple.500",
                    },
                  }}
                />
                <LegendInput
                  {...props}
                  styles={{
                    input: {
                      borderColor: "purple.500",
                    },
                  }}
                  handleLegendChange={handleLegendChange}
                />
                <WeaponInput
                  {...props}
                  legend={legends.find(
                    (legend) => legend.legend_name_key === currentLegend
                  )}
                  styles={{
                    input: {
                      borderColor: "purple.500",
                    },
                  }}
                />
              </VStack>
            </Center>
            <Button
              mt={4}
              colorScheme="purple"
              variant="solid"
              isFullWidth={true}
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default NewSequence;
