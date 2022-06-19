/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import Link from '../types/Link'
import StyledLink from './StyledLink'

export default function LinkCollection({ links, title }: { links: Link[], title: string }) {
  return (
    <div css={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      padding: '10px',
    }}>

      <h2 css={{
        textAlign: 'center',
      }}>
        {title}
      </h2>

      <div css={{
        display: 'flex',
        // gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '10px',
      }}>

        {links.map((link: Link, index: number) => (
          <StyledLink key={index} title={link.title} url={link.url} icon={link.icon} />
        ))}

      </div>

    </div>
  )
}
