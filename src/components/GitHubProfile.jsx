import React, {useState, useEffect} from "react";
import "../css/Header.css"

export default function GitHubProfile(){
    const [userData, setUserData] = useState(null);
    
    const fetchData = async () => {
        try {
            const response = await fetch('https://api.github.com/users/github-john-doe');
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des données GitHub', error)
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return(
        <div className="GitHubProfile">
            {userData ? (
                <div className="username">
                    <h1>{userData.name}</h1>
                </div>
            ) : (
                <p>Chargement en cours...</p>
            )}
        </div>
    );
}