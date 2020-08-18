import React, { Component } from 'react';
import Calculus from './Calculus';
import Display from './Display';

const Container = ({props}) => {
  return (
    <div className="container">
        <h1 className="container__title">Let's plan your <span>saving goals.</span></h1>
        <div className="container__box">
            <div className="container__box-logo">
                <h1 className="logo">b</h1>
                <h1>Buy a house</h1>
                <p>Saving goal</p>
            </div>
            <Calculus/>
            <Display/>
        </div>
    </div>
  )
}

export default Container;
