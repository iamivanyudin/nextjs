import React from 'react'
import { storiesOf } from '@storybook/react'
import { linkTo } from '@storybook/addon-links'
import { Button, Block, Header } from 'componentry'

const Welcome = () => (
  <Block>
    <Header textAlign='center' mt={50}>
      It&apos;s hacking time{' '}
      <span role='img' aria-label='wave'>
        👾
      </span>
    </Header>
    <Block maxWidth={800} m='30px auto'>
      <ul>
        <li>
          <Button anchor onClick={linkTo('Landing Screen', 'LandingScreen')}>
            Landing screen
          </Button>
        </li>
      </ul>
    </Block>
  </Block>
)

storiesOf('Welcome').add('to Storybook development', () => <Welcome />)
