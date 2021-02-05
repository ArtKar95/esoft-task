import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { connect } from "react-redux";
import { getNews } from "../../redux/authAC";

const News = ({ getNews, news }) => {
  useEffect(() => {
    getNews();
  }, [getNews]);

  return (
    <Container fluid>
      <Row>
        {news.map((item) => {
          return (
            <Col xl={6} lg={6} md={6} key={item.id}>
              <Card bg="info" text="dark" className="mt-3">
                <Card.Body>
                  <Card.Title> {item.title} </Card.Title>
                  <Card.Text>{item.body}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.news,
  };
};

const mapDispatchToProps = {
  getNews,
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
