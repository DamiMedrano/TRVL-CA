import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
   return (
      <div className='hero-container'>
         <video src='https://r2---sn-bg0eznek.googlevideo.com/videoplayback?expire=1618706605&ei=TSx7YNupKamfmLAPpNiYoAw&ip=165.225.77.42&id=o-AKU8lVKlDCEzeVva1DcGGzlIi0Y_v63jLiI1dVawwceE&itag=137&aitags=133%2C134%2C135%2C136%2C137%2C160%2C242%2C243%2C244%2C247%2C248%2C271%2C278%2C313&source=youtube&requiressl=yes&vprv=1&svpuc=1&mime=video%2Fmp4&ns=zN8kQqFMgwk3nbiq6Ga-NPMF&gir=yes&clen=74970625&dur=178.680&lmt=1608487072194928&fvip=2&keepalive=yes&fexp=24001373,24007246&c=WEB&txp=5432432&n=hG4oBbdsXm4Z3-&sparams=expire%2Cei%2Cip%2Cid%2Caitags%2Csource%2Crequiressl%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cdur%2Clmt&sig=AOq0QJ8wRQIgEM1GJki9nyw2KHijpf9rKJ8t1MmIjWv0tuTQj3ChPFsCIQDM_XWY85gkKC9rmHp5-I8zOjn5-jjkNUrWBEPCd3bavg%3D%3D&rm=sn-25gkr7l&req_id=f9f87991c3b3a3ee&ipbypass=yes&redirect_counter=2&cm2rm=sn-5gol77d&cms_redirect=yes&mh=7T&mip=201.231.19.72&mm=34&mn=sn-bg0eznek&ms=ltu&mt=1618697979&mv=u&mvi=2&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgKYtNrZnUU8LNLf72jYIeDbogDx4wSwPVfUczolrTp2QCIQCHcIT13pNOAK35YC-MB7fsTgtqz7Rdt3vJJkE9bETcjg%3D%3D' autoPlay loop muted />
         <h1>CANADA AWAITS</h1>
         <p>What are you waiting for?</p>
         <div className='hero-btns'>
            <Button
               className='btns'
               buttonStyle='btn--outline'
               buttonSize='btn--large'
            >
               GET STARTED
            </Button>
            <Button
               className='btns'
               buttonStyle='btn--primary'
               buttonSize='btn--large'
            >
               WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
         </div>
      </div>
   );
}

export default HeroSection;
