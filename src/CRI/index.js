import React, { useState, useEffect } from 'react'
import './style.css'
import Logo from '../assets/logo.png'
import Img1 from '../assets/1.png'
import Img2 from '../assets/2.png'
import Img3 from '../assets/3.png'
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import CallIcon from '@mui/icons-material/Call';

const CRI = () => {

    const [modifiedText, setModifiedText] = useState("");

    useEffect(() => {
        const originalText =
            "CHEMICALS & PROCESS ^ POWER ^ WATER & WASTE WATER ^ OILS & GAS ^ PHARMA ^ SUGARS & DISTILLERIES ^ PAPER & PULP ^ MARINE & DEFENCE ^ METAL & MINING ^ FOOD & BEVERAGE ^ PETROCHEMICAL & REFINERIES ^ SOLAR ^ BUILDING ^ HVAC ^ FIRE FIGHTING ^ AGRICULTURE & RESIDENTIAL";

        const replaceAmpersand = (text) => {
            return text.split('^').map((part, index, array) =>
                index === array.length - 1 ? part : (
                    <React.Fragment key={index}>
                        {part}
                        <span className="red-line"></span>
                    </React.Fragment>
                )
            );
        };

        setModifiedText(replaceAmpersand(originalText).flat());
    }, []);

    return (
        <>
            <div className='cri'>
                <div className='img'>
                    <img src={Logo} alt='' />
                </div>
                <div className='row row1 mt-4'>
                    <div className='col-md-4'>
                        <img src={Img1} alt='' className='w-100 img1' />
                    </div>
                    <div className='col-md-8'>
                        <h5><strong> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</strong></h5>
                        <ul>
                            <li><h6> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</h6></li>
                            <li><h6> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </h6></li>
                        </ul>
                        <img src={Img2} alt='' className='w-100' />
                        <h6>Government of India has awarded the <strong>"National Energy Conservation Award 2018"</strong>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h6>
                    </div>
                </div>
                <h6 className='mt-5'>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </h6>
                <div className='img'>
                    <img src={Img3} alt='' className='w-100 img3' />
                </div>
                <h6 className='mt-3' style={{ textAlign: 'center' }}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </h6>
                <hr />
                <h6 style={{ textAlign: 'center' }}><strong>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</strong></h6>
                <h6 className='h' style={{ textAlign: 'center', position: 'relative' }}>
                    {modifiedText}
                </h6>
                <div className='footer'>
                    <div className='row'>
                        <div className='col-sm-4 col-12 mb-3'>
                            <h6><CallIcon />Toll free <strong>1800 200 1234</strong></h6>
                        </div>
                        <div className='col-sm-4 col-12 mb-3'>
                            <h6><FacebookRoundedIcon />www.facebook.com/cruimps</h6>
                        </div>
                        <div className='col-sm-4 col-12 mb-3'>
                            <h6><LanguageRoundedIcon />www.crigroups.com</h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CRI