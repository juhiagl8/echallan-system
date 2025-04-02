import React, { useState, useEffect } from 'react';
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { db, auth } from "../firebase/firebaseConfig";

function Dashboard({ user }) {
  const [challans, setChallans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchChallans = async () => {
      try {
        const q = query(
          collection(db, "challans"),
          where("createdBy", "==", user.uid),
          orderBy("createdAt", "desc")
        );
        
        const querySnapshot = await getDocs(q);
        const challanList = [];
        
        querySnapshot.forEach((doc) => {
          challanList.push({
            id: doc.id,
            ...doc.data()
          });
        });
        
        setChallans(challanList);
      } catch (error) {
        console.error("Error fetching challans:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchChallans();
  }, [user.uid]);
  
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Welcome, {user.email}</p>
      
      <div className="challans-section">
        <h3>Your Recent Challans</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : challans.length === 0 ? (
          <p>No challans found.</p>
        ) : (
          <ul className="challan-list">
            {challans.map(challan => (
              <li key={challan.id} className="challan-item">
                <p>Challan Number: {challan.challanNo}</p>
                <p>Vehicle: {challan.vehicleNo}</p>
                <p>Status: {challan.status}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Dashboard;