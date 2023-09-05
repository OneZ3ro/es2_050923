import { Button, Card, Carousel } from "react-bootstrap";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";

const TypeBook = () => {
  return (
    <div style={{ paddingInline: "25px" }}>
      <div className="d-flex gap-4 flex-nowrap" style={{ overflowX: "scroll" }}>
        <div className="d-flex flex-column align-items-center">
          <h3 style={{ width: "fit-content" }}>Fantasy</h3>
          <Carousel style={{ width: "18rem" }}>
            {fantasy.map((book, index) => (
              <Carousel.Item>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={book.img}
                    key={`img-${index}`}
                    style={{
                      height: "370px",
                      overflow: "hidden",
                      position: "center",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      Questo è un libro di {book.category}. Il suo prezzo è:{" "}
                      {book.price}€
                    </Card.Text>
                    <Button variant="primary">Compra</Button>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h3 style={{ width: "fit-content" }}>History</h3>
          <Carousel style={{ width: "18rem" }}>
            {history.map((book, index) => (
              <Carousel.Item>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={book.img}
                    key={`img-${index}`}
                    style={{
                      height: "370px",
                      overflow: "hidden",
                      position: "center",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      Questo è un libro di {book.category}. Il suo prezzo è:{" "}
                      {book.price}€
                    </Card.Text>
                    <Button variant="primary">Compra</Button>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h3 style={{ width: "fit-content" }}>Horror</h3>
          <Carousel style={{ width: "18rem" }}>
            {horror.map((book, index) => (
              <Carousel.Item>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={book.img}
                    key={`img-${index}`}
                    style={{
                      height: "370px",
                      overflow: "hidden",
                      position: "center",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      Questo è un libro di {book.category}. Il suo prezzo è:{" "}
                      {book.price}€
                    </Card.Text>
                    <Button variant="primary">Compra</Button>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h3 style={{ width: "fit-content" }}>Romance</h3>
          <Carousel style={{ width: "18rem" }}>
            {romance.map((book, index) => (
              <Carousel.Item>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={book.img}
                    key={`img-${index}`}
                    style={{
                      height: "370px",
                      overflow: "hidden",
                      position: "center",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      Questo è un libro di {book.category}. Il suo prezzo è:{" "}
                      {book.price}€
                    </Card.Text>
                    <Button variant="primary">Compra</Button>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h3 style={{ width: "fit-content" }}>Scifi</h3>
          <Carousel style={{ width: "18rem" }}>
            {scifi.map((book, index) => (
              <Carousel.Item>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={book.img}
                    key={`img-${index}`}
                    style={{
                      height: "370px",
                      overflow: "hidden",
                      position: "center",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>
                      Questo è un libro di {book.category}. Il suo prezzo è:{" "}
                      {book.price}€
                    </Card.Text>
                    <Button variant="primary">Compra</Button>
                  </Card.Body>
                </Card>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TypeBook;
