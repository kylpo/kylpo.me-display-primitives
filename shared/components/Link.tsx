import React from 'react'
import { css, cx } from '@linaria/core'
import NextLink from 'next/link'
import { GREY } from '../utils/colors'
import { Text } from './Text'

interface Props {
  to: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function Link(props: Props) {
  return (
    <NextLink href={props.to}>
      <Text
        center
        style="t4"
        color="dark"
        className={cx(
          css`
            text-decoration: underline;

            :hover {
              color: ${GREY};
            }
          `,
          props.className
        )}
      >
        {props.children}
      </Text>
    </NextLink>
  )
}
