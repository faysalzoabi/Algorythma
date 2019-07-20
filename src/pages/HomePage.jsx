import React from 'react'
import Header from '../components/Header/Header';
import DataSection from '../components/DataSection/DataSection';
import NavBar from '../components/NavBar/NavBar';
export default function HomePage() {
    return (
        <div className="landpage_container">
            <NavBar/>
            <Header/>
            <DataSection/>
        </div>
    )
}
