import './App.css';

function Noise() {
    return(
        <svg viewBox='0 3 70 50' xmlns='http://www.w3.org/2000/svg' className="noise">
            <filter id='noiseFilter'>
                <feTurbulence 
                    type='fractalNoise' 
                    baseFrequency='0.65' 
                    numOctaves='3' 
                    stitchTiles='stitch'/>
            </filter>
        
        <rect width='100vw' height='100vh' filter='url(#noiseFilter)'> 
        <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="360 35 25" to="0 35 25" dur="180s" additive="sum" repeatCount="indefinite" />

        </rect>
        </svg>
    )
} 

export function App() {
  return (
      <div className="main-page" >
        <Noise />
        <h1>we are growing gills</h1>
        <p>Watch this space. New things coming sooner than you think.</p>
        <a target="_blank" rel="noreferrer" href="https://93353c9e.sibforms.com/serve/MUIFANTBBwsAEG1PsXwC_dAz7lZSOtjwWdh3veh4k1NdcdcxZewf77lbuKHZYMQGhHUukhQxksoY27UlQBJyUNFmycCaUmEPzLRJDi2lI-jqoIh-pY1uSFUktodbxj03XLz1sCb9lRpLtDXYCJ316Ceq3XGaFyLLapwd5M3HaAqR_obu0RgaQMXD1mBBNqsYhcm-u_oH88rmUOytZQ==" >ATWC Playtest</a>
      </div>
  );
}
