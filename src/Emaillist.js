import React, { useEffect, useState } from 'react'
import "./css/emaillist.css"

import EmailListSetting from './EmailListSetting'
import Emailtype from './Emailtype'
import Emailbody from './Emailbody'
import { db } from './firebase'
import { collection, onSnapshot } from 'firebase/firestore';
function Emailist() {

    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(collection(db, 'emails'), (snapshot) => {
          setEmails(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    
        return () => {
          unsubscribe();
        };
      }, []);

    return (
        <div className="emaillist">
            <EmailListSetting/>
            <Emailtype/>
           

{
    emails.map(({id, data})=>{
        return <Emailbody 
        key={id} 
        name={data.fromName} 
        email={data.from}  
        subject={data.subject} 
        message={data.message}
        time={new Date(data.timestamp?.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true })} />
    })
}
            
            
        </div>
    )
}

export default Emailist
