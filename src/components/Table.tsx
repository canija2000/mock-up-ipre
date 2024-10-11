import cursos from "../public/scrapping/cursos.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Badge,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text,
} from "@chakra-ui/react";
import {
  faArrowUpRightDots,
  faBiohazard,
  faCubesStacked,
  faLayerGroup,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";

type TableComponentProps = {
  searchItem: string;
};

export default function TableComponent({ searchItem }: TableComponentProps) {
  const getBadgeColor = (days: number) => {
    return (
      <Badge
        colorScheme={days <= 5 ? "green" : days <= 12 ? "yellow" : "red"}
        size="lg"
        minWidth="80px" // Set fixed width
        textAlign="center" // Center text
        display="inline-block" // Ensure block-like behavior
      >
        {days} hrs
      </Badge>
    );
  };

  const getIconByType = (type: string) => {
    switch (type) {
      case "D1":
        return <FontAwesomeIcon icon={faUniversalAccess} />;
      case "D2":
        return <FontAwesomeIcon icon={faCubesStacked} />;
      case "D3":
        return <FontAwesomeIcon icon={faLayerGroup} />;
      case "D4":
        return <FontAwesomeIcon icon={faArrowUpRightDots} />;
      case "D5":
        return <FontAwesomeIcon icon={faBiohazard} />;
      default:
        return null;
    }
  };

  const filteredCursos = cursos.filter((curso) =>
    curso.nombre.toLowerCase().includes(searchItem.toLowerCase())
  );
  return (
    <div style={{ height: "500px", overflow: "auto" }}>
      <TableContainer>
        <Table variant="simple" size="lg">
          <Thead>
            <Tr>
              <Th textAlign={"center"}>Sigla</Th>
              <Th textAlign={"center"}>Nombre</Th>
              <Th textAlign={"center"}>Créditos</Th>
              <Th textAlign={"center"}>ECA</Th>
              <Th textAlign={"center"}>HSP</Th>
              <Th textAlign={"center"}>TC</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredCursos.map((curso) => (
              <Tr key={curso.sigla}>
                <Td textAlign={"center"}>
                  <Text as="b">{curso.sigla}</Text>
                </Td>
                <Td>{curso.nombre}</Td>
                <Td textAlign={"center"}>{curso.creditos}</Td>
                <Td>{curso.ECA}</Td>
                <Td>{getBadgeColor(curso.HSP)}</Td>
                <Td>{getIconByType(curso.TC)}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
