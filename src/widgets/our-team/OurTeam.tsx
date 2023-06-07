import cn from "classnames";
import useEmblaCarousel from "embla-carousel-react";
import { FC } from "react";
import Image from "next/image";

import { Container } from "../../shared/ui/container";
import { Section } from "../../shared/ui/section";

import team_5 from "../../shared/media/team_5.png";
import team_2 from "../../shared/media/team_2.png";
import team_7 from "../../shared/media/team_7.png";
import team_3 from "../../shared/media/team_3.png";
import team_1 from "../../shared/media/team_1.png";
import team_4j from "../../shared/media/team_4.jpg";
import team_6 from "../../shared/media/team_6.png";
import team_4 from "../../shared/media/team_4.png";
import team_8 from "../../shared/media/team_8.png";
import team_9 from "../../shared/media/team_9.jpg";

import s from "./OurTeam.module.scss";

export interface OurTeamProps {}

export const OurTeam: FC<OurTeamProps> = () => {
  const [ref, carousel] = useEmblaCarousel({ align: "start", loop: true });

  return (
    <Section id="our-team" title="Our team">
      <Container className={s._}>
        <div className={cn(s.navigation, s.navigation_prev)}>
          <button
            type="button"
            className={s.button}
            onClick={() => carousel?.scrollPrev()}
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
        </div>
        <div className={cn(s.navigation, s.navigation_next)}>
          <button
            type="button"
            className={s.button}
            onClick={() => carousel?.scrollNext()}
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className="embla" ref={ref}>
          <div className="embla__container">
            <div className="embla__slide">
              <div className={s.slide}>
                <div className={s.slide__assets}>
                  <Image src={team_5} alt="" className={s.slide__image} />
                </div>
                <div className={s.slide__details}>
                  <span className={s.slide__name}>Doren</span>
                  <span className={s.slide__role}>Co-founder</span>
                  <div className={s.slide__socials}>
                    <a
                      href="https://t.me/dorencrypto"
                      className={s.slide__social}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="50px"
                        height="50px"
                      >
                        <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className={s.slide}>
                <div className={s.slide__assets}>
                  <Image src={team_2} alt="" className={s.slide__image} />
                </div>
                <div className={s.slide__details}>
                  <span className={s.slide__name}>Ilia</span>
                  <span className={s.slide__role}>Project manager</span>
                  <div className={s.slide__socials}>
                    <a href="https://t.me/Gil_wus" className={s.slide__social}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="50px"
                        height="50px"
                      >
                        <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className={s.slide}>
                <div className={s.slide__assets}>
                  <Image src={team_8} alt="" className={s.slide__image} />
                </div>
                <div className={s.slide__details}>
                  <span className={s.slide__name}>Eugene</span>
                  <span className={s.slide__role}>SMM-manager</span>
                  <div className={s.slide__socials}>
                    <a
                      href="https://t.me/evgeniikzh"
                      className={s.slide__social}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="50px"
                        height="50px"
                      >
                        <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className={s.slide}>
                <div className={s.slide__assets}>
                  <Image src={team_9} alt="" className={s.slide__image} />
                </div>
                <div className={s.slide__details}>
                  <span className={s.slide__name}>Anna</span>
                  <span className={s.slide__role}>PR-manager</span>
                  <div className={s.slide__socials}>
                    <a href="https://t.me/AnnEsina" className={s.slide__social}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="50px"
                        height="50px"
                      >
                        <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className={s.slide}>
                <div className={s.slide__assets}>
                  <Image src={team_7} alt="" className={s.slide__image} />
                </div>
                <div className={s.slide__details}>
                  <span className={s.slide__name}>Vladislav</span>
                  <span className={s.slide__role}>
                    Smart-contract developer
                  </span>
                  <div className={s.slide__socials}>
                    <a
                      href="https://t.me/mushroom_red"
                      className={s.slide__social}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="50px"
                        height="50px"
                      >
                        <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className={s.slide}>
                <div className={s.slide__assets}>
                  <Image src={team_3} alt="" className={s.slide__image} />
                </div>
                <div className={s.slide__details}>
                  <span className={s.slide__name}>Dmitry</span>
                  <span className={s.slide__role}>Backend developer</span>
                  <div className={s.slide__socials}>
                    <a
                      href="https://t.me/dms_gavrilov"
                      className={s.slide__social}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="50px"
                        height="50px"
                      >
                        <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className={s.slide}>
                <div className={s.slide__assets}>
                  <Image src={team_1} alt="" className={s.slide__image} />
                </div>
                <div className={s.slide__details}>
                  <span className={s.slide__name}>Ivan</span>
                  <span className={s.slide__role}>Backend developer</span>
                  <div className={s.slide__socials}>
                    <a href="https://t.me/psurtcev" className={s.slide__social}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="50px"
                        height="50px"
                      >
                        <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className={s.slide}>
                <div className={s.slide__assets}>
                  <Image src={team_4j} alt="" className={s.slide__image} />
                </div>
                <div className={s.slide__details}>
                  <span className={s.slide__name}>Alexey</span>
                  <span className={s.slide__role}>Frontend developer</span>
                  <div className={s.slide__socials}>
                    <a
                      href="https://t.me/alekseifl"
                      className={s.slide__social}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="50px"
                        height="50px"
                      >
                        <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className={s.slide}>
                <div className={s.slide__assets}>
                  <Image src={team_6} alt="" className={s.slide__image} />
                </div>
                <div className={s.slide__details}>
                  <span className={s.slide__name}>Olga</span>
                  <span className={s.slide__role}>Web-designer</span>
                  <div className={s.slide__socials}>
                    <a href="https://t.me/otorchua" className={s.slide__social}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="50px"
                        height="50px"
                      >
                        <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className={s.slide}>
                <div className={s.slide__assets}>
                  <Image src={team_4} alt="" className={s.slide__image} />
                </div>
                <div className={s.slide__details}>
                  <span className={s.slide__name}>Kirill</span>
                  <span className={s.slide__role}>Web-designer</span>
                  <div className={s.slide__socials}>
                    <a
                      href="https://t.me/frehyyydude"
                      className={s.slide__social}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="50px"
                        height="50px"
                      >
                        <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
