import React, {useEffect, useState} from "react";
import styles from './Listing.module.css'
import drill from '../photos/drill.jpg'
import { Card, Button } from "react-bootstrap";

const fetchData = async () => {
    const response = await fetch("http://localhost:3001/findTool");
    const json = await response.json();
    return json;
};

function Listing () {

        const [response, setResponse] = useState([]);
    
        useEffect(() => {
            let mounted = true;
        
            const fetchDataAsync = async () => {
              const data = await fetchData();
              if (mounted) {
                setResponse(data);
              }
            };
        
            fetchDataAsync();
        
            return () => {
              mounted = false;
            };
          }, []);
        
        console.log(response)

    const check = (e) => {
        console.log("Finding");
    }

    return (
        <>
            {response.map((tool, index) =>
            <Card className={styles.fard} key={index}>
                <Card.Img variant="top" src={drill} alt="A drill" className={styles.piccy}/>
                <Card.Body>
                    <Card.Title className={styles.titly}>{tool.name}</Card.Title>
                    <Card.Text className={styles.texty}>
                    St. John's.
                    </Card.Text>
                    <Button variant="dark" onClick={check} className={styles.button}>Check On</Button>
                </Card.Body>
            </Card>)}
        </>
    )
}

export default Listing;