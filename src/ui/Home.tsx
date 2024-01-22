import React from 'react'
import { Button } from '../components/Button'
import { Section } from '../components/Section'
import { Icon } from '../components/Icon'
import styles from './Home.module.css'

export function Home() {
  return (
    <div className={styles.banner}>
      <Section>
        <h2>
        Welcome To BeeBets
        </h2>
        <p style={{ wordWrap: 'break-word' }}>
        Your decentralized Solana casino, lightning fast and no registration needed!
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button
            as="a"
            color="white"
            href="https://raydium.io/swap/xxxxxxxxxxxxx"
            target="_blank"
            icon={<Icon.ExternalLink />}
          >
            Buy $BeeBets
          </Button>
        </div>
      </Section>
    </div>
  )
}
