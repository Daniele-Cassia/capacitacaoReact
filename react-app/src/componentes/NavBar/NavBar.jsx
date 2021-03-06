// import { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'



export default function NavBar(props){

    function setNavOption(nthOpt) {
        const n = document.getElementsByClassName("NavOpt");

        for (let i = 0; i < n.length; i++) {
            n[i].style.borderLeft =  " 5px solid rgba(69, 123, 157, 0)";

            const numPaths = n[i].children[0].children[0].childElementCount;
            const paths =  n[i].children[0].children[0].children;
            for (let j = 0; j  < numPaths; j++) {
                paths[j].setAttribute("fill", "#1D3557");
            }
        }

        const pathsOfSvgOpt = n[nthOpt].children[0].children[0].children;
        for (let i = 0; i < pathsOfSvgOpt.length; i++) {
            pathsOfSvgOpt[i].setAttribute("fill", "#457B9D");
        }
        n[nthOpt].style.borderLeft =  " 5px solid rgba(69, 123, 157, 1)";
    }


    return(
        <div className="NavBar">
            <div>
                <div className="NavOpt">
                    <Link onClick={() => setNavOption(0)} to="/InSystem/imovelregistrar">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40 6H24C22.9 6 22 6.9 22 8V11.22C22 11.22 22 11.22 22.02 11.24L32.02 20.24C33.28 21.36 34 23 34 24.7V26H38V30H34V34H38V38H34V42H40C41.1 42 42 41.1 42 40V8C42 6.9 41.1 6 40 6ZM30 14H26V10H30V14ZM38 22H34V18H38V22ZM38 14H34V10H38V14Z" fill="#1D3557"/>
                            <path d="M30 40V24.7C30 24.14 29.76 23.6 29.34 23.22L19.34 14.22C18.96 13.86 18.48 13.7 18 13.7C17.52 13.7 17.04 13.88 16.66 14.22L6.66 23.22C6.24 23.58 6 24.12 6 24.7V40C6 41.1 6.9 42 8 42H12C13.1 42 14 41.1 14 40V32H22V40C22 41.1 22.9 42 24 42H28C29.1 42 30 41.1 30 40Z" fill="#1D3557"/>
                        </svg>
                    </Link>
                </div>

                <div className="NavOpt">
                    <Link onClick={() => setNavOption(1)} to="/InSystem/imovelregistrar">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4ZM32 26H26V32C26 33.1 25.1 34 24 34C22.9 34 22 33.1 22 32V26H16C14.9 26 14 25.1 14 24C14 22.9 14.9 22 16 22H22V16C22 14.9 22.9 14 24 14C25.1 14 26 14.9 26 16V22H32C33.1 22 34 22.9 34 24C34 25.1 33.1 26 32 26Z" fill="#1D3557"/>
                        </svg>
                    </Link>
                </div>

                <div className="NavOpt">
                    <Link onClick={() => setNavOption(2)} to="/InSystem/imovelregistrar">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M32 22C35.32 22 37.98 19.32 37.98 16C37.98 12.68 35.32 10 32 10C28.68 10 26 12.68 26 16C26 19.32 28.68 22 32 22ZM16 22C19.32 22 21.98 19.32 21.98 16C21.98 12.68 19.32 10 16 10C12.68 10 10 12.68 10 16C10 19.32 12.68 22 16 22ZM16 26C11.34 26 2 28.34 2 33V36C2 37.1 2.9 38 4 38H28C29.1 38 30 37.1 30 36V33C30 28.34 20.66 26 16 26ZM32 26C31.42 26 30.76 26.04 30.06 26.1C30.1 26.12 30.12 26.16 30.14 26.18C32.42 27.84 34 30.06 34 33V36C34 36.7 33.86 37.38 33.64 38H44C45.1 38 46 37.1 46 36V33C46 28.34 36.66 26 32 26Z" fill="#1D3557"/>
                        </svg>  
                    </Link>
                </div>


            </div>

            <div>
                <Link onClick={() => console.log("coe")} to="/InSystem/imovelregistrar">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 10H22C23.1 10 24 9.1 24 8C24 6.9 23.1 6 22 6H10C7.8 6 6 7.8 6 10V38C6 40.2 7.8 42 10 42H22C23.1 42 24 41.1 24 40C24 38.9 23.1 38 22 38H10V10Z" fill="#E63946"/>
                        <path d="M41.3 23.3L35.72 17.72C35.08 17.08 34 17.52 34 18.42V22H20C18.9 22 18 22.9 18 24C18 25.1 18.9 26 20 26H34V29.58C34 30.48 35.08 30.92 35.7 30.28L41.28 24.7C41.68 24.32 41.68 23.68 41.3 23.3Z" fill="#E63946"/>
                    </svg>
                </Link>
            </div>




        </div>
    )
}