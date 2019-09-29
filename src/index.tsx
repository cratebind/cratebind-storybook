/**
 * @class ExampleComponent
 */

import * as React from 'react'
import Button from './components/Button';

export type Props = { text: string }

const ExampleComponent = ({ text }: Props) => {
  return (
    <div>
      Example Component: {text}
    </div>
  )
}

export {
  Button,
}
