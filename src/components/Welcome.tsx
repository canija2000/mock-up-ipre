import TableComponent from "./Table";
import { Input, Link } from "@chakra-ui/react";
import { VStack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import Glosario from "./Glosario";

export default function Welcome() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Text fontSize="5xl" textAlign="left" m={2}>
        Cursos Ingeniería
      </Text>
      <Text textAlign={"left"} mt={8} mb={6}>
        <FontAwesomeIcon icon={faCircleExclamation} />
        <span style={{ padding: 8 }}>
          En la parte inferior de la página encontrarás el{" "}
          <Link href="#glosario" color="blue.500">
            <b>glosario</b>
          </Link>{" "}
          de los términos.{" "}
        </span>
      </Text>

      <VStack spacing={14}>
        <Input
          placeholder="Busca tu curso ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableComponent searchItem={search} />
      </VStack>
      <hr />
      <Glosario />
    </div>
  );
}
