import React from 'react'
import { Anchor, Flex, Icon } from 'componentry'
import ProgressiveImage from 'react-progressive-image-loading'

import { component } from './landing-screen.scss'
import backgroundPreview from '@/media/tomek-kaczmarek-preview-165268.jpg'
import background from '@/media/tomek-kaczmarek-165268.jpg'

const LandingScreen = () => (
  <>
    <ProgressiveImage
      preview={backgroundPreview}
      src={background}
      render={(src, style) => (
        <div
          className='section-background'
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: 'cover',
            position: 'fixed',
            top: '0',
            right: '0',
            bottom: '0',
            left: '0',
            ...style,
          }}
          alt='mountains from the air'
        />
      )}
    />
    <Flex direction='column' justify='between' className={component}>
      <Flex align='center' justify='around' direction='column'>
        <div className='message-card p-5 text-center mt-3 mt-lg-5'>
          <h1 data-testid='welcome-text'>
            Hello{' '}
            <span role='img' aria-label='wave'>
              👋
            </span>
          </h1>
          <h3>
            You caught me in the middle of trying out some fun new ideas{' '}
            <span role='img' aria-label='oh no'>
              😱
            </span>
            , please check back soon!
          </h3>
          <div className='mt-4'>
            <a href='https://github.com/iamivanyudin'>
              <Icon id='github' className='h2 mb-0 mx-1' />
            </a>
            <a href='https://www.linkedin.com/in/iamivanyudin/'>
              <Icon id='linkedin' className='h2 mb-0 mx-1' />
            </a>
          </div>
        </div>

        <div className='message-card p-5 text-center mt-3 mt-lg-5'>
          <h1>
            Now running CI/CD{' '}
            <span role='img' aria-label='tada'>
              🎉
            </span>
          </h1>
          <h3>
            This app is linted, unit tested, and acceptance tested in Travis CI and
            deployed on change to master by Zeit
            <span role='img' aria-label='mindblown'>
              🤯
            </span>
            .
          </h3>
          <a
            href='https://travis-ci.com/iamivanyudin/iamivanyudin'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='https://travis-ci.com/iamivanyudin/iamivanyudin.svg?branch=master'
              alt='build status'
            />
          </a>
        </div>
        <div className='message-card p-5 text-center mt-3 mt-lg-5'>
          <h1>
            Now testing with Cypress{' '}
            <span role='img' aria-label='green checkmark'>
              ✅
            </span>
          </h1>
          <h3>
            This app is acceptance tested with Cypress and really just for funesies the
            test output is included as status checks and PR comments using a Cypress
            Project Dashboard and Github Integration.
          </h3>
          <a
            href='https://dashboard.cypress.io/#/projects/ma3dkn/runs'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src='https://img.shields.io/badge/cypress-dashboard-brightgreen.svg'
              alt='Cypress Dashboard'
            />
          </a>
        </div>
      </Flex>
      <div className='p-3 text-right w-100'>
        <Anchor
          href='https://unsplash.com/@dertomek'
          className='text-gray-500'
          target='_blank'
          rel='noopener noreferrer'
        >
          Background image courtesty of Tomek Kaczmarek - Unsplash
        </Anchor>
      </div>
    </Flex>
  </>
)

export default LandingScreen
