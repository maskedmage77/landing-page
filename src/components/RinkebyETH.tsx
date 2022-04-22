import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

export default function RinkebyETH() {
  return (
    <div style={{
      width: '372px',
    }}>
      <p style={{
        width: '100%',
        overflow: 'hidden',
        fontSize: '12px'
      }}>
        Wallet: 0x0BBaBFF6D8fF25C8f3131bAc663bb3d18EA665C9
        <CopyToClipboard text={"0x0BBaBFF6D8fF25C8f3131bAc663bb3d18EA665C9"}>
          <div className="CopyButton" style={{
            filter: 'invert(100%)',
            display: 'inline-block',
            cursor: 'pointer',
          }}>
            <img src={process.env.PUBLIC_URL + "/icons/copy.png"} style={{
              width: '12px',
              paddingLeft: '10px'
            }}/>
          </div>
          

          {/* <button>Copy to clipboard with button</button> */}
        </CopyToClipboard>
      </p>
      <div style={{
        width: '372px',
        height: '372px',
        borderRadius: '10px',
        overflow: 'hidden',
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
    </div>
  )
}
