import './App.css'
import { SupermojoPayButton } from '@supermojo-official/client-sdk-react'

import { CLIENT_ID, TOKEN_ADDRESS } from './config'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <SupermojoPayButton
                    contractAddress={TOKEN_ADDRESS}
                    clientId={CLIENT_ID}
                />
            </header>
        </div>
    )
}

export default App
