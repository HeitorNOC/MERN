import Header from "../Header"
import Chat from '../Chat'
import lara from '../img/lara.jpg'
import ingrid from '../img/ingrid.jpg'
import mel from '../img/mel.jpg'

function Chats() {
    return (
        <div className="chats">
            <Header backButton="/" />
            <Chat name="Lara Silva" message="Tudo bem?" timestamp="35 minutos atrás" profilePic={lara} />
            <Chat name="Mel Maia" message="Te Amo ❤" timestamp="3 minutos atrás" profilePic={mel} />
            <Chat name="Ingrid Biancchi" message="Vamos nos ver 😈" timestamp="2 horas atrás" profilePic={ingrid} />
        </div>
    )
}

export default Chats