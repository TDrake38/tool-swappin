import React, { useEffect } from "react";
import styles from "./Listing.module.css";
import { Card, Button } from "react-bootstrap";

const fetchData = async () => {
  const response = await fetch("http://localhost:3001/findTools", {
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};

function Listing({ response, setResponse }) {
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

  //console.log(response);

  const check = (e) => {
    e.preventDefault();
    //console.log("Finding");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.listing}>
          {response.map((tool) => (
            <Card className={styles.fard} key={tool.id}>
              <Card.Img
                variant="top"
                src={tool.photo}
                alt="Tool Photo"
                className={styles.photo}
              />
              <Card.Body>
                <Card.Title className={styles.titly}>{tool.name}</Card.Title>
                <Card.Text className={styles.texty}>{tool.area}</Card.Text>
                <Button
                  variant="dark"
                  onClick={check}
                  className={styles.button}
                >
                  Check On
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Listing;
