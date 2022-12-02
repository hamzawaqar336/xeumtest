import React, { Component } from 'react'
import ScreenLoader from '../LoaderForWeb/Index';
import UiInterface from './UiInterfacePart'
interface MyState {
  componentLoader: boolean
}


export class MainInterface extends Component<{},MyState> {
  constructor(props:any){
    super(props)
    this.state={
      componentLoader:true
    }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        componentLoader:false
      })
    }, 2000);
  }
  render() {
    return (
      <div>
        {
          this.state.componentLoader?
          <ScreenLoader />

          :
          <UiInterface />
         
       
        }
      </div>
    )
  }
}

export default MainInterface
