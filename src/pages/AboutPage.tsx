import React from 'react';
import MainCard from '../components/MainCard';

const AboutPage: React.FC = () => {
  const handleButtonClick = () => {
    console.log('Button clicked');
    // Handle button click logic here
  };
  return (
    <div>
      <MainCard header="About Page"  buttonLabel="Update"
    buttonOnClick={handleButtonClick}>
        <p>This is the About page of the Dashboard App.</p>
      </MainCard>
    </div>
  );
};

export default AboutPage;
