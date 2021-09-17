import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Label, Segment } from "semantic-ui-react";

const Pays = (props) => {
  const alphaCode = props.match.params.codepays;
  const [pays, setPays] = useState({});

  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/alpha/${alphaCode}`)
      .then((response) => response.json())
      .then((data) => setPays(data))
      .catch((erreur) => console.log(erreur))
  }, [alphaCode])

  console.log(pays)

  if (!pays.name) {
    return null
  }

  return (
    <Container className='App'>
      <h1>{pays.name}</h1>
      <Segment>{pays.subregion}</Segment>
      <img alt='drapeau' src={pays.flag} style={{ width: 130, border: '1px solid grey' }} />
      <p>Population: {pays.population.toLocaleString('fr-FR')} habitants</p>
      <p>Superficies: {pays.area.toLocaleString('fr-FR')} m2 </p>
      <p>Latitude: {pays.latlng[0]}</p>
      <p>Longitude : {pays.latlng[1]}</p>
      <p>TimeZones: {pays.timezones}</p>
      <p>Native Name: {pays.nativeName}</p>
      <div>
      {pays.borders ? 
        pays.borders.map((frontalier)=> 
        <Label key={frontalier}>
          <Link to={`/pays/${frontalier}`}>{frontalier}</Link>
        </Label>) : undefined }
      </div>
    </Container>
  )
}

export default Pays;
