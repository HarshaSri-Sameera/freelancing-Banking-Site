import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import '../css/DashBoard.css';
import DateTimeDisplay from "../pages/DateTimeDisplay";
import Sidebar from '../pages/Sidebar';
import MainContent from "../pages/MainContent";
import Details_1 from "../pages/Details_1";
import Details_2 from "../pages/Details_2";
import logo from "../assets/logo.jpeg";
import graph from "../assets/graph.png";
import background from "../assets/background.svg";
import AccountBalanceOutlinedIcon from '@mui/icons-material/AccountBalanceOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import profile from '../assets/profile.svg';

function DashBoard() {
  const options = [
    { logo: AccountBalanceOutlinedIcon, name: 'Summary', component: <Details_1/> },
    { logo: PaymentOutlinedIcon, name: 'Transfers', component: <Details_2/> },
    { logo: Person2OutlinedIcon, name: 'profile', component: null },
    { logo: BookmarkAddedOutlinedIcon, name: 'حدد الجزء الخاص بك', component: null },
    { logo: DescriptionOutlinedIcon, name: 'e-Statement', component: null },
    { logo: SupportAgentOutlinedIcon, name: 'e-Services', component: null },
    { logo: AddCardOutlinedIcon, name: 'cards', component: null },
    { logo: SecurityOutlinedIcon, name: 'Security', component: null },
    { logo: SettingsOutlinedIcon, name: 'Settings', component: null },
  ];

  const [selectedItem, setSelectedItem] = useState(options[0]);
  
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  
  return (
    // <div className="container-fluid" style={{ padding: '10px 70px'}}>
    //   <div className="row text-white col-container">
    //     <div className="col-md-2 box">My Accounts & Profile</div>
    //     <div className="col-md-2 box">Payments / Transfers</div>
    //     <div className="col-md-1 box">Bill Payments</div>
    //     <div className="col-md-2 box">Deposit & Investment</div>
    //     <div className="col-md-1 box">e-Tax</div>
    //     <div className="col-md-1 box">e-Services</div>
    //     <div className="col-md-2 box">Request & Enquiries</div>
    //   </div>
    //   <div className="row justify-content-space-between p-2 mt-2" style={{display:'flex'}}>
    //     <div className="col-lg-3" style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
    //       <div style={{backgroundColor: '#DCDCE3', padding: '3px 6px'}}>
    //         <span><b>Last Login Date & Time</b></span>
    //         <DateTimeDisplay />
    //       </div>
    //     </div>
    //     <div className="col-lg-4" style={{backgroundColor: '#DCDCE3', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft:'36vw', padding: '3px 6px'}}>
    //       <div style={{alignItems: 'left'}}>
    //         <span style={{color: '#444'}}><b>Welcome</b></span>
    //         <br />
    //         <span style={{color: '#652a84'}}><b><em>Mr. SANKAR SATYA<br/>CHANDRAMOULI</em></b></span>
    //         <br />
    //         <span style={{color: '#652a84'}}><b><em>sankarsatyamouli@gmail.com -</em></b></span>
    //         <br />
    //         <a href="" className="please-verify"><font color='green'><b><em>Please Verify</em></b></font></a>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="row mt-3 d-flex">
    //     <div className="col-lg-3 narrow-rectangular-box">
    //       Quick links &nbsp; <i className="bi bi-chevron-right"></i>
    //     </div>
    //     <div className="col-lg-6 narrow-rectangular-box2" style={{width: '66vw', justifyContent:'left'}}>
    //       You are here: &nbsp;/ My Accounts & Profile / <MainContent selectedItem={selectedItem} />
    //     </div>
    //   </div>
    //   <div className="row mt-3" >
    //     <div className="col-lg-3" style={{paddingLeft: '5px'}}>
    //       <Sidebar options={options} onItemClick={handleItemClick} selectedItem={selectedItem} />
    //     </div>
    //     <div className="col-lg-6 mt-2">
    //       {selectedItem && selectedItem.component}
    //       <div style={{ margin: '20px', backgroundColor: 'cornsilk', width:'64vw', padding:'10px'}}>
    //           <p>
    //               <span style={{ color: 'red' }}>*</span> If you have any hidden accounts, please unhide through the tab Profile &gt; Manage A/c Display &gt; UnHide Accounts or UnHide Debit Accounts.<br/>
    //           </p>
    //           <p>
    //               <span style={{ color: 'red' }}>*</span> Capital Gains Plus Account can be viewed under Deposit Accounts.
    //           </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 mt-3" style={{height: '100vh'}}>
          <Sidebar options={options} onItemClick={handleItemClick} selectedItem={selectedItem} />
        </div>
        <div className="col-lg-10" style={{height: '100vh'}}>
          <div className="row mt-3 text-white col-container">
            <div className="col-md-2 box" style={{fontFamily: 'Tektur, sans-serif'}}>My Accounts & Profile</div>
            <div className="col-md-2 box" style={{fontFamily: 'Tektur, sans-serif'}}>Payments / Transfers</div>
            <div className="col-md-1 box" style={{fontFamily: 'Tektur, sans-serif'}}>Bill Payments</div>
            <div className="col-md-3 box" style={{fontFamily: 'Tektur, sans-serif'}}>Deposit & Investment</div>
            <div className="col-md-1 box" style={{fontFamily: 'Tektur, sans-serif'}}>e-Tax</div>
            <div className="col-md-1 box" style={{fontFamily: 'Tektur, sans-serif'}}>Services</div>
            <div className="col-md-2 box" style={{fontFamily: 'Tektur, sans-serif'}}>Request & Enquiries</div>
          </div>
          <div className="row mt-4" style={{backgroundImage: `url(${background})`}}> 
            <div className="row" style={{boxShadow: '2px 10px 10px #ccc'}}>
              <div style={{fontFamily: 'Tektur, sans-serif', color: '#333333', marginLeft: '15px', padding: '12px'}}>Your Last Login: <DateTimeDisplay /></div> 
              <hr />
              <div className="col-lg-4">              
                <p className='font-weight-light' style={{ fontFamily: 'Helvetica Neue Thin, Helvetica, Arial, sans-serif', fontSize: '45px', color: '#333333', padding: '12px', marginTop: '40px'}}>Dashboard</p>
              </div>
              <div className="col-lg-3" style={{marginLeft: '60px'}}>
                <img src={graph} alt="" width='80%' height='100%'/>
              </div>
              <div className="col-lg-4" style={{fontFamily: 'Helvetica Neue Thin, Helvetica, Arial, sans-serif'}}>
               <div className="row" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'end'}}>
                  <div className="col-auto">
                    <div><em>Account Type: Savings <br /> John Smith</em></div>
                  </div>
                  <div className="col-3">
                    <img src={profile} alt="" width='100%' height='100%' />
                  </div>
               </div>
              </div>
            </div>
            <div className="row mt-4" style={{marginLeft: '1px', fontFamily: 'Tektur, sans-serif'}}>
              <div className="col-lg-2 narrow-rectangular-box">
                Quick links &nbsp; <i className="bi bi-chevron-right"></i>
              </div>
              <div className="col-lg-6 narrow-rectangular-box2" style={{width: '66vw', justifyContent:'left'}}>
                You are here: &nbsp;/ My Accounts & Profile / <MainContent selectedItem={selectedItem} />
              </div>
            </div>
            <div className="row mt-3" >
              <div className="col-lg-6 mt-2">
                {selectedItem && selectedItem.component}
                <div style={{ margin: '20px', backgroundColor: 'cornsilk', width:'80vw', padding:'10px'}}>
                    <p>
                        <span style={{ color: 'red' }}>*</span> If you have any hidden accounts, please unhide through the tab Profile &gt; Manage A/c Display &gt; UnHide Accounts or UnHide Debit Accounts.<br/>
                    </p>
                    <p>
                        <span style={{ color: 'red' }}>*</span> Capital Gains Plus Account can be viewed under Deposit Accounts.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
