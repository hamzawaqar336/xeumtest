import React, { Component } from 'react'
import { Button, Divider } from 'antd';
import Navigation from './UiInterfaceComponents/Navbar/Navigation';
import Footer from './UiInterfaceComponents/Footer/Footer';
import Pokemon from './UiInterfaceComponents/Pokemon/Pokemon';
export class UiInterfacePart extends Component<{},{}> {
  render() {
    return (
      <div>
        <div className='NavigationPart'>
            <Navigation />
        </div>
        <Divider />
        <div className='MainPokemonApiCallingPart'>
            <Pokemon />
        </div>
        
        <div className='FooterPart'>
            <Footer/>
        </div>
        
      </div>
    )
  }
}

export default UiInterfacePart
