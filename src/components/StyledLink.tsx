/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react'

export default function StyledLink({title, url, icon}: {title: string, url: string, icon: string}) {
  return (
    <a href={url}>
      <div css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderRadius: '10px',
        cursor: 'pointer',
        padding: '10px',
        gap: '10px',
        width: '52px',
        transition: 'all 0.1s ease-in-out',
        '&:hover': {
          backgroundColor: '#26292C',
          'div': {
            
            transform: 'perspective(400px) rotateX(30deg)',
            boxShadow: '0px 10px 10px rgba(0, 0, 0, 0.5)',
          
          }
        },
      }} onClick={() => {
        window.location.pathname = url
      }}>

        <div css={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50px',
          height: '50px',
          backgroundColor: 'black',
          borderRadius: '10px',
          overflow: 'hidden',
          transition: 'all 0.2s ease-in-out',
        }}>

          <img src={icon} alt={title} css={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }} />

        </div>

        <span css={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: '52px',
          textAlign: 'center',
          fontSize: '10px',
          lineHeight: '1.5',

        }}> {title} </span>

      </div>
    </a>
  )
}
