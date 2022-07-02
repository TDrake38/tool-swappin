import React, { useEffect } from "react";
//import useNavigate from "react-dom"
import styles from "./Listing.module.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const fetchData = async () => {
  const response = await fetch("http://localhost:3001/findTools", {
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};

function Listing({ response, setResponse, loggedIn }) {
  //const navigate = useNavigate();

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
                <Card.Title>{tool.name}</Card.Title>
                <Card.Text>{tool.area}</Card.Text>
                <Link to={`/messages/${tool.owner_id}`}>
                  {loggedIn ? (
                    <Button
                      variant="dark"
                      className={styles.button}
                    >
                      Check On
                    </Button>
                  ) : null}
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Listing;
