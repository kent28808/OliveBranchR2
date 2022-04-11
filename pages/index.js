import Image from "next/image";
import ButtonWithText from "../components/ButtonWithText";
import oliveBranch from "../public/index/ob-image.png";
import oliveBranch2x from "../public/index/ob-image@2x.png";
import oliveBranch3x from "../public/index/ob-image@3x.png";
import arrow from "../public/arrow.png";

export default function Home() {
  return (
    <div className='container'>
      <h1>Olive Branch</h1>
      <Image
        src={oliveBranch}
        srcSet={`${oliveBranch2x} 2x, ${oliveBranch3x} 3x`}
        className='OB-image'
        alt='olive branch logo'
      />
      <ButtonWithText
        innerRef='/intro'
        text='Reconnect with your partner after a fight'
        img={arrow}
        imgClassName={".Vector-7"}
      />
    </div>
  );
}
