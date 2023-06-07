import { FC } from "react";

import { Container } from "../../shared/ui/container";
import { Section } from "../../shared/ui/section";

import s from "./ContactUs.module.scss";

export interface ContactsUsProps {}

export const ContactUs: FC<ContactsUsProps> = () => {
  return (
    <Section id="contact-us">
      <Container>
        <div className={s._}>
          <div className={s.content}>
            <h4 className={s.title}>Contact Us</h4>
            <p className={s.description}>
              If you have any feedback, need support, or want to report bugs,
              please don&apos;t hesitate to reach out to us on our Discord
              channel. We are always happy to hear from our players and strive
              to improve the experience for everyone.
            </p>
            <a href="https://discord.gg/mxUXAT5v" className={s.button}>
              Join Us
            </a>
          </div>
          <div className={s.media}>
            <svg
              width="406"
              height="335"
              viewBox="0 0 406 335"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.3">
                <path
                  d="M311.666 31.7722C286.5 24.3109 260.223 19.9482 233.112 19.2306C230.698 25.4557 228.02 33.8725 226.457 40.5599C197.869 40.4503 170.091 44.5272 143.315 52.7625C139.705 46.8342 134.721 39.5421 130.621 34.2729C104.859 42.7507 80.9435 54.48 58.9828 68.858C21.9886 147.479 19.4159 219.287 35.8316 287.134C70.8994 306.058 103.44 315.763 134.894 320.736C140.876 309.486 145.786 297.611 149.875 285.464C138.365 283.044 127.261 279.39 116.619 274.885C119.02 272.576 121.201 270.103 123.41 267.822C187.477 286.991 252.42 277.459 307.511 240.802C310.31 242.544 313.082 244.094 316.045 245.616C307.146 252.989 297.341 259.516 287.232 265.305C294.638 275.764 302.754 285.728 311.715 294.785C340.414 280.983 368.985 262.308 396.945 234.134C392.691 153.152 362.235 86.9739 312.049 31.716L311.666 31.7722ZM149.57 227.387C131.562 230.03 114.365 215.528 111.357 195.03C108.348 174.531 120.27 155.756 138.661 153.057C157.052 150.358 174.057 164.887 176.874 185.414C179.854 205.72 167.961 224.688 149.57 227.387ZM270.452 209.645C252.444 212.288 235.247 197.786 232.238 177.288C229.23 156.79 241.152 138.014 259.543 135.315C277.933 132.616 294.939 147.146 297.756 167.672C300.736 187.979 288.843 206.946 270.452 209.645Z"
                  fill="#666666"
                />
              </g>
            </svg>
          </div>
        </div>
      </Container>
    </Section>
  );
};
