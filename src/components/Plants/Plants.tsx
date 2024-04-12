import React, {useEffect, useState} from "react";
import logo from "../Logo/logo.svg";
import add from './add.png'
import './plants.scss'
import {Link} from "react-router-dom";
import {Plant} from "../../models/Plant";

const fetchPlants = async () => {

        const response = await fetch('/plants',
            {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })

        if (!response.ok) {
            throw new Error(`Failed to fetch plants: ${response.status} ${response.statusText}`)
        }

        return response.json()

    }
;

export const Plants = () => {
    const [plants, setPlants] = useState<Plant[]>()
    const [error, setError] = useState<string>()
    useEffect(() => {
        const loadPlants = async () => {
            try {
                const plantData: Plant[] = await fetchPlants()
                setPlants(plantData)
                console.log(plantData)
            } catch (error) {
                console.error(error)
                setError('Klarte ikke å laste plater')
            }
        }
        loadPlants()
    }, []);
    return (
        <div>
            <div className="grid">
                {error && <div className="error-message">{error}</div>}
                {plants && plants.map((plant) => (
                    <div key={plant.id} className="grid-item">
                        <img src={logo} alt="logo" className="item-logo"/>
                        <span>{plant.name}</span>
                    </div>)
                )}
                <Link to="/leggtil" className="grid-item">
                    <img src={add} alt="logo" className="item-logo"/>
                    <span className="item-name">LEGG TIL PLANTE</span>
                </Link>
            </div>
        </div>
    )
}
