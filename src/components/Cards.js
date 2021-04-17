import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
   return (
      <div className='cards'>
         <h1>Check out these beautiful destinations!</h1>
         <div className='cards__container'>
            <div className='cards__wrapper'>
               <ul className='cards__items'>
                  <CardItem
                     src='https://images.unsplash.com/photo-1562674111-fa6a64c1b345?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                     text='See the outstanding beauty Moraine Lake, Banff, Alberta'
                     label='Explore'
                     path='/services'
                  />
                  <CardItem
                     src='https://images.unsplash.com/photo-1542704792-e30dac463c90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                     text='Explore Toronto, a metropolis with a core of soaring skyscrapers'
                     label='Explore'
                     path='/services'
                  />
               </ul>
               <ul className='cards__items'>
                  <CardItem
                     src='https://images.unsplash.com/photo-1576377984262-bbc69545fe29?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80'
                     text='Aurora borealis in Canada? Yes, to be seen at Yellowknife'
                     label='Adventure'
                     path='/services'
                  />
                  <CardItem
                     src='https://images.unsplash.com/photo-1559264833-8d4709883e01?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80'
                     text='Visit the Biosphere in Montreal at night for this mesmerizing view'
                     label='Explore'
                     path='/products'
                  />
                  <CardItem
                     src='https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
                     text='Take your first step today, SIGN UP!'
                     label='Sign Up'
                     path='/sign-up'
                  />
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Cards;
