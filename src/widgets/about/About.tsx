import {
  FloatingFocusManager,
  FloatingOverlay,
  FloatingPortal,
  useClick,
  useFloating,
  useInteractions,
  useTransitionStyles,
} from "@floating-ui/react";
import {
  FC,
  PropsWithChildren,
  ReactElement,
  cloneElement,
  useState,
} from "react";
import Marquee from "react-fast-marquee";

import huita from "../../shared/media/zaebala-eta-huita.png";
import turnir from "../../shared/media/ebanii-turnir-suka.png";
import game from "../../shared/media/game.png";
import play from "../../shared/media/nft-play-dura.png";
import metaverse from "../../shared/media/metaverse.png";

import { Container } from "../../shared/ui/container";
import { Section } from "../../shared/ui/section";

import s from "./About.module.scss";
import Image from "next/image";

interface ModalProps extends PropsWithChildren {
  title: string;
  description: string;
  image: ReactElement;
}

const Modal: FC<ModalProps> = ({ children, title, description, image }) => {
  const [open, setOpen] = useState<boolean>(false);

  const { context, refs } = useFloating({
    open,
    onOpenChange: setOpen,
  });

  const click = useClick(context);

  const { getFloatingProps, getReferenceProps } = useInteractions([click]);

  const { isMounted, styles } = useTransitionStyles(context, {
    initial: {
      opacity: 0,
      transform: `translateY(100px)`,
    },
    open: {
      opacity: 1,
      transform: `translateY(0px)`,
    },
    close: {
      opacity: 0,
      transform: `translateY(100px)`,
    },
  });

  const cloned = cloneElement(children as ReactElement, getReferenceProps());

  return (
    <>
      {cloned}
      {isMounted && (
        <FloatingPortal>
          <FloatingOverlay
            lockScroll
            className={s.modal__overlay}
            style={{ opacity: styles.opacity }}
          >
            <FloatingFocusManager context={context}>
              <div
                className={s.modal}
                ref={refs.setFloating}
                style={{ transform: styles.transform }}
              >
                <button
                  className={s.modal__close}
                  onClick={() => setOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
                <div className={s.modal__grid}>
                  <div className={s.modal__assets}>{image}</div>
                  <div className={s.modal__details}>
                    <h4 className={s.modal__title}>{title}</h4>
                    <p className={s.modal__description}>{description}</p>
                  </div>
                </div>
              </div>
            </FloatingFocusManager>
          </FloatingOverlay>
        </FloatingPortal>
      )}
    </>
  );
};

export interface AboutProps {}

export const About: FC<AboutProps> = (props) => {
  return (
    <Section
      id="about"
      title="About us"
      description="BICS token is the energy of the ecosystem, which connects all directions economically and provides exponential growth
        of the token."
    >
      <Marquee gradient={false} speed={30}>
        <Modal
          title="Token BICS"
          description="The BICS token is the energy of the ecosystem that connects all directions economically and provides
					exponential growth of the token."
          image={<Image src={huita} alt="" className={s.image} />}
        >
          <div className={s.slide}>
            <div className={s.slide__assetswrapper}>
              <div className={s.slide__assets}>
                <Image src={huita} alt="" className={s.slide__image} />
                <div className={s.slide__more}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={s.slide__details}>
              <span className={s.slide__title}>Token BICS</span>
            </div>
          </div>
        </Modal>
        <Modal
          title="Tournaments"
          description="Tournaments will be held in various games, the winnings in which will be NFTs, which give bonuses within the framework of the project."
          image={<Image src={turnir} alt="" className={s.image} />}
        >
          <div className={s.slide}>
            <div className={s.slide__assetswrapper}>
              <div className={s.slide__assets}>
                <Image className={s.slide__image} src={turnir} alt="" />
                <div className={s.slide__more}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={s.slide__details}>
              <span className={s.slide__title}>Tournaments</span>
            </div>
          </div>
        </Modal>
        <Modal
          title="P2E Games"
          description="Various P2E projects through which you can replenish your balance in game tokens that can be exchanged for an exchange token (BICS)."
          image={<Image src={game} alt="" className={s.image} />}
        >
          <div className={s.slide}>
            <div className={s.slide__assetswrapper}>
              <div className={s.slide__assets}>
                <Image className={s.slide__image} src={game} alt="" />
                <div className={s.slide__more}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={s.slide__details}>
              <span className={s.slide__title}>P2E Games</span>
            </div>
          </div>
        </Modal>
        <Modal
          title="NFT Play"
          description="A collection of projects that allows you to integrate NFT into the game interaction between people."
          image={<Image src={play} alt="" className={s.image} />}
        >
          <div className={s.slide}>
            <div className={s.slide__assetswrapper}>
              <div className={s.slide__assets}>
                <Image className={s.slide__image} src={play} alt="" />
                <div className={s.slide__more}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={s.slide__details}>
              <span className={s.slide__title}>NFT Play</span>
            </div>
          </div>
        </Modal>
        <Modal
          title="Metaverse"
          description="Welcome to the extraordinary realm of the Bicas's Metaverse, where Non-Fungible Tokens (NFTs) and cryptocurrencies converge to create a captivating digital landscape. As you step into this virtual universe, you are immediately immersed in a vibrant tapestry of sights and sounds."
          image={<Image src={metaverse} alt="" className={s.image} />}
        >
          <div className={s.slide}>
            <div className={s.slide__assetswrapper}>
              <div className={s.slide__assets}>
                <Image className={s.slide__image} src={metaverse} alt="" />
                <div className={s.slide__more}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={s.slide__details}>
              <span className={s.slide__title}>Metaverse</span>
            </div>
          </div>
        </Modal>
      </Marquee>
    </Section>
  );
};
