import './App.css'
import { SupermojoPayButton } from '@supermojo-official/client-sdk-react'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <SupermojoPayButton
                    contractAddress="rMnt7GF5zBwAvvG7AaPWPMFi2dRKHLhurw"
                    clientId="00056f70-3575-4e3e-ae0a-a4e9b2a4c9f0"
                    customEnvUrl='https://checkout-qa.supermojo.com/'
                />
            </header>
        </div>
    )
}

export default App
