import Image from "next/image";
import { useContext } from "react";
import Header from "../components/Header";
import GetFormData from "../components/Forms/GetFormData";
import { MessageContext } from "../context/MessageContext";
import progressBar2 from "../public/progress/progressbar_step2.png";

export default function Recipientnamescreen() {
  const { message } = useContext(MessageContext);

  return (
    <div className='container'>
      <div className='progressbranch'>
        <Image src={progressBar2} alt='progress bar2 logo' />
      </div>
      <Header
        innerRef='/userName'
        headerText={`Hey ${message.senderName}, who are you reaching out to?`}
      />
      <GetFormData
        inputType='text'
        inputId='recipient-name'
        msgKey='recipientName'
        href='/uploadPhoto'
        buttonType='symbol'
      />
      {/* <p className='body'>{`${JSON.stringify(message)}`}</p> */}
    </div>
  );
}
