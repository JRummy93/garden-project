import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ExploreID() {
    

const [result, setResult] = useState([]);
    
    useEffect(() => {
const fetchData = async () => {
    fetch(`/api/explore`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plantID
        })
      })
        .then(response => response.json())
        .then(data => {
          setResult(data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    };
  fetchData();
    }, []);

}