import './App.css'; // Import the CSS file for footer styles

function Footer() {
  return (
    <footer className='footer'>
      <span>
        Made with{' '}
        <a
          href='https://github.com/kazvee/time-tracker'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='Link to GitHub repository for time tracker'
        >
          <span aria-hidden='true'>❤️</span>
          <span className='sr-only'>GitHub repository</span>
        </a>
      </span>
    </footer>
  );
}

export default Footer;
