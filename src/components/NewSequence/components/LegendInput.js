import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";

import LegendsList from "./LegendsList";

import {
  Box,
  Button,
  Container,
  Center,
  Flex,
  Spacer,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  VStack,
  StackDivider,
} from "@chakra-ui/react";

function LegendInput(props) {
  return (
    <Field name="legend">
      {({ field, form }) => (
        <FormControl
          isInvalid={form.errors.legend && form.touched.legend}
          id="legend"
        >
          <FormLabel>Legend</FormLabel>
          <Select
            {...field}
            placeholder="Select a legend"
            styles={props.styles.input}
            onChange={(e) => props.handleLegendChange(form.values.legend)}
          >
            <LegendsList />
          </Select>
          <FormErrorMessage>{form.errors.legend}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
}

export default LegendInput;
