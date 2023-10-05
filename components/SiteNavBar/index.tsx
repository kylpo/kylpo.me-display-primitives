import Image from 'next/image'
import { Link } from '../../shared/components/Link'
import { css, cx } from '@linaria/core'

const CONTENT_OFFSET = 32

const LINK_STYLE = css`
  padding: 2px 0;
`

export default function SiteNavBar() {
  return (
    <row
      $="nav"
      className={css`
        flex-direction: space-between;
      `}
    >
      <div />
      <row $="ul">
        <li>
          <Link
            to="https://medium.com/@kylpo"
            className={LINK_STYLE}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="https://www.youtube.com/watch?v=L_jzGn5b9H4&list=PLOv-RUzc-4scX3D9krJAoJGWxGKxWzXy6"
            className={LINK_STYLE}
          >
            Talks
          </Link>
        </li>
      </row>
    </row>
  )
}
