import React from 'react'

export default function RinkebyETH() {
  return (
    <div className="App" style={{
      width: '372px',
      height: '372px',
      borderRadius: '10px',
      overflow: 'hidden',
      margin: '20px',
      filter: 'invert(100%)',
    }}>
      <iframe id="RinkebyFrame" src="https://rinkebyfaucet.com/" frameBorder="0"  allow="encrypted-media;" style={{
        overflow: 'none',
        width: '412px',
        height: '585px',
        borderRadius: '10px',
        marginTop: '-178px',
        marginLeft: '-23px',
      }}/>
    </div>
  )
}
