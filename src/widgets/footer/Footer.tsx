import cn from "classnames";
import { FC } from "react";

import { Container } from "../../shared/ui/container";
import { Logo } from "../../shared/ui/logo";

import s from "./Footer.module.scss";
import Link from "next/link";

export interface FooterProps {}

export const Footer: FC<FooterProps> = (props) => {
  return (
    <footer className={s._}>
      <Container>
        <div className={s.content}>
          <div className={s.meta}>
            <Logo className={s.logo} />
            <span className={s.title}>NFT Play | Bicas Ecosystem</span>
            <span className={s.rights}>
              © {new Date().getFullYear()} All rights reserved
            </span>
            <a href="#" className={cn(s.link, s.privacy)}>
              Privacy policy
            </a>
          </div>
          <div className={s.navigation}>
            <div className={s.category}>
              <span className={s.category__title}>Explore:</span>
              <ul className={s.category__list}>
                <li className={s.category__item}>
                  <a href="https://app.bicas.io/" className={s.link}>
                    Main Web-app
                  </a>
                </li>
                <li className={s.category__item}>
                  <Link href="/" className={s.link}>
                    Blog
                  </Link>
                </li>
                <li className={s.category__item}>
                  <Link href="/" className={s.link}>
                    Join the ecosystem
                  </Link>
                </li>
              </ul>
            </div>
            <div className={s.category}>
              <span className={s.category__title}>Developers:</span>
              <ul className={s.category__list}>
                <li className={s.category__item}>
                  <a
                    href="https://bcss-organization.gitbook.io/whitepaper-bicas-eng/"
                    className={s.link}
                  >
                    White paper
                  </a>
                </li>
                <li className={s.category__item}>
                  <Link href="/" className={s.link}>
                    Bug hounty
                  </Link>
                </li>
                <li className={s.category__item}>
                  <Link href="/" className={s.link}>
                    Bicas license
                  </Link>
                </li>
              </ul>
            </div>
            <div className={s.category}>
              <span className={s.category__title}>Contact us:</span>
              <ul className={s.category__list}>
                <li className={s.category__item}>
                  <Link href="/" className={s.link}>
                    info@bicas.io
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={s.bottom}>
          <div className={s.column}>
            <span className={s.company}>BSC METAVERSE LIMITED</span>
            <span className={s.address}>
              Suite 305, Griffith Corporate Centre
            </span>
            <span className={s.mailing}>
              P.O. Box 1510, Beachmont Kingstown St. Vincent and the Grenadines
            </span>
            <span className={s.number}>26818 BC 2022</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
