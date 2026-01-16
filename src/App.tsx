import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav""aside main"`,
        }}
      >
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <GridItem area="main" bg="lightblue">
          main
        </GridItem>
        <GridItem bg="red" area="aside" display={{ base: "none", lg: "block" }}>
          Aside
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
