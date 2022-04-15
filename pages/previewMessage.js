import { useContext } from "react";
import { MessageContext } from "../context/MessageContext";
import ButtonSymbol from "../components/ButtonSymbol";
import Image from "next/image";
import progressBar5 from "../public/progress/progressbar_step5.png"


export default function Previewmessagescreen() {
  const { message } = useContext(MessageContext);

  return (
    <div className='container'>
    <div className='progressbranch'>
    <Image
      src={progressBar5}
      className='OB-image'
      alt='progress bar5 logo'
    />
    </div>
      <h3>Thanks for sharing!</h3>
      <p>
        Here's a preview of the Olive Branch that we created for you to
        {message.recipientName}
      </p>
      <br></br>
      <p>
        Hey {message.recipientName}, you just recieved an Olive Branch from{" "}
        {message.senderName}, who wants to reconnect with you. Tap the voice
        message below to listen!
      </p>
      <ButtonSymbol innerRef='/recipientNumber' />
    </div>
  );
}
