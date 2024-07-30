
// Header data for the "Header" section
export const headerData = {
    picture: "https://avatars.githubusercontent.com/u/49352785?v=4",
    name: "Luiz Mello",
    username: "@luizmello.dev",
  };

// Social media data for the "About me" section
export const socialMediaData = [
    // Each object contains the title, color, link, icon, and username
    // You can use a gradient object or a string (the color code)
    // i.e color: '#FF0000' or color: { start: '#FF0000', end: '#0000FF' }
    {
        title: 'GitHub',
        color: { start: '#171515', end: '#2b2b2b' },
        link: 'https://github.com/luizmello',
        icon: 'FaGithub',
        username: 'luizmello',
    },
    {
        title: 'Instagram',
        color: { start: '#F58529', end: '#DD2A7B' },
        link: 'https://www.instagram.com/luizmello',
        icon: 'FaInstagram',
        username: 'luizmello',
    },
    {
        title: 'Facebook',
        color: { start: '#3b5998', end: '#8b9dc3' },
        link: 'https://www.facebook.com/luizmello',
        icon: 'FaFacebook',
        username: 'luizmello',
    },
    {
        title: 'LinkedIn',
        color: { start: '#0072b1', end: '#00a0dc' },
        link: 'https://www.linkedin.com/in/luizmello/',
        icon: 'FaLinkedin',
        username: 'luizmello',
    },
    {
        title: 'X',
        color: { start: '#1DA1F2', end: '#AAB8C2' },
        link: '/sadsadasdv',
        icon: 'FaTwitter',
        username: 'luizmello',
    },
    {
        title: 'TikTok',
        color: { start: '#69C9D0', end: '#AA0A3A' },
        link: 'https://www.tiktok.com/@luizmello.dev',
        icon: 'FaTiktok',
        username: '@luizmello.dev',
    },
];

// Useful links data for the "Useful Links" section
export const usefulLinksData = [
    // Each object contains the title, gradient color, link, and optional isNew property
    // You can use a gradient object or a string (the color code)
    // i.e color: '#FF0000' or color: { start: '#FF0000', end: '#0000FF' }
    // You can also add a isNew property to display a "New!" badge
    // i.e isNew: true
    {
        title: 'Understanding React Hooks',
        color: { start: '#696F6F', end: '#5F8C90' },
        link: 'https://reactjs.org/docs/hooks-intro.html',
        isNew: true, // Indicates if the link is new
    },
    {
        title: 'CSS Grid Guide',
        color: { start: '#696F6F', end: '#5F8C90' },
        link: 'https://css-tricks.com/snippets/css/complete-guide-grid/',
        isNew: false,
    },
    {
        title: 'JavaScript: The Definitive Guide',
        color: { start: '#696F6F', end: '#5F8C90' },
        link: 'https://www.oreilly.com/library/view/javascript-the-definitive/9781449345060/',
        isNew: true,
    },
    {
        title: 'The Road to React',
        color: { start: '#696F6F', end: '#5F8C90' },
        link: 'https://reactjs.org/learn/the-road-to-learn-react',
        isNew: true,
    },
    {
        title: 'Learn CSS Layout',
        color: { start: '#696F6F', end: '#5F8C90' },
        link: 'https://learnlayout.com/',
        isNew: false,
    },
    {
        title: 'Web Development Bootcamp',
        color: { start: '#696F6F', end: '#5F8C90' },
        link: 'https://www.udemy.com/course/the-web-developer-bootcamp/',
        isNew: true,
    },
    {
        title: 'JavaScript Info',
        color: { start: '#696F6F', end: '#5F8C90' },
        link: 'https://javascript.info/',
        isNew: false,
    },
    {
        title: 'Modern JavaScript Tutorial',
        color: { start: '#696F6F', end: '#5F8C90' },
        link: 'https://javascript.info/first-steps',
        isNew: false,
    },
];
