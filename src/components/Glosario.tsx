import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  UnorderedList,
  ListItem,
  Text,
  Box,
  Divider,
  AbsoluteCenter,
  Heading,
  Card,
} from "@chakra-ui/react";
import {
  faArrowUpRightDots,
  faBiohazard,
  faCubesStacked,
  faLayerGroup,
  faUniversalAccess,
} from "@fortawesome/free-solid-svg-icons";

export default function Glosario() {
  return (
    <div id="glosario">
      <Box position="relative" padding="10" mt={12}>
        <Divider />
        <AbsoluteCenter bg="white" px="4" fontSize="lg" as="b">
          Glosario
        </AbsoluteCenter>
      </Box>
      <Card>
        <UnorderedList spacing={8} styleType="''">
          <ListItem>
            <Heading fontSize="xl" textAlign="left" m={2}>
              ECA
            </Heading>
            <Text textAlign="left" ms={3}>
              El puntaje ECA, se basa en la <b>Encuesta de Carga Acdémica</b>, y
              varia entre 0 - 1. Y su valor indica cuanta carga representa el
              curso. En este cálculo estan incluidas variables como :{" "}
              <UnorderedList spacing={1} ms={12}>
                <ListItem> Horas de estudios estipuladas v/s reales </ListItem>
                <ListItem> Cantidad de pruebas </ListItem>
                <ListItem> Cantidad de trabajos </ListItem>
                <ListItem> Cantidad de lecturas </ListItem>
              </UnorderedList>
              Entendiendo así, que un curso con un valor <b>ECA</b> muy alto,
              presenta una carga académica muy alta.
            </Text>
          </ListItem>
          <Divider />
          <ListItem>
            <Heading fontSize="xl" textAlign="left" m={2}>
              HSP (Horas Semanales Promedio)
            </Heading>
            <Text textAlign="left" ms={3}>
              Refiere a la cantidad de horas promedio que el alumno dedicó al
              curso (independiente del tipo de actividad).
            </Text>
          </ListItem>
          <Divider />
          <ListItem pb={8}>
            <Heading fontSize="xl" textAlign="left" m={2}>
              TC (Tipo de Curso)
            </Heading>
            <Text textAlign="left">
              A partir de los indicadores obtenidos, calculados y deducidos de
              la <b>ECA</b>, hemos clasificado los cursos en 5 tipos de
              dificultad:
              <UnorderedList spacing={2} ms={12}>
                <ListItem>
                  {" "}
                  <FontAwesomeIcon icon={faUniversalAccess} />{" "}
                  <b>
                    <u>D1 - Fácil :</u>
                  </b>
                  {
                    " Este tipo de cursos son aquellos que tienen un programa navegable. Al mismo tiempo que las evaluaciones son claras y no requieren de un esfuerzo adicional."
                  }
                </ListItem>
                <ListItem>
                  {" "}
                  <FontAwesomeIcon icon={faCubesStacked} />{" "}
                  <b>
                    <u>D2 - Normal :</u>
                  </b>
                  {
                    " Considerado un curso que o bien tiene una carga estándar (en términos de flujo), o bien las evaluaciones son bastantes, pero no son complejas."
                  }
                </ListItem>
                <ListItem>
                  {" "}
                  <FontAwesomeIcon icon={faLayerGroup} />{" "}
                  <b>
                    <u>D3 - Medio : </u>
                  </b>
                  {
                    " Considerado un curso que requiere más atención, pues considera trabajos, pruebas, lecturas, que son más demandantes (en cantidad o complejidad) que los cursos anteriores."
                  }
                </ListItem>
                <ListItem>
                  {" "}
                  <FontAwesomeIcon icon={faArrowUpRightDots} />{" "}
                  <b>
                    <u>D4 - Díficil : </u>
                  </b>
                  {
                    " Las horas dedicadas a este tipo de curso exceden las previstas por el curriculo. Además de tener evaluaciones complejas y demandantes."
                  }
                </ListItem>
                <ListItem>
                  {" "}
                  <FontAwesomeIcon icon={faBiohazard} />{" "}
                  <b>
                    <u>D5 - Exceso de Carga : </u>
                  </b>
                  {
                    " Este tipo de cursos son aquellos que tienen una carga académica excesiva, y que no se condice con el valor de créditos que otorga. Suele tener una gran cantidad de descerciones y porcentajes de aprobración bajos."
                  }
                </ListItem>
              </UnorderedList>
            </Text>
          </ListItem>
        </UnorderedList>
      </Card>
    </div>
  );
}
