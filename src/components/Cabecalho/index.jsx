import React from 'react';
import { GrRobot } from "react-icons/gr";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import styled from 'styled-components';

const CabMod = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    padding: 5px 15px;
    background: #03002e;
    top: 0;
    left: 0;

    .links{
        display: flex;
        gap: 20px;
    }

    .links a{
        color: #fff;
    }
`

const Cabecalho = () => {
  return (
    <header>
        <CabMod>
            <GrRobot style={{width:"20px", height:"20px"}}/>
            <div className="links">
                <a href='https://www.linkedin.com/in/henrique-madruga-gonçalves-044a072aa'><FaLinkedin style={{width:"20px", height:"20px"}}/></a>
                <a href='https://www.github.com/henriquemgoncalves'><FaGithubSquare style={{width:"20px", height:"20px"}}/></a>
            </div>
        </CabMod> 
    </header>
  )
}

export default Cabecalho
