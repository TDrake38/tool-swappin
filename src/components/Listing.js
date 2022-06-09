import React, {useEffect, useState} from "react";
import styles from './Listing.module.css'
import drill from '../photos/drill.jpg'
import { Card, Button } from "react-bootstrap";


const fetchData = async () => {
    const response = await fetch("http://localhost:3001/findTools", { headers: { "Content-Type": "application/json" }});
    return await response.json();
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
            {response.map((tool) =>
            <Card className={styles.fard} key={tool.id}>
                <Card.Img variant="top" src={drill} alt="A drill" className={styles.piccy}/>
                <Card.Body>
                    <Card.Title className={styles.titly}>{tool.name}</Card.Title>
                    <Card.Text className={styles.texty}>
                    {/*have to make a fetch for the owner area of the tool and display it here. */}
                    St. John's.
                    </Card.Text>
                    <Button variant="dark" onClick={check} className={styles.button}>Check On</Button>
                </Card.Body>
            </Card>)}
        </>
    )
}

export default Listing;