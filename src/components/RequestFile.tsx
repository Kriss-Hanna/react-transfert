import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { Card, Form, Button } from "react-bootstrap";
import firebaseService from "../services/firebase";
import Swal from 'sweetalert2';

function RequestFile() {
  const [fileId, setFileId] = useState<string>("")

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const file = await firebaseService.getSingleFile(fileId);

    if(file !== undefined) {
      navigate(`/files/${file.id}`);
      return
    }

    setFileId("")

    await Swal.fire({
      icon:"question",
      title: "Aucun résultat",
      text: "Veuillez réessayer avec un autre identifiant ..."
    })
  }
    return (
      <Card>
        <Card.Header>Rechercher un fichier </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Control className="mb-3" type="text" placeholder="Exemple: ABCDEFGH" required minLength={8} maxLength={8} max="8" onChange={(e) => setFileId(e.target.value)}/>

            <Button className="w-100" type="submit">Rechercher</Button>
            
          </Form>
        </Card.Body>
      </Card>
    )
  }
  
  export default RequestFile;
  