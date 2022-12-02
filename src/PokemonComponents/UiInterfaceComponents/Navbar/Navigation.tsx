import React, { Component } from 'react'
import { Col, Row } from 'antd';
import Typed from 'react-typed';

export class Navigation extends Component {
    render() {
        return (
            <div>
                <Row style={{backgroundColor:"#8c8c8c"}}  gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col span={7}  style={{backgroundColor:"#8c8c8c",color:"#ffff"}} className="gutter-row" offset={1}>
                        <h1>XEUM TEST</h1>
                    </Col>
                    <Col className="gutter-row" style={{color:"#ffff"}} span={7} offset={1}><h1>POKEMON API CALLING</h1></Col>
                    <Col className="gutter-row" style={{color:"#ffff"}} span={7} offset={1}>
                        <h1> {`\n`}
        <Typed
          strings={[
            "By Hamza Waqar",
            "Full Stack Developer",
            "At Xeum...",
          ]}
          style={{color:"#ffff", textDecoration:"underline"}}
          typeSpeed={250}
          backSpeed={50}
          loop
        />
        </h1>
                        </Col>
                </Row>
            </div>
        )
    }
}

export default Navigation
