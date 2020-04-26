// TODO Add a couple lines about each project
const data = [
  {
    title: 'Mickey Mouse with C++',
    subtitle: 'Computer Graphics',
    link: 'https://github.com/MingdiXie/csc418project',
    image: '/images/projects/mickey.png',
    date: '2020-04',
    desc: 'This project is based on ray-tracing in computer graphics, '
      + 'perlin noise is implemented to enhance visual effects on the mickey mouse rock. '
  }, {
    title: 'Learning spanish website',
    subtitle: 'Learning spanish website',
    link: 'https://language-learning-heroku.herokuapp.com',
    image: '/images/projects/learn.png',
    date: '2020-04',
    desc: 'Developed a ReactJS based application website where you could learn spanish. '
     + 'Included a dictionary where you search up either English or Spanish and the user could '
     + 'customize his own word library. Create an admin account to edit user’s information and store '
     + 'it in MongoDB database using express framework.',
  }, {
    title: 'Emotion Detection and human segmentation',
    subtitle: 'Emotion Detection and human segmentation',
    link: 'https://github.com/MingdiXie/CSC420-Image-Understanding',
    image: '/images/projects/portrait.png',
    date: '2019-12',
    desc: 'Built multiple neural network to detect human facial expressions. The convolutional neural '
      + 'network achieved an 85.2% accuracy with residual connection. Generated human segmentation'
      + 'using a pretrained U-net architecture and added gaussian blur to complete a portrait mode.',
  }, {
    title: 'AI pacman',
    subtitle: 'pacman',
    link: 'https://github.com/MingdiXie/CSC384-Introduction-to-Artificial-Intelligence',
    image: '/images/projects/pacman.png',
    date: '2019-07',
    desc: 'AI pacman makes moves based on self-created admissible heuristic to win the game without dying.'
      + ' Model event into baysnet and update hidden markov model to count unknown event\'s probability. '
  }, {
    title: 'Minesweeper',
    subtitle: 'Minesweeper',
    link: 'https://github.com/MingdiXie/Minesweeper',
    image: '/images/projects/phone.jpg',
    date: '2018-12',
    desc: 'Created a minesweeper Android Mobile game. Designed the game logic, '
     + 'implemented UI and graphics with xml, and developed unit tests. '
     + 'Refactored code with MVC and observer design pattern. Implemented '
     + 'additional features such as sign up page and scoreboard. '
  },
];

export default data;
