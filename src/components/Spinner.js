import React, { Component } from 'react'
import loading from './../spinner.gif'

export default function Spinner() {
  return (
    <div className='text-center'>
        <img className='my-3' src={loading} alt="loading" />
      </div>
  )
}
