/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Business1 from '../../../assets/images/BUSINESS/Business1.png';
import Business2 from '../../../assets/images/BUSINESS/Business2.png';
import Business3 from '../../../assets/images/BUSINESS/Business3.png';
import Business4 from '../../../assets/images/BUSINESS/Business4.png';
import Business5 from '../../../assets/images/BUSINESS/Business5.png';
import Business6 from '../../../assets/images/BUSINESS/Business6.png';
import Business7 from '../../../assets/images/BUSINESS/Business7.png';
import BusinessStart from '../../../assets/images/BUSINESS/BusinessStart.png';

const businessImages = [
BusinessStart, Business1, Business2, Business3, Business4, Business5, Business6, Business7,
];



export default function InstagramPost() {
  const [currentBusinessIndex, setCurrentBusinessIndex] = React.useState(0);

  const handleBusinessImageClick = (index) => {
    setCurrentBusinessIndex(index);
  };


  return (
    <div className='email-samples container' id="email-samples">
     <div className="text-center w3-margin-top">
    <h1 className='fw-bold text-primary px-2'>
      <i className='fw-bold'>EMAIL CAMPAIGN SAMPLES</i></h1> 
      <h4> Unified Graphics-Maximize your brand’s visibility with multi-platform marketing graphics, ensuring consistent and captivating visuals across all your marketing channels.</h4>
      </div>
        <div className="w3-padding-32">
        <div className="row d-flex justify-content-center align-items-center">
        <div className="col-sm-1 col-md-1 col-lg-1 ">
           </div>
           <div className="col-sm-10 col-md-10 col-lg-10 ">
            <Card
            className="shadow my-1"
      variant="outlined"
      sx={{
        minWidth: 225,
        '--Card-radius': (theme) => theme.vars.radius.xs,
      }}
    >
      <img src={businessImages[currentBusinessIndex]} className='w-100' alt='' loading="lazy" />

      <CardContent orientation="horizontal" 
      sx={{ alignItems: 'center', mx: -1 }}>
        <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 0.5, 
            mx: 'auto' }}>
          {businessImages.map((_, index) => (
            <Box
            className="shadow my-4"
              key={index}
              onClick={() => handleBusinessImageClick(index)}
              sx={{
                borderRadius: '50%',
                width: '10px',
                height: '10px',
                cursor: 'pointer',
                bgcolor: index === currentBusinessIndex ? 'primary.solidBg' : 'background.level3',
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
            </div>
            <div className="col-sm-1 col-md-1 col-lg-1 ">
            </div>
                </div>
                </div>
    </div>

  );
}
