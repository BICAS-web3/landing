import Image from "next/image";
import { FC } from "react";

import { Container } from "../../shared/ui/container";
import { Section } from "../../shared/ui/section";

import capsule from "../../shared/media/capsule.png";

import s from "./Advantages.module.scss";

export interface AdvantagesProps {}

export const Advantages: FC<AdvantagesProps> = () => {
  return (
    <Section id="advantages" title="Advantages">
      <div style={{ padding: "0 20px" }}>
        <Container className={s._}>
          <Image alt="" src={capsule} className={s.capsule} />
          <div className={s.grid}>
            <div className={s.advantage}>
              <span className={s.advantage__icon}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.66699 7V14C4.66699 14 4.66699 17.5 12.8337 17.5C21.0003 17.5 21.0003 14 21.0003 14V7"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.8337 24.5C4.66699 24.5 4.66699 21 4.66699 21V14M22.167 25.6667V18.6667M22.167 18.6667L25.667 22.1667M22.167 18.6667L18.667 22.1667M12.8337 3.5C21.0003 3.5 21.0003 7 21.0003 7C21.0003 7 21.0003 10.5 12.8337 10.5C4.66699 10.5 4.66699 7 4.66699 7C4.66699 7 4.66699 3.5 12.8337 3.5Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <h4 className={s.advantage__title}>Simple to use</h4>
              <p className={s.advantage__description}>
                Just connect your wallet
              </p>
            </div>
            <div className={s.advantage}>
              <span className={s.advantage__icon}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.33301 14H19.833M9.33301 14L6.99967 11.6667H2.33301L4.66634 14L2.33301 16.3333H6.99967L9.33301 14ZM19.833 14L17.4997 11.6667M19.833 14L17.4997 16.3333M18.6663 26.25C21.8875 26.25 24.4997 20.7655 24.4997 14C24.4997 7.2345 21.8875 1.75 18.6663 1.75C15.4452 1.75 12.833 7.2345 12.833 14C12.833 20.7655 15.4452 26.25 18.6663 26.25Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <h4 className={s.advantage__title}>Ecosystem</h4>
              <p className={s.advantage__description}>
                Povered by self-hosted token
              </p>
            </div>
            <div className={s.advantage}>
              <span className={s.advantage__icon}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9997 25.6666C20.4432 25.6666 25.6663 20.4434 25.6663 13.9999C25.6663 7.55642 20.4432 2.33325 13.9997 2.33325C7.55618 2.33325 2.33301 7.55642 2.33301 13.9999C2.33301 20.4434 7.55618 25.6666 13.9997 25.6666Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.91699 14.5833L9.33366 16.9167L8.16699 21L9.33366 24.5M19.8337 23.9167L19.2503 21L16.3337 19.8333V15.75L19.8337 14.5833L25.0837 15.1667M22.167 6.41667L21.5837 8.16667L17.5003 8.75V12.25L20.417 11.0833H22.7503L25.0837 12.25M2.91699 12.25L5.83366 9.91667L8.75033 9.33333L11.0837 5.83333L9.91699 3.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <h4 className={s.advantage__title}>Earn</h4>
              <p className={s.advantage__description}>Multiply your earnings</p>
            </div>
            <div className={s.advantage}>
              <span className={s.advantage__icon}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.1667 23.3334H5.83333C5.21449 23.3334 4.621 23.0876 4.18342 22.65C3.74583 22.2124 3.5 21.6189 3.5 21.0001V10.5001C3.5 9.88124 3.74583 9.28775 4.18342 8.85017C4.621 8.41258 5.21449 8.16675 5.83333 8.16675H22.1667C22.7855 8.16675 23.379 8.41258 23.8166 8.85017C24.2542 9.28775 24.5 9.88124 24.5 10.5001V21.0001C24.5 21.6189 24.2542 22.2124 23.8166 22.65C23.379 23.0876 22.7855 23.3334 22.1667 23.3334Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M19.2503 16.3334C19.0956 16.3334 18.9472 16.272 18.8378 16.1626C18.7284 16.0532 18.667 15.9048 18.667 15.7501C18.667 15.5954 18.7284 15.447 18.8378 15.3376C18.9472 15.2282 19.0956 15.1667 19.2503 15.1667C19.405 15.1667 19.5534 15.2282 19.6628 15.3376C19.7722 15.447 19.8337 15.5954 19.8337 15.7501C19.8337 15.9048 19.7722 16.0532 19.6628 16.1626C19.5534 16.272 19.405 16.3334 19.2503 16.3334Z"
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21 8.16662V6.53679C20.9999 6.17921 20.9176 5.82643 20.7595 5.50571C20.6014 5.18498 20.3717 4.90488 20.0881 4.68705C19.8045 4.46921 19.4747 4.31947 19.1241 4.24937C18.7734 4.17928 18.4114 4.19071 18.0658 4.28279L5.2325 7.70462C4.73556 7.83705 4.2963 8.12994 3.98299 8.53777C3.66968 8.94559 3.49989 9.4455 3.5 9.95979V10.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                </svg>
              </span>
              <h4 className={s.advantage__title}>Privacy and security</h4>
              <p className={s.advantage__description}>
                Fair environment with reliable rules
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
};
