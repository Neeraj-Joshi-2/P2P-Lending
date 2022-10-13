import React from 'react'
import background from "../lending4.jpg";

const About = () => {
    const divStyle = {
        width: '100%',
        height: '689px',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover'
    };
  return (
    <div>
        Peer-to-peer (P2P) lending enables individuals to obtain loans directly from other individuals, cutting out the financial institution as the middleman. Websites that facilitate P2P lending have greatly increased its adoption as an alternative method of financing.
    </div>
  )
}

export default About