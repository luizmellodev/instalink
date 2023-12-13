// components/UsefulLinks.js
import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const usefulLinks = [
  { label: 'EN', text: 'Can I use?', link: 'https://caniuse.com/' },
  { label: 'PT/BR', text: 'Artigo sobre Flexbox', link: 'https://medium.com/collabcode/pare-de-chutar-e-aprenda-como-funciona-flexbox-01-f75be5f35d3d' },
  // Add more useful links...
];

function UsefulLinks() {
  return (
    <Box>
      <Typography variant="h4">Links úteis</Typography>
      <Box>
        {usefulLinks.map((link) => (
          <Button key={link.label} href={link.link} target="_blank" rel="noopener" style={{ background: 'linear-gradient(to right, #8e2de2, #4a00e0)' }}>
            {link.label && <span className="new">{link.label}</span>}
            <span className="uteis">{link.text}</span>
          </Button>
        ))}
      </Box>
    </Box>
  );
}

export default UsefulLinks;