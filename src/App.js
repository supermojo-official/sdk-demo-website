import './App.css'
import { SupermojoPayButton } from '@supermojo-official/client-sdk-react'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <SupermojoPayButton
                    contractAddress="rGJheK965Vf2jwEKiBM9gp8eEjVTt48PEk"
                    clientId="9673864a-6e56-40f2-bb30-64d6fe87cf5f"
                    targetEnv="local" //optional
                />
            </header>
        </div>
    )
}

export default App
