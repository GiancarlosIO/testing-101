// Import React
import React from "react";
import styled from "styled-components";
import CodeSlide from "spectacle-code-slide";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import Prism from "prismjs";

Prism.highlightAll();

// Require CSS
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const images = {
  codeCoverage: require("../assets/images/TEST_COVERAGE.png"),
  iterateOverTest: require("../assets/images/ITERATE_TEST.png"),
  structureApp: require("../assets/images/structure_app.png"),
  whereStart: require("../assets/images/where_test.png")
};

const ListItemCustom = styled(ListItem)`
  line-height: 52px;
  font-size: ${(props) => (props.size || "32px")} !important;
`;

const TitleCustom = (props) => <Text margin="10px 0 0" textColor="tertiary" textSize="50px" {...props} />

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Testing 101
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            ¿Cómo hacer testing y no morir en el intento?
          </Text>
        </Slide>
        <Slide>
          <TitleCustom>
            ¿Por qué los tests son necesarios?
          </TitleCustom>
          <List>
            <ListItemCustom>Confiar en los  nuestro código</ListItemCustom>
            <ListItemCustom>Auto-documentación del código</ListItemCustom>
            <ListItemCustom>Hacer Refactor del código se vuelve fácil</ListItemCustom>
            <ListItemCustom>Te vuelves un mejor desarrollador</ListItemCustom>
            <ListItemCustom>Ayuda a trabajar en equipo</ListItemCustom>
            <ListItemCustom>💸 💸 💸 Save money 💸 💸 💸</ListItemCustom>
          </List>
        </Slide>
        {/* ============================================================= */}
        <Slide>
          <TitleCustom>Tipos de testing</TitleCustom>
          <List>
            <ListItemCustom>Static type</ListItemCustom>
            <ListItemCustom>Unit tests</ListItemCustom>
            <ListItemCustom>Integration Tests</ListItemCustom>
            <ListItemCustom>End-To-End (a.k.a. Funcional tests)</ListItemCustom>
            <ListItemCustom>Ayuda a trabajar en equipo</ListItemCustom>
            <ListItemCustom>Visual testing</ListItemCustom>
          </List>
        </Slide>
        {/* ============================================================= */}
        <Slide>
          <TitleCustom bold margin="0 auto 30px auto">Code Coverage</TitleCustom>
          <Image src={images.codeCoverage} />
        </Slide>
        {/* ============================================================= */}
        <Slide>
          <TitleCustom bold margin="0 auto 30px auto">Code Coverage</TitleCustom>
          <Text textSize="32px" margin="32px 0 32px 0" textAlign="left">Tener un 100% de code coverage no significa:</Text>
          <List>
            <ListItemCustom>
              Toda tu aplicación ha sido probada ❌
            </ListItemCustom>
            <ListItemCustom>
              Tu código es perfecto ❌ 
            </ListItemCustom>
            <ListItemCustom>
              Tus tests son perfectos ❌
            </ListItemCustom>
          </List>
        </Slide>
        {/* ============================================================= */}
        <CodeSlide
          lang="js"
          textSize={24}
          code={require("raw-loader!../assets/coverage-100.example")}
          ranges={[
            { loc: [0, 6], title: "Text Coverage example" },
            { loc: [8, 16], title: "100% coverage 🎉" },
            { loc: [17, 25], title: "200% coverage? 🤔" }
          ]}
        />
        {/* ============================================================= */}
        <Slide>
          <TitleCustom>Testing en CREHANA</TitleCustom>
          <List>
            <ListItemCustom>¿Cómo crear buenos tests?</ListItemCustom>
            <ListItemCustom>Estrategías de testing</ListItemCustom>
            <ListItemCustom>¿Cómo mantener los tests "clean"?</ListItemCustom>
          </List>
        </Slide>
        {/* ============================================================= */}
        <Slide>
          <TitleCustom>Qué es un test de calidad?</TitleCustom>
          <List>
            <ListItemCustom>✅ Velocidad</ListItemCustom>
            <ListItemCustom>✅ No son frágiles</ListItemCustom>
            <ListItemCustom>✅ Fácil de entender</ListItemCustom>
            <ListItemCustom>✅ Capturan bugs</ListItemCustom>
            <ListItemCustom>✅ Buen coverage</ListItemCustom>
          </List>
        </Slide>
        {/* ============================================================= */}
        <CodeSlide
          lang="js"
          textSize={24}
          code={require("raw-loader!../assets/code/BROKE_TEST.example")}
          ranges={[
            { loc: [0, 4], title: "Snapshot tests are fragile" },
            { loc: [5, 9], title: "Testing specific values" }
          ]}
        />
        {/* ============================================================= */}
        <Slide>
          <TitleCustom bold>Iterar</TitleCustom>
          <Image src={images.iterateOverTest} />
        </Slide>
        {/* ============================================================= */}
        <Slide>
          <TitleCustom>Crear una estrategía</TitleCustom>
          <List>
            <ListItemCustom>Crear tests para UI es súper difícil</ListItemCustom>
            <ListItemCustom>"Mock data" reduce la calidad de los tests</ListItemCustom>
          </List>
        </Slide>
        {/* ============================================================= */}
        <Slide transition={["fade"]}>
          <TitleCustom>¿Dónde empezar?</TitleCustom>
          <Image src={images.structureApp} />
        </Slide>
        {/* ============================================================= */}
        <Slide transition={["fade"]}>
          <TitleCustom>¿Dónde empezar?</TitleCustom>
          <Image src={images.whereStart} />
        </Slide>
        {/* ============================================================= */}
        <Slide>
          <TitleCustom>✅ Props</TitleCustom>
          <List>
            <ListItemCustom size="24px">Si un test falla posiblemente sea por un bug.</ListItemCustom>
            <ListItemCustom size="24px">Fácil de entender: Siguen el comportamiento de un usuario real.</ListItemCustom>
            <ListItemCustom size="24px">Sobreviven a refactors gigantes</ListItemCustom>
          </List>
          <TitleCustom>❌ Contras</TitleCustom>
          <List>
            <ListItemCustom size="24px">Hacer el setup del initial state es difícil</ListItemCustom>
          </List>
        </Slide>
        {/* ============================================================= */}
        <Slide transition={["fade"]}>
          <TitleCustom>¿Cómo mantener los tests "clean"?</TitleCustom>
          <List>
            <ListItemCustom size="24px">⚒️ Compartir/Crear tests utils</ListItemCustom>
            <ListItemCustom size="24px">📃 Crear herramientas para generar plantillas para los tests (snippets)</ListItemCustom>
            <ListItemCustom size="24px">⚛️ Crear reglas de eslint (?)</ListItemCustom>
            <ListItemCustom size="24px">📝 Documentación</ListItemCustom>
          </List>
        </Slide>
        {/* ============================================================= */}
        {/* ============================================================= */}
      </Deck>
    );
  }
}
