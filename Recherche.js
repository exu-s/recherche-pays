import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, Container, Image, Input, Label } from "semantic-ui-react";

const Recherche = () => {
  const [nom, setNom] = useState("");
  const [pays, setPays] = useState([]);

  const onClick = () => {
    fetch(`https://restcountries.eu/rest/v2/name/${nom}?fields=name;alpha3Code;flag`)
      .then((response) => response.json())
      .then((data) => setPays(data));
  }

  const renderPays = () => {
    return pays.map((itr) => {
      return (
        <Card key={itr.alpha3Code}>
          <Image src={itr.flag} />
          <Card.Content>
            <Card.Header>
              <Link to={`/pays/${itr.alpha3Code}`}>{itr.name}</Link>
            </Card.Header>
          </Card.Content>
        </Card>
      )
    })
  }



  return (
    <Container className='App'>
      <h1>Rercheche</h1>
      <Label pointing='right'> PAYS </Label>
      <Input type='text' value={nom} onChange={(e) => setNom(e.target.value)} />
      <Button onClick={onClick}> Recherche les pays</Button>
      <h2>Resultats de la Recherche</h2>
      {pays.length > 0 ? `il y a ${pays.length} resultat(s)` : undefined}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', width: '100%' }}>
        {pays.length > 0 ? renderPays() : undefined}
      </div>

    </Container>

  )
}

export default Recherche;
