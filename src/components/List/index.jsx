import "./style.css";
import React from "react";
import { Card, Col, Row } from "antd";
const List = () => (
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row>
);
export default List;
