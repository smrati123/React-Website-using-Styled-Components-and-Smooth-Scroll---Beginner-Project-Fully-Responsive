import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer,FooterWrap,
FooterLinksContainer,FooterLinksWrapper,
FooterLinksItems,FooterlinkTitle,FooterLink,
SocialMedia,SocialMediaWrap,SocialLogo,WebsiteRights,
SocialIconLink,SocilaIcons } from './footerElements';

const Footer = () => {
    return (
       <FooterContainer>
           <FooterWrap>
               <FooterLinksContainer>
                   <FooterLinksWrapper>
                       <FooterLinksItems>
                           <FooterlinkTitle>About Us</FooterlinkTitle>
                               <FooterLink to="/">How It Works</FooterLink>
                               <FooterLink to="/">Testimonials</FooterLink>
                               <FooterLink to="/">Careers</FooterLink>
                               <FooterLink to="/">Investors</FooterLink>
                               <FooterLink to="/">Terms of Services</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                           <FooterlinkTitle>Contact Us</FooterlinkTitle>
                               <FooterLink to="/">Contact</FooterLink>
                               <FooterLink to="/">Support</FooterLink>
                               <FooterLink to="/">Destinations</FooterLink>
                               <FooterLink to="/">Sponsorships</FooterLink>
                        </FooterLinksItems>
                   </FooterLinksWrapper>
                   <FooterLinksWrapper>
                       <FooterLinksItems>
                           <FooterlinkTitle>Videos</FooterlinkTitle>
                               <FooterLink to="/">Submit Video</FooterLink>
                               <FooterLink to="/">Ambassadors</FooterLink>
                               <FooterLink to="/">Agency</FooterLink>
                               <FooterLink to="/">Influencer</FooterLink>
                               <FooterLink to="/">Terms of Services</FooterLink>
                        </FooterLinksItems>
                        <FooterLinksItems>
                           <FooterlinkTitle>Social Media</FooterlinkTitle>
                               <FooterLink to="/">Instagram</FooterLink>
                               <FooterLink to="/">Facebook</FooterLink>
                               <FooterLink to="/">Youtube</FooterLink>
                               <FooterLink to="/">Twitter</FooterLink>
                        </FooterLinksItems>
                   </FooterLinksWrapper>
               </FooterLinksContainer>
               <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">Smrati</SocialLogo>
                        <WebsiteRights>Smrati @ {new Date().getFullYear()} All right reserved.</WebsiteRights>
                        <SocilaIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube/>
                            </SocialIconLink>
                            <SocialIconLink href="//www.twitter.com/briandesignz" target="_blank" aria-label="Twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                <FaLinkedin/>
                            </SocialIconLink>
                        </SocilaIcons>
                    </SocialMediaWrap>
                </SocialMedia>
           </FooterWrap>
       </FooterContainer>
    );
};

export default Footer
