import React, { Component } from 'react';
import left from '../assets/left.png';
import search from '../assets/search.png';
import Tabs from '../Tabs/Tabs';
import Tab from '../Tabs/Tab';
import glamorous from 'glamorous';
import strawberries from '../assets/strawberries.png';
import watermelon from '../assets/watermelon.png';
import shoppingCart from '../assets/ic_shopping_cart-white.png';
import receipt from '../assets/ic_receipt-red.png';

export default class Page1 extends Component {
  render() {
    return (
      <div>
        <div className='headImage'>
          <div className='left-and-search'>
            <img id='left' src={left} alt='left' />
            <img id='search' src={search} alt='search' />
          </div>
          <div className='heading'>Fruits & Vegetables</div>
        </div>
        <div className='slider'>
          <Tabs
            activeTab={{
              id: 'tab1'
            }}
            // style={{ height: '50px', opacity: '0.05', backgroundColor: '#404852' }}
          >
            <Tab id='tab1' title='Fresh Fruits'>
              <div className='container'>
                <div className='card'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: '0.5px solid #ff5055',
                      width: '25px',
                      height: '25px',
                      position: 'relative',
                      left: 'calc(100% - 25px)'
                    }}
                  >
                    <img style={{ width: '15px', height: '15px' }} src={receipt} alt='receipt' />
                  </div>
                  <img
                    style={{ width: '86px', height: '55px', margin: '18px 0 18px 0' }}
                    src={strawberries}
                    alt='strawberries'
                  />
                  <div className='name'>Strawberry</div>
                  <div className='quantity-price'>
                    <div className='quantity'>1kg</div>
                    <div className='price'>$4.00</div>
                  </div>
                  <div className='quantity-pill'>
                    <div className='left-div' style={{ display: 'flex' }}>
                      <div className='left'> - </div>
                      <div className='center'> 1.5 kg </div>
                      <div className='right'> + </div>
                    </div>
                    <div
                      style={{
                        width: '25px',
                        height: '25px',
                        background: '#ff5055',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <img style={{ width: '13px', height: '13px' }} src={shoppingCart} alt='shopping-cart' />
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: '0.5px solid #ff5055',
                      width: '25px',
                      height: '25px',
                      position: 'relative',
                      left: 'calc(100% - 25px)'
                    }}
                  >
                    <img style={{ width: '15px', height: '15px' }} src={receipt} alt='receipt' />
                  </div>
                  <img
                    style={{ width: '86px', height: '55px', margin: '18px 0 18px 0' }}
                    src={strawberries}
                    alt='strawberries'
                  />
                  <div className='name'>Strawberry</div>
                  <div className='quantity-price'>
                    <div className='quantity'>1kg</div>
                    <div className='price'>$4.00</div>
                  </div>
                  <div className='quantity-pill'>
                    <div className='left-div' style={{ display: 'flex' }}>
                      <div className='left'> - </div>
                      <div className='center'> 1.5 kg </div>
                      <div className='right'> + </div>
                    </div>
                    <div
                      style={{
                        width: '25px',
                        height: '25px',
                        background: '#ff5055',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <img style={{ width: '13px', height: '13px' }} src={shoppingCart} alt='shopping-cart' />
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: '0.5px solid #ff5055',
                      width: '25px',
                      height: '25px',
                      position: 'relative',
                      left: 'calc(100% - 25px)'
                    }}
                  >
                    <img style={{ width: '15px', height: '15px' }} src={receipt} alt='receipt' />
                  </div>
                  <img
                    style={{ width: '86px', height: '55px', margin: '18px 0 18px 0' }}
                    src={strawberries}
                    alt='strawberries'
                  />
                  <div className='name'>Strawberry</div>
                  <div className='quantity-price'>
                    <div className='quantity'>1kg</div>
                    <div className='price'>$4.00</div>
                  </div>
                  <div className='quantity-pill'>
                    <div className='left-div' style={{ display: 'flex' }}>
                      <div className='left'> - </div>
                      <div className='center'> 1.5 kg </div>
                      <div className='right'> + </div>
                    </div>
                    <div
                      style={{
                        width: '25px',
                        height: '25px',
                        background: '#ff5055',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <img style={{ width: '13px', height: '13px' }} src={shoppingCart} alt='shopping-cart' />
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: '0.5px solid #ff5055',
                      width: '25px',
                      height: '25px',
                      position: 'relative',
                      left: 'calc(100% - 25px)'
                    }}
                  >
                    <img style={{ width: '15px', height: '15px' }} src={receipt} alt='receipt' />
                  </div>
                  <img
                    style={{ width: '86px', height: '55px', margin: '18px 0 18px 0' }}
                    src={strawberries}
                    alt='strawberries'
                  />
                  <div className='name'>Strawberry</div>
                  <div className='quantity-price'>
                    <div className='quantity'>1kg</div>
                    <div className='price'>$4.00</div>
                  </div>
                  <div className='quantity-pill'>
                    <div className='left-div' style={{ display: 'flex' }}>
                      <div className='left'> - </div>
                      <div className='center'> 1.5 kg </div>
                      <div className='right'> + </div>
                    </div>
                    <div
                      style={{
                        width: '25px',
                        height: '25px',
                        background: '#ff5055',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <img style={{ width: '13px', height: '13px' }} src={shoppingCart} alt='shopping-cart' />
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: '0.5px solid #ff5055',
                      width: '25px',
                      height: '25px',
                      position: 'relative',
                      left: 'calc(100% - 25px)'
                    }}
                  >
                    <img style={{ width: '15px', height: '15px' }} src={receipt} alt='receipt' />
                  </div>
                  <img
                    style={{ width: '86px', height: '55px', margin: '18px 0 18px 0' }}
                    src={strawberries}
                    alt='strawberries'
                  />
                  <div className='name'>Strawberry</div>
                  <div className='quantity-price'>
                    <div className='quantity'>1kg</div>
                    <div className='price'>$4.00</div>
                  </div>
                  <div className='quantity-pill'>
                    <div className='left-div' style={{ display: 'flex' }}>
                      <div className='left'> - </div>
                      <div className='center'> 1.5 kg </div>
                      <div className='right'> + </div>
                    </div>
                    <div
                      style={{
                        width: '25px',
                        height: '25px',
                        background: '#ff5055',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <img style={{ width: '13px', height: '13px' }} src={shoppingCart} alt='shopping-cart' />
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: '0.5px solid #ff5055',
                      width: '25px',
                      height: '25px',
                      position: 'relative',
                      left: 'calc(100% - 25px)'
                    }}
                  >
                    <img style={{ width: '15px', height: '15px' }} src={receipt} alt='receipt' />
                  </div>
                  <img
                    style={{ width: '86px', height: '55px', margin: '18px 0 18px 0' }}
                    src={strawberries}
                    alt='strawberries'
                  />
                  <div className='name'>Strawberry</div>
                  <div className='quantity-price'>
                    <div className='quantity'>1kg</div>
                    <div className='price'>$4.00</div>
                  </div>
                  <div className='quantity-pill'>
                    <div className='left-div' style={{ display: 'flex' }}>
                      <div className='left'> - </div>
                      <div className='center'> 1.5 kg </div>
                      <div className='right'> + </div>
                    </div>
                    <div
                      style={{
                        width: '25px',
                        height: '25px',
                        background: '#ff5055',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <img style={{ width: '13px', height: '13px' }} src={shoppingCart} alt='shopping-cart' />
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: '0.5px solid #ff5055',
                      width: '25px',
                      height: '25px',
                      position: 'relative',
                      left: 'calc(100% - 25px)'
                    }}
                  >
                    <img style={{ width: '15px', height: '15px' }} src={receipt} alt='receipt' />
                  </div>
                  <img
                    style={{ width: '86px', height: '55px', margin: '18px 0 18px 0' }}
                    src={strawberries}
                    alt='strawberries'
                  />
                  <div className='name'>Strawberry</div>
                  <div className='quantity-price'>
                    <div className='quantity'>1kg</div>
                    <div className='price'>$4.00</div>
                  </div>
                  <div className='quantity-pill'>
                    <div className='left-div' style={{ display: 'flex' }}>
                      <div className='left'> - </div>
                      <div className='center'> 1.5 kg </div>
                      <div className='right'> + </div>
                    </div>
                    <div
                      style={{
                        width: '25px',
                        height: '25px',
                        background: '#ff5055',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <img style={{ width: '13px', height: '13px' }} src={shoppingCart} alt='shopping-cart' />
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab id='tab2' title='Fresh Vegetables'>
              <div className='container'>
                <div className='card'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: '0.5px solid #ff5055',
                      width: '25px',
                      height: '25px',
                      position: 'relative',
                      left: 'calc(100% - 25px)'
                    }}
                  >
                    <img style={{ width: '15px', height: '15px' }} src={receipt} alt='receipt' />
                  </div>
                  <img
                    style={{ width: '86px', height: '55px', margin: '18px 0 18px 0' }}
                    src={watermelon}
                    alt='watermelon'
                  />
                  <div className='name'>Strawberry</div>
                  <div className='quantity-price'>
                    <div className='quantity'>1kg</div>
                    <div className='price'>$4.00</div>
                  </div>
                  <div className='quantity-pill'>
                    <div className='left-div' style={{ display: 'flex' }}>
                      <div className='left'> - </div>
                      <div className='center'> 1.5 kg </div>
                      <div className='right'> + </div>
                    </div>
                    <div
                      style={{
                        width: '25px',
                        height: '25px',
                        background: '#ff5055',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <img style={{ width: '13px', height: '13px' }} src={shoppingCart} alt='shopping-cart' />
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: '0.5px solid #ff5055',
                      width: '25px',
                      height: '25px',
                      position: 'relative',
                      left: 'calc(100% - 25px)'
                    }}
                  >
                    <img style={{ width: '15px', height: '15px' }} src={receipt} alt='receipt' />
                  </div>
                  <img
                    style={{ width: '86px', height: '55px', margin: '18px 0 18px 0' }}
                    src={watermelon}
                    alt='watermelon'
                  />
                  <div className='name'>Strawberry</div>
                  <div className='quantity-price'>
                    <div className='quantity'>1kg</div>
                    <div className='price'>$4.00</div>
                  </div>
                  <div className='quantity-pill'>
                    <div className='left-div' style={{ display: 'flex' }}>
                      <div className='left'> - </div>
                      <div className='center'> 1.5 kg </div>
                      <div className='right'> + </div>
                    </div>
                    <div
                      style={{
                        width: '25px',
                        height: '25px',
                        background: '#ff5055',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <img style={{ width: '13px', height: '13px' }} src={shoppingCart} alt='shopping-cart' />
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: '0.5px solid #ff5055',
                      width: '25px',
                      height: '25px',
                      position: 'relative',
                      left: 'calc(100% - 25px)'
                    }}
                  >
                    <img style={{ width: '15px', height: '15px' }} src={receipt} alt='receipt' />
                  </div>
                  <img
                    style={{ width: '86px', height: '55px', margin: '18px 0 18px 0' }}
                    src={watermelon}
                    alt='watermelon'
                  />
                  <div className='name'>Strawberry</div>
                  <div className='quantity-price'>
                    <div className='quantity'>1kg</div>
                    <div className='price'>$4.00</div>
                  </div>
                  <div className='quantity-pill'>
                    <div className='left-div' style={{ display: 'flex' }}>
                      <div className='left'> - </div>
                      <div className='center'> 1.5 kg </div>
                      <div className='right'> + </div>
                    </div>
                    <div
                      style={{
                        width: '25px',
                        height: '25px',
                        background: '#ff5055',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <img style={{ width: '13px', height: '13px' }} src={shoppingCart} alt='shopping-cart' />
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: '0.5px solid #ff5055',
                      width: '25px',
                      height: '25px',
                      position: 'relative',
                      left: 'calc(100% - 25px)'
                    }}
                  >
                    <img style={{ width: '15px', height: '15px' }} src={receipt} alt='receipt' />
                  </div>
                  <img
                    style={{ width: '86px', height: '55px', margin: '18px 0 18px 0' }}
                    src={watermelon}
                    alt='watermelon'
                  />
                  <div className='name'>Strawberry</div>
                  <div className='quantity-price'>
                    <div className='quantity'>1kg</div>
                    <div className='price'>$4.00</div>
                  </div>
                  <div className='quantity-pill'>
                    <div className='left-div' style={{ display: 'flex' }}>
                      <div className='left'> - </div>
                      <div className='center'> 1.5 kg </div>
                      <div className='right'> + </div>
                    </div>
                    <div
                      style={{
                        width: '25px',
                        height: '25px',
                        background: '#ff5055',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <img style={{ width: '13px', height: '13px' }} src={shoppingCart} alt='shopping-cart' />
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: '0.5px solid #ff5055',
                      width: '25px',
                      height: '25px',
                      position: 'relative',
                      left: 'calc(100% - 25px)'
                    }}
                  >
                    <img style={{ width: '15px', height: '15px' }} src={receipt} alt='receipt' />
                  </div>
                  <img
                    style={{ width: '86px', height: '55px', margin: '18px 0 18px 0' }}
                    src={watermelon}
                    alt='watermelon'
                  />
                  <div className='name'>Strawberry</div>
                  <div className='quantity-price'>
                    <div className='quantity'>1kg</div>
                    <div className='price'>$4.00</div>
                  </div>
                  <div className='quantity-pill'>
                    <div className='left-div' style={{ display: 'flex' }}>
                      <div className='left'> - </div>
                      <div className='center'> 1.5 kg </div>
                      <div className='right'> + </div>
                    </div>
                    <div
                      style={{
                        width: '25px',
                        height: '25px',
                        background: '#ff5055',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <img style={{ width: '13px', height: '13px' }} src={shoppingCart} alt='shopping-cart' />
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: '0.5px solid #ff5055',
                      width: '25px',
                      height: '25px',
                      position: 'relative',
                      left: 'calc(100% - 25px)'
                    }}
                  >
                    <img style={{ width: '15px', height: '15px' }} src={receipt} alt='receipt' />
                  </div>
                  <img
                    style={{ width: '86px', height: '55px', margin: '18px 0 18px 0' }}
                    src={watermelon}
                    alt='watermelon'
                  />
                  <div className='name'>Strawberry</div>
                  <div className='quantity-price'>
                    <div className='quantity'>1kg</div>
                    <div className='price'>$4.00</div>
                  </div>
                  <div className='quantity-pill'>
                    <div className='left-div' style={{ display: 'flex' }}>
                      <div className='left'> - </div>
                      <div className='center'> 1.5 kg </div>
                      <div className='right'> + </div>
                    </div>
                    <div
                      style={{
                        width: '25px',
                        height: '25px',
                        background: '#ff5055',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <img style={{ width: '13px', height: '13px' }} src={shoppingCart} alt='shopping-cart' />
                    </div>
                  </div>
                </div>
                <div className='card'>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: '50%',
                      border: '0.5px solid #ff5055',
                      width: '25px',
                      height: '25px',
                      position: 'relative',
                      left: 'calc(100% - 25px)'
                    }}
                  >
                    <img style={{ width: '15px', height: '15px' }} src={receipt} alt='receipt' />
                  </div>
                  <img
                    style={{ width: '86px', height: '55px', margin: '18px 0 18px 0' }}
                    src={watermelon}
                    alt='watermelon'
                  />
                  <div className='name'>Strawberry</div>
                  <div className='quantity-price'>
                    <div className='quantity'>1kg</div>
                    <div className='price'>$4.00</div>
                  </div>
                  <div className='quantity-pill'>
                    <div className='left-div' style={{ display: 'flex' }}>
                      <div className='left'> - </div>
                      <div className='center'> 1.5 kg </div>
                      <div className='right'> + </div>
                    </div>
                    <div
                      style={{
                        width: '25px',
                        height: '25px',
                        background: '#ff5055',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                      }}
                    >
                      <img style={{ width: '13px', height: '13px' }} src={shoppingCart} alt='shopping-cart' />
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}
