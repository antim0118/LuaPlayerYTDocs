import { Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useColorPalette } from "../ui/color-mode";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  const { accentColor } = useColorPalette();

  return (
    <Flex direction="column" alignItems="center" m={5}>
      <Heading color={accentColor} size="7xl">
        ёмаё.
      </Heading>
      <Text>ты попал на несуществующую страницу 😭</Text>

      <Link
        color="blue.400"
        textDecoration="underline"
        onClick={() => {
          navigate("/");
          navigate(0);
        }}
      >
        братанчик-кабанчик, нажми сюда по приколу
      </Link>
    </Flex>
  );
};
