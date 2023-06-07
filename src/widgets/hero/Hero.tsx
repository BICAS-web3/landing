import cn from "classnames";
import { FC } from "react";
import Image from "next/image";

import s from "./Hero.module.scss";

import hero_1 from "../../shared/media/hero_2.png";
import hero_2 from "../../shared/media/hero_4.jpg";
import hero_3 from "../../shared/media/hero_3.jpg";

export interface HeroProps {}

export const Hero: FC<HeroProps> = () => {
  return (
    <div id="#hero" className={s._}>
      <div className={s.header}>
        <h2 className={s.title}>
          <span className={s.title__main}>Play with</span>
          <span className={s.title__accent}>NFT</span>
        </h2>
        <p className={s.description}>
          Bicas is a gaming ecosystem with a variety of destinations that embody
          the new reality of interacting with crypto-objects
        </p>
        <a href="https://app.bicas.io/" className={s.link}>
          <span className={s.link__text}>Explore</span>
          <span className={s.link__icon}>
            <svg
              width="16"
              height="25"
              viewBox="0 0 16 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.292893 21.7929C-0.0976311 22.1834 -0.0976311 22.8166 0.292893 23.2071C0.683418 23.5976 1.31658 23.5976 1.70711 23.2071L0.292893 21.7929ZM15.435 9.06497C15.435 8.51269 14.9873 8.06497 14.435 8.06497L5.43503 8.06497C4.88274 8.06497 4.43503 8.51269 4.43503 9.06497C4.43503 9.61726 4.88274 10.065 5.43503 10.065L13.435 10.065L13.435 18.065C13.435 18.6173 13.8827 19.065 14.435 19.065C14.9873 19.065 15.435 18.6173 15.435 18.065L15.435 9.06497ZM1.70711 23.2071L15.1421 9.77208L13.7279 8.35786L0.292893 21.7929L1.70711 23.2071Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </a>
      </div>
      <div className={s.scene}>
        <div className={s.nfts}>
          <div data-order="first" className={cn(s.nft, s.nft_back)}>
            <Image className={s.nft__media} src={hero_1} alt="" />
          </div>
          <div className={cn(s.nft, s.nft_front)}>
            <Image className={s.nft__media} src={hero_2} alt="" />
          </div>
          <div data-order="last" className={cn(s.nft, s.nft_back)}>
            <Image className={s.nft__media} src={hero_3} alt="" />
          </div>
        </div>
        <div className={s.shadow} />
      </div>
    </div>
  );
};
