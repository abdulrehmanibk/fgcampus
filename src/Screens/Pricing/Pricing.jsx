import React from 'react'
import ShortBoxList from '../../Components/ShortBoxList/ShortBoxList'
import { Link } from 'react-router-dom'

const Pricing = () => {

    const data = 
    [
        {
          title: "8 Classes / month",
          details: "2 days per week, one on one session, 30 minutes daily.",
          currency: "USD",
          price: 30
        },
        {
          title: "12 Classes / month",
          details: "3 days per week, one on one session, 30 minutes daily.",
          currency: "USD",
          price: 45
        },
        {
          title: "16 Classes / month",
          details: "4 days per week, one on one session, 30 minutes daily.",
          currency: "USD",
          price: 55
        },
        {
          title: "20 Classes / month",
          details: "5 days per week, one on one session, 30 minutes daily.",
          currency: "USD",
          price: 65
        },
        {
          title: "Weekend Classes",
          details: "8 classes per month, one on one session, 30 minutes daily.",
          currency: "USD",
          price: 45
        },
        {
          title: "Hifz Classes",
          details: "20 classes per month, one on one session, 1 hour daily.",
          currency: "GBP",
          price: 80
        },
        {
          title: "One Day Class",
          details: "26 classes per month, one on one session, 30 minuts daily.",
          currency: "GBP",
          price: 15
        },
        {
          title: "Noorani Qaida",
          details: "20 classes per month, one on one session, 20 minutes daily.",
          currency: "GBP",
          price: 20
        }
      ]
      


  return (
    <>
    <ShortBoxList
    heading={
        <>
        <span>Fee</span> and <span>Schedule</span> Plan
        </>
    }
    headpara={'We offer flexible and affordable fee plans to accommodate students from all over the world. Our fee structure is designed to provide high-quality Quranic education at competitive prices.'}
    >
        {data.map((item, index) => (
            <li key={index} style={{textAlign:'left', backgroundColor:'var(--c1)', color:'var(--c3)'}}>
                <h4>{item.title}</h4>
                <p>{item.details}</p>
                <div style={{display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center'}}>
                    <select name="" id="">
                        <option value="USD">USD</option>
                        <option value="CAD">CAD</option>
                        <option value="AUD">AUD</option>
                        <option value="AUR">AUR</option>
                        <option value="GBP">GBP</option>
                    </select>
                    <p style={{fontSize:'3rem', fontWeight:'bold'}}>{item.price}</p>
                </div>
                <Link className='button2' to={'/register'} style={{width:'100%'}}>Start Free Trial</Link>
            </li>
        ))}
    </ShortBoxList>

    <ShortBoxList
    heading={'Customized Plans'}
    headpara={'We also offer customized plans based on your specific needs and preferences. Please contact us to discuss and arrange a personalized fee plan that suits your requirements. '}
        styles={{
            color:'var(--c5)',
        }}
    >
        <li  style={{height:'10rem', backgroundColor:'var(--c5)',color:'var(--c3)'}} >
            <h4>Low-Income Families</h4>
            <p>We offer a 10% discount for low-income families.</p>
        </li>        
        <li style={{height:'10rem', backgroundColor:'var(--c5)', color:'var(--c3)'}}>
            <h4>Referral Discount</h4>
            <p>Refer a friend and receive a 10% discount on your next month’s fee.</p>
        </li>
    </ShortBoxList>

    <ShortBoxList
    heading={'Payment Methods'}
    headpara={'We accept worldwide payment methods.'}
    >

    </ShortBoxList>
    </>
  )
}

export default Pricing;