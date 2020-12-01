import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";

import {
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

const SequenceInput = (props) => {
  return (
    <Field name="sequence">
      {({ field, form }) => (
        <FormControl
          isInvalid={form.errors.sequence && form.touched.sequence}
          id="sequence"
        >
          <FormLabel>Sequence</FormLabel>
          <Input {...field} placeholder="Sequence" {...props.styles.input} />
          <FormErrorMessage>{form.errors.sequence}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default SequenceInput;
