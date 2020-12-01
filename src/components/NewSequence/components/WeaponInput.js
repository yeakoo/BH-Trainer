import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";

import WeaponsList from "./WeaponsList";

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

function WeaponInput(props) {
  return (
    <Field name="weapon">
      {({ field, form }) => {
        form.handleChange("weapon");
        return (
          <FormControl
            isInvalid={form.errors.weapon && form.touched.weapon}
            id="weapon"
          >
            <FormLabel>Weapon</FormLabel>
            <Select
              {...field}
              placeholder="Select a weapon"
              colorScheme="purple"
            >
              <WeaponsList legend={props.legend} />
            </Select>
            <FormErrorMessage>{form.errors.weapon}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
}

export default WeaponInput;
