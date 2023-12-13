// // components/SocialLinks.js
// import React from 'react';
// import { List, ListItem, ListItemText, ListItemIcon, Avatar, Typography, } from '@mui/material';

// const socialLinks = [
//   { name: 'GitHub', icon: 'github', link: 'https://github.com/luizmellodev/' },
//   { name: 'LinkedIn', icon: 'linkedin', link: 'https://www.linkedin.com/in/luizmellodev/' },
//   { name: 'TikTok', icon: 'tiktok', link: 'https://www.tiktok.com/@euluizmello' },
//   { name: 'Discord', icon: 'discord', link: 'https://discord.bio/p/luiz' },
//   { name: 'Rocketseat', icon: 'rocketseat', link: 'https://app.rocketseat.com.br/me/luizmellodev' },
//   { name: 'Instagram', icon: 'instagram', link: 'https://www.instagram.com/luizmello.dev/' },
// ];

// function SocialLinks() {
//   return (
//     <Box>
//       <Typography variant="h4">Sobre mim</Typography>
//       <List>
//         {socialLinks.map((link) => (
//           <ListItem key={link.name} button component="a" href={link.link} target="_blank" rel="noopener">
//             <ListItemIcon>
//               {link.icon === 'tiktok' ? (
//                 <Avatar src="tiktok.png" alt="TikTok logo" />
//               ) : (
//                 <i data-feather={link.icon}></i>
//               )}
//             </ListItemIcon>
//             <ListItemText>
//               <Typography variant="h6">{link.name}</Typography>
//               <Typography variant="subtitle1">@luizmellodev</Typography>
//             </ListItemText>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );
// }

// export default SocialLinks;
