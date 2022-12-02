import React, { Component } from 'react'

import { Card, Row, Col } from 'antd';
import ScreenLoader from '../../../LoaderForWeb/Index';
const { Meta } = Card;
interface MyState {
  charmanderImage: string
  charmanderWeaknessIcon:string
  charmanderName: string
  charmanderHP: number
  charmanderType: string
  charmanderWeakness: string
  charmanderDescription: string
  ComponentLoader:boolean
  charmanderMoves: Array<any>
}
export class Pokemon extends Component<{}, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      charmanderImage: '',
      charmanderWeaknessIcon:'',
      charmanderName: '',
      ComponentLoader:false,
      charmanderHP: 0,
      charmanderType: '',
      charmanderWeakness: '',
      charmanderDescription: '',
      charmanderMoves: []
    }
  }
  componentDidMount() {
    fetch('https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon=charmander')
      .then((response) => response.json())
      .then((data) => {
        console.log(data, 'askjdaskjdhka')
        if (data !== null && data !== undefined && data.name !== null && data.moves !== undefined) {

          this.setState({
            charmanderImage: data.images.photo,
            charmanderWeaknessIcon:data.images.weaknessIcon,
            charmanderName: data.name,
            charmanderMoves: data.moves,
            charmanderType:data.info.type,
            charmanderHP : data.hp,
            charmanderWeakness:data.info.weakness,
            charmanderDescription:data.info.description


          })
        }
        else{
          
          this.setState({
            ComponentLoader:true
          },()=>{
            setTimeout(() => {
              this.setState({
                ComponentLoader:false
              })
            }, 1500);
          })
         
         
        }
      });
  }
  render() {
    return (
      <>
      {
        this.state.ComponentLoader ?
        <ScreenLoader />
        :
        <div>
        <h1 style={{ textAlign: "center" }}>Let's Know About The Pokemon <span style={{ color: "#fadb14" }}>Charmander</span> Character</h1>
        <br />
      
        <div style={{ display: "flex", flexDirection: "row" , justifyContent:"space-evenly",alignItems:"center"}}>

          <div className='Charmander-Image' style={{ marginLeft: 20 }}>

            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${this.state.charmanderImage}`}/>}
            >
              <Meta title={this.state.charmanderName} />
            </Card>

          </div>
          <div className='Charmander-Image' style={{ marginLeft: 20 }}>

            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={`https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/${this.state.charmanderWeaknessIcon}`}/>}
            >
              <Meta title={'Charmander weakness icon'} />
            </Card>

          </div>
          <div>
            <Row gutter={16}>
              <Col span={24}>
                <Card title={`${this.state.charmanderName}'s Detail`} bordered={false}>
                  <div style={{display:"flex",flexDirection:"column",margin:15,}}>

                <label><span style={{fontWeight:"bold"}}>Name:</span> <span>{this.state.charmanderName}</span></label>
                
                <label><span style={{fontWeight:"bold"}}>HP:</span> <span>{this.state.charmanderHP}</span></label>
                
                <label><span style={{fontWeight:"bold"}}>Type:</span> <span>{this.state.charmanderType}</span></label>
                
                <label><span style={{fontWeight:"bold"}}>Weakness:</span> <span>{this.state.charmanderWeakness}</span></label>
                
                <label><span style={{fontWeight:"bold"}}>Description:</span> <span>{this.state.charmanderDescription}</span></label>
                
                <label><span style={{fontWeight:"bold"}}>Moves:</span> <span>{this.state.charmanderMoves.length}</span></label>
                  </div>
                </Card>
              </Col>
              </Row>
          </div>
        </div>
      </div>

      }
     
      </>
    )
  }
}

export default Pokemon
