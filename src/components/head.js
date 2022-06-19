import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => (
  <Helmet title={title} defaultTitle="Joe Mitzman" titleTemplate={`%s`}>
    <html lang="en" />
    <meta property="og:title" content="Joe Mitzman" />
    {/* <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} /> */}
    <meta property="og:url" content="http://joemitz.com" />
    <meta property="og:type" content="website" />
    <meta name="google-site-verification" content="DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk" />
  </Helmet>
);

export default Head;

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
};
