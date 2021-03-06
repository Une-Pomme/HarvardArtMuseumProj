import React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, CardLink, CardImg 
  } from 'reactstrap';
  import './MuseumInfoCard.css';

const MuseumInfoCard = (props) =>{
    const {info} = props;
    return(
        <Card>
            <CardBody>
    <CardTitle tag="h5">{info.title}</CardTitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted">Date: {info.dated}</CardSubtitle>
    {info.imagecount > 0 && info.images.length > 0? 
    <CardImg className="museum-object-image" src={info.images[0].baseimageurl} alt={info.images[0].alttext !== null ? info.images[0].alttext : "" }></CardImg>   :
    <p id="no-image-message"> [No image is available]</p>
}
    {info.description !== null? 
    <CardText>Object Description: {info.description}</CardText> :
    null
    }
          <CardText>Department: {info.department}, divison of {info.division}</CardText>
          <CardLink href={info.url}>Harvard Museum URL</CardLink>
<CardText>Credit Line: {info.creditline}</CardText>
        </CardBody>
        </Card>
    )
}

export default MuseumInfoCard;